/*jslint devel: true, passfail: false, plusplus: true, sloppy: true, maxerr: 400*/
"use strict";
/*
    Created by SCARL

    Table of content
    line 000-000: Initialization
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
        html_3rdPage_Impressum,
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
    html_2ndPage_Menu = '' +
'<header>' +
        '<div id="bild">'+
    '<img id="menuscarl" src="images/menuscarl.png" alt="SCARL @Player"  />' +
        '</div>'+
'</header>' +
    '<div id="navwrap">'+
'<nav>' +
    '<ul>' +
    '<img id="videoicon" src="images/videoicon.png" alt=""/>'+
        '<li id="vidPath">' +
            '<p>Videothek</p>' +
    '<img src="Bilder/arrowright.png" alt=""/>'+
        '</li>' +
     '<img id="audioicon" src="images/audioicon.png" alt=""/>'+
        '<li id="audPath">' +
            '<p>Audiothek</p>' +
    '<img src="images/arrowright.png" alt=""/>'+
        '</li>' +
        '<li id="impPath">' +
            '<p>Impressum</p>' +
        '</li>' +
    '</ul>' +
'</nav>' +
'<hr>' +
'<br>' +
'<img id="facebook" src="images/facebook.png" alt="facebook"/>' +
'<img id="twitter" src="images/twitter.png" alt="twitter"/>' +
'<img id="instagram" src="images/instagram.png" alt="instagram"/>' +
'<img id="tumblr" src="images/tumblr.png" alt="tumblr"/>' +
'<footer>' +
'<p id="datPath">Datenschutz</p>' +
'</footer>';

    html_3rdPage_Impressum = '' +
'<div class="naviii">' +
    '<ul>' +
        '<li>' +
            '<span>@Scarl Startseite</span>' +
            '<img id="logo" src="images/scarl.png" alt="SCARL @Player"/>' +
        '</li>' +
        '<li>' +
            '<span>@Scarl Suche</span>' +
            '<img id="suche" src="images/suche.png" alt="suche"/>' +
        '</li>' +
    '</ul>' +
'</div>' +
'<div class="inhalt">' +
    '<h1>Impressum</h1>' +
    '<p>Angaben gemäß § 5 TMG</p>' +
    '<br>' +
    '<p>Beuth-Hochschule für Technik ' +
        '<br>' +
        'Luxemburger Straße 10' +
        '<br>' +
        '13353 Berlin' +
        '<br>' +
        '<br>' +
    '</p>' +
    '<p>' +
        '<strong>Vertreten durch: </strong>' +
        '<br>' +
        'Beuth-Hochschule für Technik' +
        '<br>' +
        '<br>' +
    '</p>' +
    '<p>' +
        '<strong>Kontakt:</strong>' +
        '<br>' +
        'Telefon: 0000000-0000000' +
        '<br>' +
        'E-Mail: <a href="mailto:aaa@live.de">aaa@live.de</a>' +
        '<br>' +
        '<br>' +
    '</p>' +
    '<p>' +
        '<strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>' +
        '<br>' +
        'Beuth-Hochschule für Technik' +
        '<br>' +
        'Luxemburger Straße 10' +
        '<br>' +
        '13353 Berlin' +
        '<br>' +
        '<br>' +
    '</p>' +
    '<p>' +
        '<strong>Haftungsausschluss: </strong>' +
        '<br>' +
        '<br>' +
        '<strong>Haftung für Inhalte</strong>' +
        '<br>' +
        '<br>' +
'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.' +
        '<br>' +
        '<br>' +
        '<strong>Urheberrecht</strong>' +
        '<br>' +
        '<br>' +
'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.' +
        '<br>' +
        '<br>' +
        '<strong>Datenschutz</strong>' +
        '<br>' +
        '<br>' +
'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.' +
        '<br>' +
'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.' +
        '<br>' +
'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.' +
        '<br>' +
    '</p>' +
    '<br>' +
'</div>';


    /************************************************************
    *   DECLARATION OF HELPER-FUNCTIONS
    ************************************************************/

    function cleanNode(node) {


        var nodeChild;

        if (node.firstChild) {

            while (node.firstChild) {

                nodeChild = node.firstChild;

                node.removeChild(nodeChild);

            }

        }


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

        cleanNode(parent);

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


    function addEvent(caller, eventType, handlerFunction) {


        caller.addEventListener(eventType, function handler() {


            var caller = this;

            handlerFunction();

            caller.removeEventListener(eventType, handler);


        });

        caller = null;


    }


    /************************************************************
    *   DECLARATION OF HANDLER-FUNCTIONS
    ************************************************************/


    function initialize3rdPageImpressum() {


        var logo = document.getElementById("logo"),
            search = document.getElementById("suche");


        addEvent(logo, "click", moveTo2ndPage);


    }


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


    function moveTo3rdPageImpressum() {


        constructHTMLatParent(bodyTagElement, html_3rdPage_Impressum);

        initialize3rdPageImpressum();


    }


    function initialize2ndPage() {


        var vidTLink = document.getElementById("vidPath"),
            audTLink = document.getElementById("audPath"),
            impTLink = document.getElementById("impPath");

        addEvent(vidTLink, "click", function () {


            //moveTo3rdPageVideoLibrary('video');
            console.log("Nothing there!!!");

        });

        addEvent(audTLink, "click", function () {


            console.log("Audio Libaray was not implemented yet !");


        });

        addEvent(impTLink, "click", moveTo3rdPageImpressum);


    }


    function moveTo2ndPage() {


        constructHTMLatParent(bodyTagElement, html_2ndPage_Menu);

        initialize2ndPage();


    }


     /************************************************************
    *   START WITH FIRST HANDLER
    ************************************************************/


    addEvent(html_1stPage_Starter, "click", moveTo2ndPage);


}());
