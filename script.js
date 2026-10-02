// Portfolio website
// Interactive features will be added step-by-step.

console.log("Sanket Portfolio Loaded 🚀");
function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Portfolio Contact from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:sanketgawande@gmail.com?subject=" +
        subject + "&body=" + body;

    return false;
}
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}