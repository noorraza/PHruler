document.addEventListener('DOMContentLoaded', function() {
    const ph1Slider = document.getElementById('ph1Slider');
    const pka1Slider = document.getElementById('pka1Slider');
    const pka2Slider = document.getElementById('pka2Slider');
    const pka3Slider = document.getElementById('pka3Slider');
  
    const ph1Value = document.getElementById('ph1Value');
    const pka1Value = document.getElementById('pka1Value');
    const pka2Value = document.getElementById('pka2Value');
    const pka3Value = document.getElementById('pka3Value');
  
    const canvas = document.getElementById('chart');
    const ctx = canvas.getContext('2d');
  
    const scale = 10.0;
  
    function updateValues() {
      const ph1 = ph1Slider.value / scale;
      const pka1 = pka1Slider.value / scale;
      const pka2 = pka2Slider.value / scale;
      const pka3 = pka3Slider.value / scale;
  
      ph1Value.textContent = ph1.toFixed(1);
      pka1Value.textContent = pka1.toFixed(1);
      pka2Value.textContent = pka2.toFixed(1);
      pka3Value.textContent = pka3.toFixed(1);
  
      const dph1 = ph1 - pka1;
      const dph2 = ph1 - pka2;
      const dph3 = ph1 - pka3;
  
      const pow10_1 = Math.pow(10, dph1);
      const pow10_2 = Math.pow(10, dph2);
      const pow10_3 = Math.pow(10, dph3);
  
      const base1 = (100 * pow10_1) / (1 + pow10_1);
      const acid1 = 100 - base1;
  
      const base2 = (100 * pow10_2) / (1 + pow10_2);
      const acid2 = 100 - base2;
  
      const base3 = (100 * pow10_3) / (1 + pow10_3);
      const acid3 = 100 - base3;
  
      const h3a = (acid1 * acid2 * acid3) / 10000;
      const zwit1 = (base1 * acid2 * acid3) / 10000;
      const zwit2 = (acid1 * base2 * acid3) / 10000;
      const zwit3 = (base1 * base2 * acid3) / 10000;
      const zwit4 = (base1 * acid2 * base3) / 10000;
      const a3 = (base1 * base2 * base3) / 10000;
  
      drawChart(acid1, base1, acid2, base2, acid3, base3, h3a, zwit1, zwit2, zwit3, zwit4, a3);
    }
  
    function drawChart(acid1, base1, acid2, base2, acid3, base3, h3a, zwit1, zwit2, zwit3, zwit4, a3) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      const topstart = 130;
  
      ctx.fillStyle = 'red';
      ctx.fillRect(40, topstart, 70, 1 + acid1);
  
      ctx.fillStyle = 'blue';
      ctx.fillRect(140, topstart, 70, 1 + base1);
  
      ctx.fillStyle = 'green';
      ctx.fillRect(240, topstart, 70, 1 + acid2);
  
      ctx.fillStyle = 'green';
      ctx.fillRect(340, topstart, 70, 1 + base2);
  
      ctx.fillStyle = 'red';
      ctx.fillRect(440, topstart, 70, 1 + acid3);
  
      ctx.fillStyle = 'blue';
      ctx.fillRect(540, topstart, 70, 1 + base3);
  
      ctx.fillStyle = 'red';
      ctx.fillRect(640, topstart, 70, 1 + h3a);
  
      ctx.fillStyle = 'magenta';
      ctx.fillRect(740, topstart, 70, 1 + zwit1);
  
      ctx.fillStyle = 'magenta';
      ctx.fillRect(840, topstart, 70, 1 + zwit2);
  
      ctx.fillStyle = 'magenta';
      ctx.fillRect(940, topstart, 70, 1 + zwit3);
  
      ctx.fillStyle = 'magenta';
      ctx.fillRect(1040, topstart, 70, 1 + zwit4);
  
      ctx.fillStyle = 'blue';
      ctx.fillRect(1140, topstart, 70, 1 + a3);
  
      ctx.font = '16px SansSerif';
      ctx.fillStyle = 'black';
      ctx.fillText('0', 10, topstart + 5);
      ctx.fillText('50', 10, topstart + 55);
      ctx.fillText('100', 10, topstart + 105);
  
      ctx.fillStyle = 'red';
      ctx.fillText(acid1.toFixed(1), 65, topstart - 2);
      ctx.fillText(base1.toFixed(1), 165, topstart - 2);
      ctx.fillText(acid2.toFixed(1), 265, topstart - 2);
      ctx.fillText(base2.toFixed(1), 365, topstart - 2);
      ctx.fillText(acid3.toFixed(1), 465, topstart - 2);
      ctx.fillText(base3.toFixed(1), 565, topstart - 2);
      ctx.fillText(h3a.toFixed(1), 660, topstart - 2);
      ctx.fillText(zwit1.toFixed(1), 760, topstart - 2);
      ctx.fillText(zwit2.toFixed(1), 860, topstart - 2);
      ctx.fillText(zwit3.toFixed(1), 960, topstart - 2);
      ctx.fillText(zwit4.toFixed(1), 1060, topstart - 2);
      ctx.fillText(a3.toFixed(1), 1160, topstart - 2);
    }
  
    ph1Slider.addEventListener('input', updateValues);
    pka1Slider.addEventListener('input', updateValues);
    pka2Slider.addEventListener('input', updateValues);
    pka3Slider.addEventListener('input', updateValues);
  
    updateValues(); // Initial draw
  });
  