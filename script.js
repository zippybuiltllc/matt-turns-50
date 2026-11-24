(function () {
  "use strict";

  var frame = document.querySelector(".jersey-frame");
  var img = document.getElementById("jersey-photo");
  var fallback = document.querySelector(".jersey-fallback");

  function showFallback() {
    if (!frame) return;
    frame.classList.add("is-missing");
    if (fallback) fallback.hidden = false;
  }

  function showPhoto() {
    if (!frame) return;
    frame.classList.remove("is-missing");
    if (fallback) fallback.hidden = true;
  }

  if (img) {
    img.addEventListener("error", showFallback);
    img.addEventListener("load", function () {
      if (!img.naturalWidth) showFallback();
      else showPhoto();
    });
    if (img.complete) {
      if (img.naturalWidth) showPhoto();
      else showFallback();
    }
  }

  var statusEl = document.getElementById("clock-status");
  var bigEl = document.getElementById("clock-big");
  var subEl = document.getElementById("clock-sub");
  var replay = document.getElementById("replay");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer;

  function landed() {
    if (statusEl) statusEl.textContent = "Launch window open";
    if (bigEl) bigEl.textContent = "T−0";
    if (subEl) subEl.textContent = "50.0 is go for birthday";
  }

  function replayCountdown() {
    clearInterval(timer);
    if (reduceMotion) {
      landed();
      return;
    }
    var t = 10;
    if (statusEl) statusEl.textContent = "Autosequence in progress";
    if (subEl) subEl.textContent = "Hold the cake. Arm the candles.";
    function tick() {
      if (t <= 0) {
        clearInterval(timer);
        if (statusEl) statusEl.textContent = "Liftoff confirmed";
        if (bigEl) bigEl.textContent = "T−0";
        if (subEl) subEl.textContent = "50.0 is in flight. Happy birthday, Matt.";
        return;
      }
      if (bigEl) bigEl.textContent = "T−" + t;
      t -= 1;
    }
    tick();
    timer = setInterval(tick, 1000);
  }

  if (replay) {
    replay.addEventListener("click", replayCountdown);
  }
  landed();
})();
