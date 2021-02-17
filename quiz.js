var question001 = ["Question 1, Which country the flag shows?<br> <img src='https://www.countryflags.io/OM/shiny/64.png' />"];
var choices001 = ["<input onclick=correct001() name=button001 type=radio />Oman<br /><input onclick=incorrect001() name=button001 type=radio />Morocco<br /><input onclick=incorrect001() name=button001 type=radio />Italy<br /><input onclick=incorrect001() name=button001 type=radio />Kuwait<br />"];

var question002 = ["Question 2, Which country the flag shows? <br> <img src='https://www.countryflags.io/SE/shiny/64.png'/>"];
var choices002 = ["<input onclick=incorrect002() name=button002 type=radio />Slovenia<br /><input onclick=correct002() name=button002 type=radio />Sweden<br /><input onclick=incorrect002() name=button002 type=radio />Qatar<br /><input onclick=incorrect002() name=button002 type=radio />Vanuatu<br />"];

var question003 = ["Question 3, Which country the flag shows? <br> <img src='https://www.countryflags.io/PS/shiny/64.png'/>"];
var choices003 = ["<input onclick=incorrect003() name=button003 type=radio />Iraq<br /><input onclick=incorrect003() name=button003 type=radio />Yemen<br /><input onclick=correct003() name=button003 type=radio />Palestine<br /><input onclick=incorrect003() name=button003 type=radio />Jordan<br />"];
var a;
var b;
var c;
var z;

window.onload = function() {
    a = 0;
    message001.innerHTML = question001;
    options001.innerHTML = choices001;
    click001.innerHTML = "<button onclick=set002()>Next ></button>";
}

function correct001() {
    a = 1;
}

function incorrect001() {
    a = 0;
}

function set002() {
    b = 0;
    message001.innerHTML = question002;
    options001.innerHTML = choices002;
    click001.innerHTML = "<button onclick=set003()>Next ></button>";
}

function correct002() {
    b = 1;
}

function incorrect002() {
    b = 0;
}

function set003() {
    c = 0;
    message001.innerHTML = question003;
    options001.innerHTML = choices003;
    click001.innerHTML = "<button onclick=result001()>Score ></button>";
}

function correct003() {
    c = 1;
}

function incorrect003() {
    c = 0;
}


function result001() {
    z = a + b + c;
    message001.innerHTML = "End of Quiz";
    options001.innerHTML = "";
    comment001.innerHTML = "Your score is: " + z + "/3" ;

    var encourge;
    if (z == 0) {
      encourge = "Please try again";
    }
    else if (z ==  1 || z == 2) {
        encourge = "Please, keep practice more";
    }
    else  {
        encourge = "Congratulations!";
    }

    alert001.innerHTML=  encourge;

    click001.innerHTML = "<button onclick=repeat001()>Repeat</button>";
      
    }


function repeat001() {
    location.reload();
}