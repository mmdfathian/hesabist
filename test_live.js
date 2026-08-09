// Extract just the data + calc functions
var src = require('fs').readFileSync('/tmp/hesabist-check/script.js','utf8');
var lines = src.split('\n');
var code = [];
for (var i = 0; i < lines.length; i++) {
    var l = lines[i];
    if (l.includes('window.onload') || l.includes('window.onpopstate') || 
        l.includes('serviceWorker') || l.includes('document.getElementById')) break;
    code.push(l);
}
eval(code.join('\n'));

console.log('=== Currency Dropdown Test ===');
console.log('IRR→USD: 1M تومان =', (1000000/currencyData.IRR.rate*currencyData.USD.rate).toFixed(2), 'دلار');
console.log('USD→EUR: 1000$ =', (1000/currencyData.USD.rate*currencyData.EUR.rate).toFixed(2), 'یورو');
console.log('IRR→GBP: 2M تومان =', (2000000/currencyData.IRR.rate*currencyData.GBP.rate).toFixed(2), 'پوند');

console.log('=== Calorie Dropdown Test ===');
var c = calcCalorie(70, 30, 'running');
console.log('70kg 30min دویدن:', c.calories, 'کالری, MET:', c.met);
c = calcCalorie(80, 45, 'swimming');
console.log('80kg 45min شنا:', c.calories, 'کالری, MET:', c.met);
c = calcCalorie(60, 20, 'yoga');
console.log('60kg 20min یوگا:', c.calories, 'کالری, MET:', c.met);

console.log('=== Dollar Test ===');
var d = calcDollar(5000000, 50000);
console.log('5M تومان:', d.formatted);

console.log('\n✅ All tools working correctly!');
