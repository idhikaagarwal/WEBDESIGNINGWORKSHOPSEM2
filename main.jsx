function check() {
    let ch = document.getElementById("char").value;
    ch = ch.toLowerCase();

    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        document.getElementById("result").innerHTML = "Vowel";
    } else {
        document.getElementById("result").innerHTML = "Consonant";
    }
}