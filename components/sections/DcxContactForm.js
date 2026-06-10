(function () {
  function substitute(tpl, ctx) {
    return tpl.replace(/\{\{\s*([\w_]+)\s*\}\}/g, function (_, k) {
      var v = ctx[k];
      if (v == null) return "";
      return String(v);
    });
  }

  function init(root) {
    if (!root || root.__dcxcfReady) return;
    root.__dcxcfReady = true;
    var configRaw = root.getAttribute("data-dcx-form-config");
    var config = {};
    try { config = JSON.parse(configRaw || "{}"); } catch (_) { config = {}; }
    var form = root.querySelector(".dcx-contact-form");
    var result = root.querySelector(".dcx-contact-result");
    var submitBtn = root.querySelector(".dcx-contact-submit");
    if (!form || !submitBtn) return;

    try {
      var qs = new URLSearchParams(location.search);
      ["product","service","country","source","campaign","utm_source","utm_medium","utm_campaign"].forEach(function (k) {
        var v = qs.get(k);
        if (!v) return;
        var input = form.querySelector('input[name="' + k + '"]');
        if (!input) { input = document.createElement("input"); input.type = "hidden"; input.name = k; form.appendChild(input); }
        if (!input.value) input.value = v;
      });
    } catch (_) {}

    function show(kind, msg) {
      if (!result) return;
      result.hidden = false;
      result.textContent = msg;
      result.className = "dcx-contact-result " + (kind === "ok" ? "is-ok" : kind === "err" ? "is-err" : "");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = form.querySelector('input[name="_hp"]');
      if (hp && hp.value) return;
      submitBtn.disabled = true;
      var origLabel = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      var fd = new FormData(form);
      var data = {};
      fd.forEach(function (v, k) { if (k !== "_hp") data[k] = v; });
      data._source = config.source_tag || "";
      data._url = typeof location !== "undefined" ? location.href : "";
      data._ts = new Date().toISOString();
      if (config.team_id) data.team_id = config.team_id;
      if (config.user_id) data.user_id = config.user_id;
      var headers = {};
      try { headers = JSON.parse(config.headers_json || "{}") || {}; } catch (_) { headers = {}; }
      if (!headers["Content-Type"]) headers["Content-Type"] = "application/json";
      var body;
      if (config.payload_template && config.payload_template.trim()) {
        try {
          var rendered = substitute(config.payload_template, data);
          try { body = JSON.parse(rendered); body = JSON.stringify(body); }
          catch (_) { body = rendered; headers["Content-Type"] = headers["Content-Type"] || "text/plain"; }
        } catch (err) {
          show("err", config.error_message || "Configuration error: " + err.message);
          submitBtn.disabled = false; submitBtn.textContent = origLabel;
          return;
        }
      } else {
        body = JSON.stringify(data);
      }
      var endpoint = config.endpoint || "/api/lead";
      var method = (config.method || "POST").toUpperCase();
      fetch(endpoint, { method: method, headers: headers, body: method === "GET" ? undefined : body, mode: "cors" })
        .then(function (resp) {
          return resp.json().catch(function () { return {}; }).then(function (j) {
            if (resp.ok && (j.ok !== false)) {
              show("ok", config.success_message || "Thanks! We got your message.");
              form.reset();
            } else {
              show("err", config.error_message || (j.error || ("Submission failed (HTTP " + resp.status + ").")));
            }
          });
        })
        .catch(function (err) {
          show("err", (config.error_message || "Network error.") + " (" + err.message + ")");
        })
        .then(function () { submitBtn.disabled = false; submitBtn.textContent = origLabel; });
    });
  }
  function boot() { document.querySelectorAll(".dcx-contact-section").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true }); else boot();
  setTimeout(boot, 200); setTimeout(boot, 1200);
})();
