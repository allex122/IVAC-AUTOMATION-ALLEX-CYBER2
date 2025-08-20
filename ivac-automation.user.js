// ==UserScript==
// @name         IVAC Loader (Cyber2)
// @namespace    allex.cyber2
// @version      1.0.0
// @description  Inject hosted IVAC automation (Cyber2 Branding)
// @author       Allex@cyber2
// @match        https://payment.ivacbd.com/*
// @match        https://www.ivacbd.com/*
// @icon         https://www.ivacbd.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/allex122/IVAC-AUTOMATION-BY-ALLEX-CYBER2/main/ivac-automation.user.js
// @downloadURL  https://raw.githubusercontent.com/allex122/IVAC-AUTOMATION-BY-ALLEX-CYBER2/main/ivac-automation.user.js
// @grant        none
// ==/UserScript==

(function () {
  const HOSTED = "https://allex122.github.io/IVAC-AUTOMATION-BY-ALLEX-CYBER2/ivac-main.js";
  const s = document.createElement("script");
  s.src = HOSTED + "?v=" + Date.now(); // fresh load every time
  s.defer = true;
  document.documentElement.appendChild(s);
})();
