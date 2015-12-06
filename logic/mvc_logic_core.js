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
        htmlMainNavigation,
        htmlFirstMenu,
        bodyTagElement;

     // Initialize start-variables for html manipulation
    bodyTagElement = document.body;

    htmlStartLogo = document.getElementById("startlogo");

    // Initialize variables for html construction
    // **NAVIGATION**
    htmlMainNavigation = '\
<div class="top">\
<div>\
<img id="einstellung" src="images/einstellung.png" alt="configuration"/>\
</div>\
<div>\
<img id="logo" src="images/scarl.png" alt="SCARL @Player"/>\
</div>\
<div>\
<img id="suche" src="images/suche.png" alt="search"/>\
</div>\
</div>';

    htmlFirstMenu = '\
<header>\
<img id="menuscarl" src="images/menuscarl.png" alt="SCARL @Player"  />\
</header>\
<hr>\
<nav>\
<ul>\
<li id="vidPath">\
<p>Videothek</p>\
</li>\
<li id="audPath">\
<p>Audiothek</p>\
</li>\
<li id="impPath">\
<p>Impressum</p>\
</li>\
</ul>\
</nav>\
<hr>\
<br>\
<img id="facebook" src="images/fb.png" alt="facebook"/>\
<img id="twitter" src="images/twitter.png" alt="twitter"/>\
<img id="instagram" src="images/instagram.png" alt="instagram"/>\
<img id="tumblr" src="images/tumblr.png" alt="tumblr"/>\
<footer>\
<p id="datPath">Datenschutz</p>\
</footer>';


    //  Declaration of Functions
    function removeChildFromParent(child, parent) {
        var clonedChild = document.cloneNode(child);
        parent.replaceChild(clonedChild, child);
        parent.removeChild(clonedChild);
    }

    function selfDestructor(caller, handlerType, handlerName) {
        // delete handler
        caller.removeEventListener(handlerType, handlerName);
        // delete node
        caller.parentNode.removeChild(caller);
        // delete reference
        caller = null;
    }

    function constructHTML(parent, htmlDom) {
        var counter, temp, tempNodeList, tempNodeListLength, child;
        temp = document.createElement('div');
        temp.innerHTML = htmlDom;
        tempNodeList = temp.childNodes;
        tempNodeListLength = tempNodeList.length;


        /**
        *   Important after appending a child the list
        *   will be shorter then before !
        **/

        if (tempNodeList.length > 1) {
            for (counter = 0; counter < tempNodeListLength; counter += 1) {
                child = tempNodeList[0];
                parent.appendChild(child);
            }
        } else {
            parent.appendChild(tempNodeList[0]);
        }
    }

    function addEvent(caller, eventType, handlerName) {
        caller.addEventListener(eventType, handlerName);
    }

    // Initializer functions
    function initializeFirstMenu() {
        var vidTLink = document.getElementById("vidPath"),
            audTLink = document.getElementById("audPath"),
            impTLink = document.getElementById("impPath");

        addEvent(vidTLink, "click", buildVideoLibrary);

    }

    // Handler functions
    function moveToFirstMenu() {
        constructHTML(bodyTagElement, htmlFirstMenu);
        initializeFirstMenu();
        selfDestructor(this, 'click', moveToFirstMenu);
    }

    function buildVideoLibrary() {
        console.log("construct");
    }


    // Initialize start handler
    addEvent(htmlStartLogo, "click", moveToFirstMenu);
}());
