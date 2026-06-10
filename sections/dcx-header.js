(function () {
  function init(root) {
    if (!root || root.__dcxhReady) return;
    root.__dcxhReady = true;
    var burger = root.querySelector(".dcx-burger");
    var mnav = root.querySelector(".dcx-mobile-nav");
    if (burger && mnav) {
      burger.addEventListener("click", function () {
        burger.classList.toggle("is-open");
        mnav.classList.toggle("is-open");
      });
      mnav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          burger.classList.remove("is-open");
          mnav.classList.remove("is-open");
        });
      });
    }
  }
  function boot() { document.querySelectorAll(".dcx-header").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true }); else boot();
  setTimeout(boot, 200); setTimeout(boot, 1200);
})();
