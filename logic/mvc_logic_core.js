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
        htmlAudioLibraryPlayerSiteBody,
        htmlStartLogo;

    //  Declaration of Functions
    function removeChildFromParent(child, parent) {
        var clonedChild = document.cloneNode(child);
        parent.replaceChild(clonedChild, child);
        parent.removeChild(clonedChild);
    }


    // Initialize variables for html body and section
    htmlStartSite = '';
    htmlLibraryBodyToSection = '';
    htmlImpressumSiteBodyToSection = '';
    htmlVideoLibraryPlayerSiteBody = '';
    htmlAudioLibraryPlayerSiteBody = '';

    // Initialize variables for DOM-Selection
    htmlStartLogo = document.getElementById("startlogo");

    // Initialize event handler




}());
