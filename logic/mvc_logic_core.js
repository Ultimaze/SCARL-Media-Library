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
    var htmlStart,
        htmlMainmenu,
        htmlVideo,
        htmlAudio;

    //  Declaration of Functions

    function addElementToRoot(element, root) {
        root.appendChild(element);
    }

    function removeElementFromRoot(element, root) {
        var newElement = document.cloneNode(element);
        root.replaceChild(newElement, element);
        root.removeChild(newElement);
    }



    //  Fade out from start



}());
