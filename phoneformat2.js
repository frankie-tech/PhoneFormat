// This script formats the phone field on the fly as "999-999-9999" and does no allow any characters other than "-" & "0-9"
function loader(){
//This Function formats in case of holding key down ie 8888888888 to 888-888-8888 onblur
function formatBlur() {
  var phoneBox = document.getElementById("phone");
      document.getElementById("phone").value = phoneBox.value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      document.getElementById("phone").value = phoneBox.value.substring(0, 12);
  }
function phoneNo() {
  var phoneBox = document.getElementById("phone"),
      phoneNum = phoneBox.value,
      len = phoneBox.value.length,
      dashA = phoneNum.charAt(4),
      dashB = phoneNum.charAt(8);
    // Check if key pressed was Left Arrow(37), Right Arrow(39), Backspace(8), Shift(16) or delete(46) if so, then don't run "phoneNo()" | this prevents jumping to end of string.
    var e = window.event || e,
        keyID = e.keyCode;
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
    } else if (len >= 12) {
        document.getElementById("phone").value = phoneBox.value.substring(0, 12);
    }
}

//Run phoneNo function onkeyup in "phone" field
document.getElementById("phone").onkeyup = function() {phoneNo()};
document.getElementById("phone").onblur = function() {formatBlur()};
}
//Make sure Doc is loaded
window.onload = function() {loader()};
