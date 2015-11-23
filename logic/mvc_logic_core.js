"use strict";
/*
    Created by SCARL

    Table of content
    line 015-000: Initialization
        line 000-000:
        line 000-000:
        line 000-000:
        line 000-000:
*/

//  Initialization
(function () {
    //  Declaration of Vriables
    var htmlStartLogo,
        htmlMainmenu,
        bodyTagElement;

     // Initialize start-variables for html manipulation
    bodyTagElement = document.getElementsByTagName('body');

    htmlStartLogo = document.getElementById("startlogo");

    // Initialize variables for html construction
    // **NAVIGATION**
    htmlMainmenu = "\
    <div class='top'>\
            <div>\
                <img id='configuration' src='images/einstellung.png' alt='configuration'/>\
            </div>\
            <div>\
                <img id='logo' src='images/scarl.png' alt='SCARL @Player'/>\
            </div>\
            <div>\
                <img id='search' src='images/suche.png' alt='search'/>\
            </div>\
        </div>\
    ";

    //  Declaration of Functions
    function removeChildFromParent(child, parent) {
        var clonedChild = document.cloneNode(child);
        parent.replaceChild(clonedChild, child);
        parent.removeChild(clonedChild);
    }

    //  Declaration of prototype-Functions
    String.prototype.parseToDOM = function () {
        var dom,
            fragDOM,
            parentNode,
            childNode;

        dom = document;
        parentNode = dom.createElement("div");
        fragDOM = dom.createDocumentFragment();

        parentNode.innerHTML = this;

        while (childNode = parentNode.firstChild) {fragDOM.appendChild(childNode); }
        return fragDOM;
    };

    //  Declaration of helper-Functions
    function selfDestructor(caller, handlerType, handlerName) {
        // delete handler
        caller.removeEventListener(handlerType, handlerName);
        // delete node
        caller.parentNode.removeChild(caller);
        // delete reference
        caller = null;
    }

    function constructHTML(parent, htmlDom) {
        parent.appendChild(htmlDom);
    }

    function addEvent(caller, eventType, handlerName) {
        caller.addEventListener(eventType, handlerName);
    }

    function initializeMainSite() {
        var config = document.getElementById('configuration'),
            logo = document.getElementById('logo'),
            search = document.getElementById('search');


    }

    // Declaration of handler-functions
    function moveToMainSite() {
        constructHTML(bodyTagElement, htmlMainmenu);
        initializeMainSite();
        selfDestructor(this, 'click', moveToMainSite);
    }


    // Initialize start handler
    htmlStartLogo.addEventListener('click', moveToMainSite());

}());
