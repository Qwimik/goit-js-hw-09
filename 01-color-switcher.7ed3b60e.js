!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=null;function n(t){t.setAttribute("disabled",!t.disabled)}function r(t){t.removeAttribute("disabled")}n(t.stopBtn),t.startBtn.addEventListener("click",(function(t){var a=t.target.nextElementSibling;n(t.target),r(a),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(t){var a=t.target.previousElementSibling;n(t.target),r(a),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.7ed3b60e.js.map
