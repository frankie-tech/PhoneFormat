// This script formats the phone field on the fly as "999-999-9999" and does no allow any characters other than "-" & "0-9"

//Run phoneNo function onkeyup in "phone" field
document.getElementById("phone").onkeyup = function() {phoneNo()};

function phoneNo() {
    var phoneBox = document.getElementById("phone");
    var phoneNum = phoneBox.value
    var len = phoneBox.value.length;
    var dashA = phoneNum.charAt(4);
    var dashB = phoneNum.charAt(8);

    // Check if key pressed was Left Arrow(37), Right Arrow(39), Backspace(8), Shift(16) or delete(46) if so, then don't run "phoneNo()" | this prevents jumping to end of string.
    var e = window.event || e;
    var keyID = e.keyCode;
    if (keyID == 37 || keyID == 39 || keyID == 8 || keyID == 16 || keyID == 46) {
        return false;
    } 

    if (len === 12) {
        return false;
    }

    //Remove all characters except dash & 0-9

    if (dashA == "-") {
        document.getElementById("phone").value = phoneBox.value.substring(0, 4);
    }

    if (dashB == "-") {
        document.getElementById("phone").value = phoneBox.value.substring(0, 8);
    }
    document.getElementById("phone").value = phoneBox.value.replace(/[^-0-9]/g, "");
    //Add dashes then check formatting, reformat if needed, then trim string limit to 12 chars
    if (len == 3) {
        document.getElementById("phone").value = phoneBox.value + "-";
    } else if (len == 7) {
        document.getElementById("phone").value = phoneBox.value + "-";
    } else if (len >= 10) {
        document.getElementById("phone").value = phoneBox.value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        document.getElementById("phone").value = phoneBox.value.substring(0, 12);
    }

}
