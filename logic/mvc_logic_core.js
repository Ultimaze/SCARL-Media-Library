"use strict";
/*
    Created by SCARL

    Table of content
    line 014-000: Initialization
        line 000-000:
        line 000-000:
        line 000-000:
        line 000-000:
*/

//  Initialization
(function () {


    /************************************************************
    *   DECLARATION OF GLOBAL VARIABLES
    ************************************************************/


    var html_1stPage_Starter,
        html_2ndPage_Menu,
        html_3rdPage_VideoLibrary,
        html_3rdPage_VideoLibrary_HardCode,
      //  html_3rdPage_AudioLibrary,
        bodyTagElement;


    /************************************************************
    *   INITIALIZATION OF GLOBAL VARIABLES
    ************************************************************/


    // html body
    bodyTagElement = document.body;

    // index.html start site
    html_1stPage_Starter = document.getElementById("startlogo");

    // This will be the first menu to reach after the start screen
    html_2ndPage_Menu = '\
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

    // the base of the video library
    html_3rdPage_VideoLibrary = '';

    // temporary hard coded version of video library
    html_3rdPage_VideoLibrary_HardCode = '';


    /************************************************************
    *   DECLARATION OF HELPER-FUNCTIONS
    ************************************************************/


    function stackCleaner(caller, handlerType, handlerName) {


        var that = caller;

        // delete handler
        that.removeEventListener(handlerType, handlerName);

        // delete node
        that.parentNode.removeChild(that);

        // delete reference
        that = null;


    }


    function requestMaker(targetPHP) {


        var xhttp = new XMLHttpRequest(),
            response = [false, ''],
            phpAwaker = targetPHP;

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {

                response[1] = xhttp.responseText;

            } else {

                response[1] = xhttp.statusText;

            }
        };

        xhttp.open("POST", phpAwaker, true);

        xhttp.send();

        return response;


    }


    function fillLibraryString(httpResponse) {


        console.log("HTTP-RESPONSE: " + httpResponse);


    }


    function constructHTMLatParent(parent, domString) {


        var counter,
            temp,
            tempNodeList,
            tempNodeListLength,
            child;

        temp = document.createElement('div');

        temp.innerHTML = domString;

        tempNodeList = temp.childNodes;

        tempNodeListLength = tempNodeList.length;

        if (tempNodeList.length > 1) {
            for (counter = 0; counter < tempNodeListLength; counter += 1) {

                child = tempNodeList[0];

                parent.appendChild(child);

            }
        } else {

            parent.appendChild(tempNodeList[0]);

        }


    }


    function constructHTMLLibrary(keyword) {


        var response,
            domString;

        if (keyword === 'video') {

            console.log("video type library was found !!!");

            response = requestMaker("getAllVideos.php");

            if (response[0]) {

                domString = fillLibraryString(response[1]);

            } else {

                console.log("ERR: CONNECTION TO SERVER ");

                console.log("ERR-TEXT: " + response[1]);

            }
        } else if (keyword === 'audio') {

            console.log("audio type library was found !!!");

        } else {

            console.log("invalid type of library!!!");

        }

        return domString;


    }


    function addEvent(caller, eventType, handlerName) {


        caller.addEventListener(eventType, handlerName);


    }


    /************************************************************
    *   DECLARATION OF HANDLER-FUNCTIONS
    ************************************************************/


    function initialize3rdPageVideoLibrary() {


        // do init navigaton
        // delegation for vids div


    }


    function moveTo3rdPageVideoLibrary() {


        var keyword = 'video',
            domString = constructHTMLLibrary(keyword);

        constructHTMLatParent(bodyTagElement, domString);

        // initialize3rdPageVideoLibrary();

        //stackCleaner(this, 'click', moveTo3rdPageVideoLibrary);


    }


    // initialize the new constructed html site
    function initialize2ndPage() {


        var vidTLink = document.getElementById("vidPath"),
            audTLink = document.getElementById("audPath"),
            impTLink = document.getElementById("impPath");

        addEvent(vidTLink, "click", function () {


            //moveTo3rdPageVideoLibrary('video');
            console.log("Fuck You!!!");

        });

        addEvent(audTLink, "click", function () {


            console.log("Audio Libaray was not implemented yet !");


        });

        addEvent(impTLink, "click", function () {


            console.log("Impressum was not implemented yet !");


        });


    }


    // first aktive handler
    function moveTo2ndPage() {


        constructHTMLatParent(bodyTagElement, html_2ndPage_Menu);

        initialize2ndPage();

        stackCleaner(this, 'click', moveTo2ndPage);


    }


     /************************************************************
    *   START WITH FIRST HANDLER
    ************************************************************/


    addEvent(html_1stPage_Starter, "click", moveTo2ndPage);


}());
