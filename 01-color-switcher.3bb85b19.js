!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");var a=null;t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),d.removeAttribute("disabled","disabled"),a=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),d.addEventListener("click",(function(){clearInterval(a),d.setAttribute("disabled","disabled"),t.removeAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.3bb85b19.js.map
