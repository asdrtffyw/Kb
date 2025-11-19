// Switch Tabs
function openTab(tabName) {
    document.querySelectorAll(".tab-page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(tabName).style.display = "block";
}

// Keypad input
let typed = "";

function press(num) {
    if (typed.length < 4) {
        typed += num;
        document.getElementById("display").value = typed.replace(/./g, "•");
    }
}

function unlock() {
    if (typed === "1125") {
        document.getElementById("secret").style.display = "block";
    } else {
        alert("Wrong password baby 😘");
    }

    typed = "";
    document.getElementById("display").value = "";
}
