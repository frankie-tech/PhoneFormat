// Add "-" to properly format phone value

function phoneNo() {

    var phoneBox = document.getElementById("phone");
    var phoneNum = phoneBox.value
    var len = phoneBox.value.length;
    var dashA = phoneNum.charAt(4);
    var dashB = phoneNum.charAt(8);

    //Remove all characters except dash & 0-9
    document.getElementById("phone").value = phoneBox.value.replace(/[^-0-9]/g, "");

    if (dashA == "-") {
        document.getElementById("phone").value = phoneBox.value.substring(0, 4);
    }

    if (dashB == "-") {
        document.getElementById("phone").value = phoneBox.value.substring(0, 8);
    }

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

function validate() {

    var phoneBox = document.getElementById("phone");
    var phoneNum = phoneBox.value
    var len = phoneBox.value.length;

    if (len < 12) {
        //alert("Invalid Phone Number Check Length");
    }

}
