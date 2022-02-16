// ==UserScript==
// @name         Анти-авторизация на PornHub
// @namespace    https://github.com/nubovik01
// @homepage     https://github.com/nubovik01
// @version      1.0.0
// @encoding     utf-8
// @description  Этот скрипт убирает штучку "Авторизируйтесь через VK для подтверждения возраста"
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Nubovik
// @match        *://*.pornhub.com/*
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/Nubovik01/anti-auth-pornhub/raw/main/extension/anti-auth.user.js
// @updateURL    https://github.com/Nubovik01/anti-auth-pornhub/raw/main/extension/anti-auth.user.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @grant        GM_xmlhttpRequest
// @run-at       document-body
// ==/UserScript==

document.getElementById("age-verification-container").remove();
document.getElementById("age-verification-wrapper").remove();
