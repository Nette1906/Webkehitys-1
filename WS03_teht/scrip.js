

function showTable() {
    const animal = "Koira";
    const habitat = "Koti";
    const diet = "Liha";

    const table = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = table;
}

const exercise2 = document.querySelector("#exercise2");

exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});
const exercise1 = document.querySelector("#exercise1");

exercise1.addEventListener("click", function() {
    exercise1.style.color = "red";
    exercise1.innerHTML = "Bye bye mouse!";
});

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");

feedback.addEventListener("focus", function() {
    status.innerHTML = "Kirjoita palautteesi tähän!";
});

feedback.addEventListener("blur", function() {
    status.innerHTML = "";
});

const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("input", function() {
    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value;
});

// HARJOITUS 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const length = feedback.value.length;

    if (length < 10 || length > 200) {

        status.innerHTML = "Palautteen pitää olla 10–200 merkkiä pitkä.";

    } else {

        feedback.value = "";
        charcount.innerHTML = "0/200";
        preview.innerHTML = "";
        status.innerHTML = "Thank you for your feedback!";

    }

});

// HARJOITUS 5 + BONUS

const keyinfo = document.querySelector("#keyinfo");
const keybox = document.querySelector("#keybox");

let keyCount = 0;

document.addEventListener("keydown", function(event) {

    console.log(event);

    // Näppäinpainallusten laskuri
    keyCount++;

    // Näytetään painettu näppäin isolla
    keybox.innerHTML = event.key;
    keybox.style.fontSize = "3em";

    // Vaihdetaan taustaväriä näppäimen mukaan
    if (event.key === "Enter") {
        keybox.style.backgroundColor = "lightgreen";
    } else if (event.key === "Shift") {
        keybox.style.backgroundColor = "lightblue";
    } else if (event.key === "Escape") {
        keybox.style.backgroundColor = "lightpink";
    } else {
        keybox.style.backgroundColor = "lightyellow";
    }

    // Tarkistetaan Shift, Ctrl ja Alt
    let modifiers = "";

    if (event.shiftKey) {
        modifiers += " Shift";
    }

    if (event.ctrlKey) {
        modifiers += " Ctrl";
    }

    if (event.altKey) {
        modifiers += " Alt";
    }

    // Näytetään kaikki tiedot
    keyinfo.innerHTML =
        "Näppäin: " + event.key +
        " | Koodi: " + event.code +
        " | Painalluksia: " + keyCount +
        " | Lisänäppäimet:" + modifiers;

});