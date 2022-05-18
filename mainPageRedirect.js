// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ilias.studium.kit.edu/ilias.php?baseClass=ilrepositorygui&reloadpublic=1&cmd=frameset&ref_id=1
// @icon         https://www.google.com/s2/favicons?domain=kit.edu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("header-inner")[0].children[2].children[2].children[0].click();
})();
