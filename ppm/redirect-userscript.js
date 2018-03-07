// ==UserScript==
// @name         PPM redirector
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirect script for old PPM site to new experience.
// @author       You
// @match        https://project.dtc.corp/niku/nu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(redirectToNewPpm, 1000);

    function redirectToNewPpm() {
        window.location.href = "https://project.dtc.corp/pm/";
    }
})();