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
<p>@Mediathek</p>\
<hr>\
<p>Musik</p>\
<p>Videoclip</p>\
<hr>\
<img id="facebook" src="" alt="facebook"/>\
<img id="twitter" src="" alt="twitter"/>\
<img id="instagram" src="" alt="instagram"/>\
<img id="tumblr" src="" alt="tumblr"/>\
<br>\
<p>Datenschutz</p>\
<p>Impressum</p>';


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

        if (tempNodeList.length > 0) {
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

    function initializeMainSite() {
        var config = document.getElementById('configuration'),
            logo = document.getElementById('logo'),
            search = document.getElementById('search');


    }



    // Declaration of handler-functions
    function moveToMainSite() {
        constructHTML(bodyTagElement, htmlFirstMenu);

        selfDestructor(this, 'click', moveToMainSite);
    }


    // Initialize start handler
    addEvent(htmlStartLogo, "click", moveToMainSite);

}());
