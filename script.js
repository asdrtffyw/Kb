// Switch tabs
function openTab(tabName) {
    document.querySelectorAll(".tab-page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(tabName).style.display = "block";
}

// Password lock
const correctPassword = "iloveyou"; // ← CHANGE THIS

function unlock() {
    const userPass = document.getElementById("passwordInput").value;

    if (userPass === correctPassword) {
        document.getElementById("secret").style.display = "block";
    } else {
        alert("Wrong password, try again 💗");
    }
}
