document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("textArea");
    const biggerButton = document.getElementById("biggerButton");
    const fancyShmancy = document.getElementById("fancyShmancy");
    const boringBetty = document.getElementById("boringBetty");
    const mooButton = document.getElementById("mooButton");

    // Initial test
    alert("Hello, world!");

    // Make text bigger
    biggerButton.addEventListener("click", () => {
        const currentSize = parseInt(window.getComputedStyle(textArea).fontSize);
        textArea.style.fontSize = (currentSize + 2) + "pt";
    });

    // Apply FancyShmancy styles
    fancyShmancy.addEventListener("change", () => {
        if (fancyShmancy.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "blue";
            textArea.style.textDecoration = "underline";
        }
    });

    // Remove FancyShmancy styles
    boringBetty.addEventListener("change", () => {
        if (boringBetty.checked) {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
        }
    });

    // Moo transformation
    mooButton.addEventListener("click", () => {
        let text = textArea.value.toUpperCase();
        text = text.split('.').map(sentence => sentence.trim() + "-Moo").join('. ');
        textArea.value = text;
    });
});