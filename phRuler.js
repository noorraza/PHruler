document.addEventListener("DOMContentLoaded", function () {
    const phSlider = document.getElementById("phSlider");
    const pka1Slider = document.getElementById("pka1Slider");
    const pka2Slider = document.getElementById("pka2Slider");

    const phValue = document.getElementById("phValue");
    const pka1Value = document.getElementById("pka1Value");
    const pka2Value = document.getElementById("pka2Value");

    const canvas = document.getElementById("phCanvas");
    const ctx = canvas.getContext("2d");

    phSlider.value = 70; // Initial value for pH slider (7.0)
    pka1Slider.value = 23; // Initial value for pKa1 slider (2.3)
    pka2Slider.value = 97; // Initial value for pKa2 slider (9.7)

    function updateValues() {
        const ph = phSlider.value / 10;
        const pka1 = pka1Slider.value / 10;
        const pka2 = pka2Slider.value / 10;

        phValue.textContent = ph.toFixed(1);
        pka1Value.textContent = pka1.toFixed(1);
        pka2Value.textContent = pka2.toFixed(1);

        const acid1 = 100 * (1 / (1 + Math.pow(10, ph - pka1)));
        const base1 = 100 - acid1;
        const acid2 = 100 * (1 / (1 + Math.pow(10, ph - pka2)));
        const base2 = 100 - acid2;

        const h2a = (acid1 * acid2) / 100;
        const zwit = (base1 * acid2 + acid1 * base2) / 100;
        const a2 = (base1 * base2) / 100;

        drawChart(acid1, base1, acid2, base2, h2a, zwit, a2);
    }

    function drawChart(acid1, base1, acid2, base2, h2a, zwit, a2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.fillRect(90, 130, 70, acid1);
        ctx.fillRect(290, 130, 70, acid2);
        ctx.fillRect(490, 130, 70, h2a);

        ctx.fillStyle = "blue";
        ctx.fillRect(190, 130, 70, base1);
        ctx.fillRect(390, 130, 70, base2);
        ctx.fillRect(690, 130, 70, a2);

        ctx.fillStyle = "magenta";
        ctx.fillRect(590, 130, 70, zwit);

        ctx.fillStyle = "black";
        ctx.font = "16px SansSerif";
        ctx.fillText("0", 60, 135);
        ctx.fillText("50", 60, 185);
        ctx.fillText("100", 60, 235);

        ctx.fillText(acid1.toFixed(1), 110, 125);
        ctx.fillText(base1.toFixed(1), 210, 125);
        ctx.fillText(acid2.toFixed(1), 310, 125);
        ctx.fillText(base2.toFixed(1), 410, 125);
        ctx.fillText(h2a.toFixed(1), 510, 125);
        ctx.fillText(zwit.toFixed(1), 610, 125);
        ctx.fillText(a2.toFixed(1), 710, 125);
    }

    phSlider.addEventListener("input", updateValues);
    pka1Slider.addEventListener("input", updateValues);
    pka2Slider.addEventListener("input", updateValues);

    updateValues(); // Initial draw
});
