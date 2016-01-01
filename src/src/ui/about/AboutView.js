define(function(require) {
    var UIUtil = require("utils/UIUtil"),
        overlay = null,
        closeButton = null,
        contentDiv = null;

    init();

    function init() {
        overlay = UIUtil.createDiv("overlay");
        closeButton = UIUtil.createDiv("close_button", overlay);
        closeButton.innerHTML = "CLOSE (ESC)";
        contentDiv = document.getElementById("content");

        var aboutDiv = UIUtil.createDiv("about_info", overlay);


        var txt = "<h1>GIF Loop Coder</h1>";
        txt += "<p><a href='http://www.gifloopcoder.com'>http://www.gifloopcoder.com</a></p>";
		txt += "<p>Howdy! Welcome to GIF Loop Coder (GLC). This program is offered free and is open source. A lot of hours went into it, so if you find it useful, pay it back or pay it forward.</p>";
		txt += "<p><a href='https://www.paypal.me/bit101'>Buy me a beer (or two)</a></p>";
		txt += "<h2>Keys:</h2>";
		txt += "<p>Ctrl-Enter - compile and run<br/>Ctrl-Space - play/pause<br/>Ctrl-O - open file<br/>Ctrl-S - save file<br/>Ctrl-G - make gif<br/>Ctrl-/ - toggle comment in code</p>";
		txt += "<h2>Credits:</h2>";
		txt += "<p>Architect, coding, design, etc.: Keith Peters, kp@bit-101.com</p>";
		txt += "<h3>Contributors:</h3>";
		txt += "<p><a href='https://twitter.com/p5art'>Jerome Herr</a>, <a href='https://twitter.com/cacheflowe'>Justin Gitlin</a>, <a href='https://twitter.com/andremichelle'>Andre Michelle</a>, <a href='https://twitter.com/msurguy'>Maks Surguy</a>, <a href='https://github.com/EduardoLopes'>Eduardo Lopes</a>, <a href='https://github.com/crummy'>Malcolm Crum</a>, <a href='https://github.com/Landerson352'>Lincoln Anderson</a></p>";
		txt += "<h3>GIF Encoder:</h3>";
		txt += "<p>Kevin Weiner, Thibault Imbert, Kevin Kwok, Johan Nordberg. <a href='https://github.com/antimatter15/jsgif'>https://github.com/antimatter15/jsgif</a></p>";
		txt += "<h3>Code editor:</h3>";
		txt += "<p><a href='https://codemirror.net/'>https://codemirror.net/</a></p>";
		txt += "<h3>Icons:</h3>";
		txt += "<p><a href='http://ionicons.com/'>http://ionicons.com/</a></p>";
		aboutDiv.innerHTML = txt;

    }

    function show() {
        document.body.appendChild(overlay);
        contentDiv.className += " blur";
        closeButton.addEventListener("click", hide);
        document.body.addEventListener("keyup", onKeyUp);
    }

    function onKeyUp(event) {
        // escape key
        if(event.keyCode === 27) {
            hide();
        }
    }

    function hide() {
        if(overlay.parentElement) {
            overlay.parentElement.removeChild(overlay);
        }
        closeButton.removeEventListener("click", hide);
        document.body.removeEventListener("keyup", onKeyUp);
        contentDiv.className = "content";
    }

    return {
        show: show
    }

});