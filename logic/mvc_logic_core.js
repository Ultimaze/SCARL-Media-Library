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
    var htmlStartSite,
        htmlImpressumSiteBodyToSection,
        htmlLibraryBodyToSection,
        htmlVideoLibraryPlayerSiteBody,
        htmlAudioLibraryPlayerSiteBody;

    //  Declaration of Functions
    function addElementToRoot(element, root) {
        root.appendChild(element);
    }

    function removeElementFromRoot(element, root) {
        var newElement = document.cloneNode(element);
        root.replaceChild(newElement, element);
        root.removeChild(newElement);
    }

    // Initialize variables for html body and section
    htmlStartSite = '';
    htmlLibraryBodyToSection = '';
    htmlImpressumSiteBodyToSection = '';
    htmlVideoLibraryPlayerSiteBody = '';
    htmlAudioLibraryPlayerSiteBody = '';

    // Initialize variables for html


}());
