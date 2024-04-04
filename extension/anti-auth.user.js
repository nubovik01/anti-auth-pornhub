// ==UserScript==
// @name         Анти-авторизация на PornHub через VK
// @namespace    https://github.com/Nubovik01/anti-auth-pornhub/
// @homepage     https://github.com/Nubovik01/anti-auth-pornhub/
// @version      1.0.4
// @description  Этот скрипт убирает штучку "Авторизируйтесь через VK для подтверждения возраста"
// @icon         https://di.phncdn.com/www-static/favicon.ico
// @author       Nikita A. (https://nubovik01.github.io)
// @match        *://*.pornhub.com/*
// @downloadURL  https://github.com/Nubovik01/anti-auth-pornhub/raw/main/extension/anti-auth.user.js
// @updateURL    https://github.com/Nubovik01/anti-auth-pornhub/raw/main/extension/anti-auth.user.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      pornhub.com
// @grant        GM_getResourceURL
// @run-at       document-body
// ==/UserScript==

const ageVerificationContainerElement = document.getElementById("age-verification-container");
ageVerificationContainerElement.remove();
const ageVerificationWrapperElement = document.getElementById("age-verification-wrapper");
ageVerificationWrapperElement.remove();
