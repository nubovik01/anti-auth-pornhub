// ==UserScript==
// @name         Анти-авторизация на PornHub
// @namespace    https://github.com/Nubovik01/anti-auth-pornhub/
// @homepage     https://github.com/Nubovik01/anti-auth-pornhub/
// @version      1.0.3
// @description  Этот скрипт убирает штучку "Авторизируйтесь через VK для подтверждения возраста"
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Nubovik
// @match        *://*.pornhub.com/*
// @downloadURL  https://github.com/Nubovik01/anti-auth-pornhub/raw/main/extension/anti-auth.user.js
// @updateURL    https://github.com/Nubovik01/anti-auth-pornhub/raw/main/extension/anti-auth.user.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

document.getElementById("age-verification-container").remove();
document.getElementById("age-verification-wrapper").remove();
