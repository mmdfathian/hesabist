let currentLang = 'fa';
let currentToolId = '';

const dictionary = {
    fa: {
        title: "حسابیست", sub: "HESABIST", badge: "MOHIX SMART ENGINE",
        search: "جستجو میان ابزارها...", calc: "محاسبه نهایی", back: "← بازگشت",
        cats: { all: "همه", math: "ریاضی", finance: "مالی", health: "سلامت", general: "عمومی", content: "محتوا", media: "رسانه" },
        tools: {
            math:     { title: "درصدگیری", p1: "عدد اصلی", p2: "درصد" },
            vat:      { title: "مالیات ۹٪", p1: "مبلغ (تومان)" },
            bmi:      { title: "شاخص BMI", p1: "وزن (کیلو)", p2: "قد (سانت)" },
            loan:     { title: "اقساط وام", p1: "مبلغ وام", p2: "سود سالانه (%)", p3: "تعداد ماه" },
            discount: { title: "تخفیف", p1: "قیمت کل", p2: "درصد تخفیف" },
            age:      { title: "محاسبه سن", p1: "سال تولد شمسی" },
            water:    { title: "نیاز به آب", p1: "وزن (کیلو)" },
            pass:     { title: "پسورد ساز", p1: "تعداد کاراکتر (۴ تا ۶۴)" },
            unit:     { title: "سانت به اینچ", p1: "سانتی‌متر" },
            circle:   { title: "مساحت دایره", p1: "شعاع" },
            temp:     { title: "دما (C به F)", p1: "درجه سانتی‌گراد" },
            ideals:   { title: "وزن ایده‌آل", p1: "قد (سانت)" },
            square:   { title: "توان دوم", p1: "عدد" },
            profit:   { title: "سود بانکی", p1: "سرمایه (تومان)", p2: "سود سالانه (%)" },
            dollar:   { title: "قیمت دلار", p1: "مبلغ (تومان)", p2: "نرخ دلار" },
            currency: { title: "نرخ ارز", p1: "مبلغ" },
            calorie:  { title: "کالری‌سوزی", p1: "وزن (کیلو)", p2: "زمان (دقیقه)" },
            base64:   { title: "رمزگذاری Base64", p1: "متن یا کد" },
            textAnalyzer: { title: "تحلیلگر متن", p1: "متن مورد نظر" },
            diffChecker:  { title: "مقایسه متن", p1: "متن اول", p2: "متن دوم" },
            codeBeautifier: { title: "مرتب‌ساز کد", p1: "کد نامرتب" },
            codeMinifier:   { title: "فشرده‌ساز کد", p1: "کد" },
            jsonFormatter:  { title: "فرمت JSON", p1: "JSON خام" },
            regexTester:    { title: "تست ریجکس", p1: "عبارت ریجکس", p2: "متن تست" },
            listSorter:     { title: "مرتب‌سازی لیست", p1: "لیست (هر خط یک آیتم)" },
            timestampConv:  { title: "مبدل تایم‌استمپ", p1: "تایم‌استمپ یا تاریخ" },
            charConverter:  { title: "مبدل کاراکتر", p1: "متن فارسی/عربی" },
            notepad:  { title: "دفترچه یادداشت", p1: "یادداشت" },
            cssGen:   { title: "تولید CSS", p1: "رنگ پس‌زمینه", p2: "رنگ متن", p3: "شعاع گوشه" },
            robotsGen:{ title: "تولید robots.txt", p1: "آدرس سایت" },
            seoGen:   { title: "تولید تگ سئو", p1: "عنوان صفحه", p2: "توضیحات", p3: "آدرس صفحه" },
            utmBuilder:{ title: "ساخت UTM", p1: "آدرس سایت", p2: "کمپین", p3: "منبع" },
            ogPreview:{ title: "پیش‌نمایش لینک", p1: "عنوان", p2: "توضیحات", p3: "آدرس تصویر" },
            bulkUrl:  { title: "بازکننده لینک", p1: "لینک‌ها (هر خط یکی)" },
            eidi:     { title: "عیدی سالانه", p1: "حقوق ماهانه (تومان)" },
            priceCalc:{ title: "تبدیل قیمت", p1: "قیمت (تومان)", p2: "تعداد" },
            realstate:{ title: "املاک", p1: "متراژ (متر)", p2: "قیمت هر متر" },
            counter:  { title: "شمارنده" },
            checklist:{ title: "چک‌لیست" },
            calendarTool: { title: "تقویم" },
            dateConv: { title: "تبدیل تاریخ", p1: "تاریخ (۱۴۰۳/۰۵/۱۵)" },
            breathing:{ title: "تمرین تنفس" },
            worldClock:{ title: "ساعت جهانی" },
            unitConv: { title: "تبدیل واحد", p1: "مقدار" },
            myIp:     { title: "آی‌پی من" },
            qrGen:    { title: "ساخت QR", p1: "متن یا لینک" },
            colorPick:{ title: "پالت رنگ" },
            imgConvert:{ title: "تبدیل فرمت عکس" },
            textOnImg:{ title: "متن روی عکس", p1: "متن" }
        }
    },
    en: {
        title: "HESABIST", sub: "حسابیست", badge: "MOHIX SMART ENGINE",
        search: "Search tools...", calc: "Calculate", back: "← Back",
        cats: { all: "All", math: "Math", finance: "Finance", health: "Health", general: "General", content: "Content", media: "Media" },
        tools: {
            math:     { title: "Percentage", p1: "Value", p2: "Percent" },
            vat:      { title: "VAT 9%", p1: "Amount" },
            bmi:      { title: "BMI Index", p1: "Weight (kg)", p2: "Height (cm)" },
            loan:     { title: "Loan Calc", p1: "Principal", p2: "Interest (%)", p3: "Months" },
            discount: { title: "Discount", p1: "Price", p2: "Percent" },
            age:      { title: "Age Calc", p1: "Birth Year" },
            water:    { title: "Water Needs", p1: "Weight (kg)" },
            pass:     { title: "Password Gen", p1: "Length (4-64)" },
            unit:     { title: "CM to Inch", p1: "CM" },
            circle:   { title: "Circle Area", p1: "Radius" },
            temp:     { title: "Celsius to F", p1: "Celsius" },
            ideals:   { title: "Ideal Weight", p1: "Height (cm)" },
            square:   { title: "Square (x²)", p1: "Number" },
            profit:   { title: "Bank Profit", p1: "Deposit", p2: "APY (%)" },
            dollar:   { title: "Dollar Price", p1: "Amount (Toman)", p2: "Dollar Rate" },
            currency: { title: "Exchange Rate", p1: "Amount" },
            calorie:  { title: "Calorie Burn", p1: "Weight (kg)", p2: "Duration (min)" },
            base64:   { title: "Base64 Encoder", p1: "Text or Code" },
            textAnalyzer: { title: "Text Analyzer", p1: "Your text" },
            diffChecker:  { title: "Diff Checker", p1: "Text 1", p2: "Text 2" },
            codeBeautifier: { title: "Code Beautifier", p1: "Ugly code" },
            codeMinifier:   { title: "Code Minifier", p1: "Code" },
            jsonFormatter:  { title: "JSON Formatter", p1: "Raw JSON" },
            regexTester:    { title: "Regex Tester", p1: "Regex", p2: "Test string" },
            listSorter:     { title: "List Sorter", p1: "List (one per line)" },
            timestampConv:  { title: "Timestamp Converter", p1: "Timestamp or date" },
            charConverter:  { title: "Char Converter", p1: "Persian/Arabic text" },
            notepad:  { title: "Notepad", p1: "Notes" },
            cssGen:   { title: "CSS Generator", p1: "BG Color", p2: "Text Color", p3: "Border Radius" },
            robotsGen:{ title: "Robots.txt Gen", p1: "Website URL" },
            seoGen:   { title: "SEO Tag Generator", p1: "Page Title", p2: "Description", p3: "Page URL" },
            utmBuilder:{ title: "UTM Builder", p1: "URL", p2: "Campaign", p3: "Source" },
            ogPreview:{ title: "OG Preview", p1: "Title", p2: "Description", p3: "Image URL" },
            bulkUrl:  { title: "Bulk URL Opener", p1: "URLs (one per line)" },
            eidi:     { title: "Eidi Calculator", p1: "Monthly Salary" },
            priceCalc:{ title: "Price Calculator", p1: "Price", p2: "Quantity" },
            realstate:{ title: "Real Estate", p1: "Area (m²)", p2: "Price per m²" },
            counter:  { title: "Counter" },
            checklist:{ title: "Checklist" },
            calendarTool: { title: "Calendar" },
            dateConv: { title: "Date Converter", p1: "Date (1403/05/15)" },
            breathing:{ title: "Breathing Exercise" },
            worldClock:{ title: "World Clock" },
            unitConv: { title: "Unit Converter", p1: "Value" },
            myIp:     { title: "My IP" },
            qrGen:    { title: "QR Generator", p1: "Text or URL" },
            colorPick:{ title: "Color Palette" },
            imgConvert:{ title: "Image Converter" },
            textOnImg:{ title: "Text on Image", p1: "Text" }
        }
    }
};

const toolList = [
    { id: 'math', icon: '٪', cat: 'math' },
    { id: 'vat', icon: '💰', cat: 'finance' },
    { id: 'bmi', icon: '⚖️', cat: 'health' },
    { id: 'loan', icon: '🏦', cat: 'finance' },
    { id: 'discount', icon: '🏷️', cat: 'finance' },
    { id: 'age', icon: '📅', cat: 'general' },
    { id: 'water', icon: '💧', cat: 'health' },
    { id: 'pass', icon: '🔑', cat: 'general' },
    { id: 'unit', icon: '📏', cat: 'general' },
    { id: 'circle', icon: '⭕', cat: 'math' },
    { id: 'temp', icon: '🌡️', cat: 'general' },
    { id: 'ideals', icon: '🚶', cat: 'health' },
    { id: 'square', icon: '🔢', cat: 'math' },
    { id: 'profit', icon: '📈', cat: 'finance' },
    { id: 'dollar', icon: '💵', cat: 'finance' },
    { id: 'currency', icon: '💱', cat: 'finance' },
    { id: 'calorie', icon: '🔥', cat: 'health' },
    { id: 'base64', icon: '🔐', cat: 'content' },
    { id: 'textAnalyzer', icon: '📊', cat: 'content' },
    { id: 'diffChecker', icon: '🔍', cat: 'content' },
    { id: 'codeBeautifier', icon: '✨', cat: 'content' },
    { id: 'codeMinifier', icon: '📦', cat: 'content' },
    { id: 'jsonFormatter', icon: '{ }', cat: 'content' },
    { id: 'regexTester', icon: '.*', cat: 'content' },
    { id: 'listSorter', icon: '🔤', cat: 'content' },
    { id: 'timestampConv', icon: '⏱️', cat: 'content' },
    { id: 'charConverter', icon: '🔤', cat: 'content' },
    { id: 'notepad', icon: '📝', cat: 'content' },
    { id: 'cssGen', icon: '🎨', cat: 'content' },
    { id: 'robotsGen', icon: '🤖', cat: 'content' },
    { id: 'seoGen', icon: '🔍', cat: 'content' },
    { id: 'utmBuilder', icon: '🔗', cat: 'content' },
    { id: 'ogPreview', icon: '👁️', cat: 'content' },
    { id: 'bulkUrl', icon: '🌐', cat: 'content' },
    { id: 'eidi', icon: '🎁', cat: 'finance' },
    { id: 'priceCalc', icon: '💲', cat: 'finance' },
    { id: 'realstate', icon: '🏠', cat: 'finance' },
    { id: 'counter', icon: '#️⃣', cat: 'general' },
    { id: 'checklist', icon: '✅', cat: 'general' },
    { id: 'calendarTool', icon: '📅', cat: 'general' },
    { id: 'dateConv', icon: '📆', cat: 'general' },
    { id: 'breathing', icon: '🫁', cat: 'health' },
    { id: 'worldClock', icon: '🌍', cat: 'general' },
    { id: 'unitConv', icon: '📐', cat: 'general' },
    { id: 'myIp', icon: '🌐', cat: 'general' },
    { id: 'qrGen', icon: '📱', cat: 'general' },
    { id: 'colorPick', icon: '🎨', cat: 'media' },
    { id: 'imgConvert', icon: '🖼️', cat: 'media' },
    { id: 'textOnImg', icon: '🏷️', cat: 'media' }
];


// ─── داده ارزها ──────────────────────────────────────────────────────────────
const currencyData = {
    'IRR': { name: 'تومان ایران', rate: 1 },
    'USD': { name: 'دلار آمریکا', rate: 50000 },
    'EUR': { name: 'یورو', rate: 55000 },
    'GBP': { name: 'پوند انگلیس', rate: 63000 },
    'AED': { name: 'درهم امارات', rate: 13600 },
    'TRY': { name: 'لیر ترکیه', rate: 1500 },
    'CNY': { name: 'یوان چین', rate: 7000 },
    'RUB': { name: 'روبل روسیه', rate: 550 },
    'AFN': { name: 'افغانی', rate: 700 },
    'IQD': { name: 'دینار عراق', rate: 38 },
    'SAR': { name: 'ریال عربستان', rate: 13300 },
    'KWD': { name: 'دینار کویت', rate: 162000 }
};

const activityData = {
    fa: [['walking','پیاده‌روی'],['running','دویدن'],['cycling','دوچرخه‌سواری'],['swimming','شنا'],['yoga','یوگا'],['gym','بدنسازی']],
    en: [['walking','Walking'],['running','Running'],['cycling','Cycling'],['swimming','Swimming'],['yoga','Yoga'],['gym','Gym']]
};

const unitData = {
    fa: [
        ['cm-inch','سانتی‌متر به اینچ'],['inch-cm','اینچ به سانتی‌متر'],
        ['km-mile','کیلومتر به مایل'],['mile-km','مایل به کیلومتر'],
        ['kg-lb','کیلو به پوند'],['lb-kg','پوند به کیلو'],
        ['l-gal','لیتر به گالن'],['gal-l','گالن به لیتر'],
        ['c-f','سانتی‌گراد به فارنهایت'],['f-c','فارنهایت به سانتی‌گراد'],
        ['m-cm','متر به سانتی‌متر'],['cm-m','سانتی‌متر به متر'],
        ['kg-g','کیلو به گرم'],['g-kg','گرم به کیلو']
    ],
    en: [
        ['cm-inch','CM to Inch'],['inch-cm','Inch to CM'],
        ['km-mile','KM to Mile'],['mile-km','Mile to KM'],
        ['kg-lb','KG to Lbs'],['lb-kg','Lbs to KG'],
        ['l-gal','Liter to Gallon'],['gal-l','Gallon to Liter'],
        ['c-f','Celsius to Fahrenheit'],['f-c','Fahrenheit to Celsius'],
        ['m-cm','Meter to CM'],['cm-m','CM to Meter'],
        ['kg-g','KG to Gram'],['g-kg','Gram to KG']
    ]
};

// ─── تاریخ شمسی ────────────────────────────────────────────────────────────
function getPersianYear() {
    return parseInt(new Date().toLocaleDateString('fa-IR-u-ca-persian', { year: 'numeric' }).replace(/[\u06F0-\u06F9]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
}
function getPersianDate() {
    return new Date().toLocaleDateString('fa-IR-u-ca-persian', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ─── توابع محاسبه ───────────────────────────────────────────────────────────
function generatePassword(length) {
    var len = Math.min(Math.max(parseInt(length) || 12, 4), 64);
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr, function(b) { return chars[b % chars.length]; }).join('');
}

function calcLoan(principal, annualRate, months) {
    if (principal <= 0 || annualRate < 0 || months <= 0) return { error: currentLang === 'fa' ? 'مقادیر نامعتبر' : 'Invalid values' };
    if (annualRate === 0) return Math.round(principal / months);
    var r = annualRate / 100 / 12;
    return Math.round(principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1));
}

function calcBMI(w, h) {
    if (w <= 0 || h <= 0) return { error: currentLang === 'fa' ? 'مقادیر نامعتبر' : 'Invalid values' };
    var bmi = w / ((h / 100) * (h / 100));
    var cat = bmi < 18.5 ? (currentLang === 'fa' ? 'کمبود وزن' : 'Underweight') : bmi < 25 ? (currentLang === 'fa' ? 'نرمال' : 'Normal') : bmi < 30 ? (currentLang === 'fa' ? 'اضافه وزن' : 'Overweight') : (currentLang === 'fa' ? 'چاق' : 'Obese');
    return { bmi: Math.round(bmi * 10) / 10, category: cat };
}

function calcDiscount(price, pct) {
    if (price <= 0 || pct < 0 || pct > 100) return { error: currentLang === 'fa' ? 'مقادیر نامعتبر' : 'Invalid values' };
    return { discount: Math.round(price * pct / 100), finalPrice: Math.round(price - price * pct / 100) };
}

function calcDollar(amount, rate) {
    if (amount <= 0 || rate <= 0) return { error: currentLang === 'fa' ? 'مقادیر نامعتبر' : 'Invalid values' };
    return { dollar: Math.round(amount / rate * 100) / 100, formatted: (amount / rate).toFixed(2) + ' $' };
}

function calcCurrency(amount, fromRate, toRate) {
    if (amount <= 0 || fromRate <= 0 || toRate <= 0) return { error: currentLang === 'fa' ? 'مقادیر نامعتبر' : 'Invalid values' };
    var result = (amount * fromRate) / toRate;
    return { result: Math.round(result * 100) / 100, formatted: result.toFixed(2) };
}

function calcCalorie(weight, duration, activityType) {
    if (weight <= 0 || duration <= 0) return { error: currentLang === 'fa' ? 'مقادیر نامعتبر' : 'Invalid values' };
    var met = { walking: 3.5, running: 8, cycling: 6, swimming: 7, yoga: 2.5, gym: 5, default: 4 };
    var m = met[activityType] || met.default;
    return { calories: Math.round(m * weight * duration / 60), met: m };
}

function convertUnit(value, type) {
    var c = {
        'cm-inch': v => (v / 2.54).toFixed(2) + ' inch',
        'inch-cm': v => (v * 2.54).toFixed(2) + ' cm',
        'km-mile': v => (v * 0.621371).toFixed(2) + ' mile',
        'mile-km': v => (v * 1.60934).toFixed(2) + ' km',
        'kg-lb': v => (v * 2.20462).toFixed(2) + ' lb',
        'lb-kg': v => (v * 0.453592).toFixed(2) + ' kg',
        'l-gal': v => (v * 0.264172).toFixed(2) + ' gal',
        'gal-l': v => (v * 3.78541).toFixed(2) + ' L',
        'c-f': v => (v * 1.8 + 32).toFixed(1) + ' °F',
        'f-c': v => ((v - 32) / 1.8).toFixed(1) + ' °C',
        'm-cm': v => (v * 100).toFixed(0) + ' cm',
        'cm-m': v => (v / 100).toFixed(2) + ' m',
        'kg-g': v => (v * 1000).toFixed(0) + ' g',
        'g-kg': v => (v / 1000).toFixed(3) + ' kg'
    };
    return c[type] ? c[type](value) : (currentLang === 'fa' ? 'نامعتبر' : 'Invalid');
}

// ─── QR Code (real QR using qrcode-generator library) ───────────────────────
function generateQR(text) {
    if (!text || typeof qrcode === 'undefined') return '';
    try {
        var qr = qrcode(0, 'M');
        qr.addData(text);
        qr.make();
        var cellSize = 6;
        var margin = 20;
        var moduleCount = qr.getModuleCount();
        var size = moduleCount * cellSize + margin * 2;
        var c = document.createElement('canvas');
        c.width = size; c.height = size;
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = '#000';
        for (var r = 0; r < moduleCount; r++) {
            for (var col = 0; col < moduleCount; col++) {
                if (qr.isDark(r, col)) {
                    ctx.fillRect(margin + col * cellSize, margin + r * cellSize, cellSize, cellSize);
                }
            }
        }
        return c.toDataURL('image/png');
    } catch(e) { return ''; }
}

// ─── فعالیت‌ها ───────────────────────────────────────────────────────────────

// ─── بروزرسانی نرخ ارز از API ──────────────────────────────────────────────
function fetchCurrencyRates() {
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (data && data.rates) {
                if (data.rates.IRR) currencyData.USD.rate = Math.round(data.rates.IRR / 10); // IRR to Toman
                if (data.rates.EUR) currencyData.EUR.rate = Math.round(data.rates.IRR / data.rates.EUR / 10);
                if (data.rates.GBP) currencyData.GBP.rate = Math.round(data.rates.IRR / data.rates.GBP / 10);
                if (data.rates.AED) currencyData.AED.rate = Math.round(data.rates.IRR / data.rates.AED / 10);
                if (data.rates.TRY) currencyData.TRY.rate = Math.round(data.rates.IRR / data.rates.TRY / 10);
                if (data.rates.CNY) currencyData.CNY.rate = Math.round(data.rates.IRR / data.rates.CNY / 10);
                if (data.rates.RUB) currencyData.RUB.rate = Math.round(data.rates.IRR / data.rates.RUB / 10);
                if (data.rates.SAR) currencyData.SAR.rate = Math.round(data.rates.IRR / data.rates.SAR / 10);
                console.log('Currency rates updated from API');
            }
        })
        .catch(function() { 
            console.log('Currency API fallback to hardcoded rates');
            var el = document.getElementById('res-val');
            if (el && currentToolId === 'currency') {
                el.innerText = currentLang === 'fa' ? '⚠️ نرخ ارز آنلاین در دسترس نیست' : '⚠️ Online rates unavailable';
            }
        });
}

// ─── بوت ───────────────────────────────────────────────────────────────────
window.onload = function() {
    var isDark = localStorage.getItem('hesabist_dark') === 'true';
    if (isDark) document.body.classList.add('dark-mode');
    applyTheme(localStorage.getItem('hesabist_theme') || 'blue');
    fetchCurrencyRates();
    updateUI();
    setInterval(tickClock, 1000);
    tickClock();
    setTimeout(function() {
        var splash = document.getElementById('splash-screen');
        var wrapper = document.getElementById('app-wrapper');
        splash.style.transition = 'opacity 0.5s ease';
        splash.style.opacity = '0';
        wrapper.style.display = 'block';
        setTimeout(function() {
            wrapper.style.opacity = '1';
            splash.style.display = 'none';
            var toolId = new URLSearchParams(window.location.search).get('tool');
            if (toolId && dictionary[currentLang].tools[toolId]) openTool(toolId, false);
        }, 500);
    }, 900);
};

window.onpopstate = function(event) {
    if (event.state && event.state.id) openTool(event.state.id, false);
    else showHome(false);
};

function tickClock() {
    var now = new Date();
    var isFa = currentLang === 'fa';
    document.getElementById('txt-clock').innerText = now.toLocaleTimeString(isFa ? 'fa-IR' : 'en-US');
    document.getElementById('txt-date').innerText = now.toLocaleDateString(isFa ? 'fa-IR-u-ca-persian' : 'en-US', { day: 'numeric', month: 'long' });
}

// ─── UI ─────────────────────────────────────────────────────────────────────
function updateUI() {
    var isFa = currentLang === 'fa';
    var lang = dictionary[currentLang];
    document.querySelector('.brand-info h1').innerText = lang.title;
    document.querySelector('.brand-info span').innerText = lang.sub;
    document.querySelector('.engine-label').innerText = lang.badge;
    document.getElementById('toolSearch').placeholder = lang.search;
    document.getElementById('lang-btn').innerText = currentLang === 'fa' ? 'English' : 'فارسی';
    document.getElementById('btn-calc').innerText = lang.calc;
    document.getElementById('back-btn-label').innerText = lang.back;
    document.getElementById('bar-home').innerText = isFa ? 'خانه' : 'Home';
    document.getElementById('bar-settings').innerText = isFa ? 'تنظیمات' : 'Settings';
    document.getElementById('settings-title').innerText = isFa ? 'تنظیمات ظاهر' : 'Appearance';
    document.getElementById('dark-mode-label').innerText = isFa ? 'تغییر حالت شب/روز' : 'Dark/Light Mode';
    document.getElementById('settings-close-label').innerText = isFa ? 'تایید' : 'Done';
    document.getElementById('txt-date').innerText = isFa ? getPersianDate() : new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    var tabs = document.getElementById('tabs-container');
    tabs.innerHTML = Object.keys(lang.cats).map(function(c) {
        return '<button class="tab-btn" onclick="filterByCategory(\'' + c + '\', this)">' + lang.cats[c] + '</button>';
    }).join('');
    tabs.querySelector('.tab-btn').classList.add('active');
    renderTools(toolList);
}

function renderTools(data) {
    var grid = document.getElementById('tools-grid');
    grid.innerHTML = data.map(function(t) {
        return '<div class="tool-card" onclick="openTool(\'' + t.id + '\')"><span class="icon">' + t.icon + '</span><h3>' + dictionary[currentLang].tools[t.id].title + '</h3></div>';
    }).join('') + '<div style="grid-column:1/-1; text-align:center; opacity:0.1; font-size:0.6rem; padding:40px;">MOHIX COMPANY</div>';
}

function filterByCategory(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderTools(cat === 'all' ? toolList : toolList.filter(function(t) { return t.cat === cat; }));
}

function openTool(id, pushState) {
    if (pushState === undefined) pushState = true;
    currentToolId = id;
    var toolData = dictionary[currentLang].tools[id];
    if (pushState) window.history.pushState({ id: id }, '', window.location.pathname + '?tool=' + id);

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('tool-view').style.display = 'block';
    document.getElementById('tool-title').innerText = toolData.title;
    document.getElementById('res-val').innerText = '';
    document.getElementById('btn-copy').style.display = 'none';

    var i1 = document.getElementById('inp1');
    var i2 = document.getElementById('inp2');
    var i3 = document.getElementById('inp3');
    i1.value = ''; i2.value = ''; i3.value = '';
    i1.placeholder = toolData.p1 || '';
    // Set inputmode dynamically
    var numTools = ['math','vat','bmi','loan','discount','age','water','pass','unit','circle','temp','ideals','square','profit','dollar','calorie','eidi','priceCalc','realstate','unitConv','timestampConv'];
    var isNum = numTools.indexOf(id) !== -1;
    i1.setAttribute('inputmode', isNum ? 'decimal' : 'text');
    i2.style.display = toolData.p2 ? 'block' : 'none';
    i3.style.display = toolData.p3 ? 'block' : 'none';
    if (toolData.p2) i2.placeholder = toolData.p2;
    if (toolData.p3) i3.placeholder = toolData.p3;
    i3.removeAttribute('list');

    // حذف select و custom UI قبلی
    document.querySelectorAll('.dynamic-select, .dynamic-ui').forEach(function(el) { el.remove(); });

    var inputsGroup = document.querySelector('.inputs-group');
    var isFa = currentLang === 'fa';

    // ─── ابزار نرخ ارز: dropdown ───
    if (id === 'currency') {
        i2.style.display = 'none'; i3.style.display = 'none';
        var selFrom = document.createElement('select');
        selFrom.id = 'sel-from'; selFrom.className = 'dynamic-select';
        selFrom.innerHTML = '<option value="">' + (isFa ? 'ارز مبدأ' : 'From') + '</option>' +
            Object.keys(currencyData).map(function(k) { return '<option value="' + k + '">' + currencyData[k].name + '</option>'; }).join('');
        inputsGroup.appendChild(selFrom);
        var selTo = document.createElement('select');
        selTo.id = 'sel-to'; selTo.className = 'dynamic-select';
        selTo.innerHTML = '<option value="">' + (isFa ? 'ارز مقصد' : 'To') + '</option>' +
            Object.keys(currencyData).map(function(k) { return '<option value="' + k + '">' + currencyData[k].name + '</option>'; }).join('');
        inputsGroup.appendChild(selTo);
    }

    // ─── ابزار کالری: dropdown ───
    if (id === 'calorie') {
        i3.style.display = 'none';
        var acts = activityData[currentLang] || activityData.fa;
        var selAct = document.createElement('select');
        selAct.id = 'sel-activity'; selAct.className = 'dynamic-select';
        selAct.innerHTML = '<option value="">' + (isFa ? 'نوع فعالیت' : 'Activity') + '</option>' +
            acts.map(function(a) { return '<option value="' + a[0] + '">' + a[1] + '</option>'; }).join('');
        inputsGroup.appendChild(selAct);
    }

    // ─── ابزار تبدیل واحد: dropdown ───
    if (id === 'unitConv') {
        i2.style.display = 'none'; i3.style.display = 'none';
        var units = unitData[currentLang] || unitData.fa;
        var selUnit = document.createElement('select');
        selUnit.id = 'sel-unit'; selUnit.className = 'dynamic-select';
        selUnit.innerHTML = '<option value="">' + (isFa ? 'نوع تبدیل' : 'Conversion type') + '</option>' +
            units.map(function(u) { return '<option value="' + u[0] + '">' + u[1] + '</option>'; }).join('');
        inputsGroup.appendChild(selUnit);
    }

    // ─── ابزارهای متنی: textarea ───
    var textareaTools = ['base64','textAnalyzer','diffChecker','codeBeautifier','codeMinifier','jsonFormatter','listSorter','charConverter','notepad','bulkUrl'];
    if (textareaTools.indexOf(id) !== -1) {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var ta = document.createElement('textarea');
        ta.id = 'dynamic-textarea'; ta.className = 'dynamic-ui';
        ta.placeholder = toolData.p1 || '';
        ta.rows = id === 'notepad' ? 12 : 6;
        ta.style.cssText = 'width:100%;padding:14px;border-radius:12px;border:2px solid var(--bg);background:var(--bg);color:var(--text);font-size:1rem;font-family:monospace;resize:vertical;margin-bottom:12px;';
        inputsGroup.appendChild(ta);
        if (id === 'diffChecker') {
            var ta2 = document.createElement('textarea');
            ta2.id = 'dynamic-textarea2'; ta2.className = 'dynamic-ui';
            ta2.placeholder = toolData.p2 || '';
            ta2.rows = 6;
            ta2.style.cssText = ta.style.cssText;
            inputsGroup.appendChild(ta2);
        }
    }

    // ─── ابزار regex tester: input + textarea ───
    if (id === 'regexTester') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var regexIn = document.createElement('input');
        regexIn.id = 'dynamic-regex'; regexIn.className = 'dynamic-ui';
        regexIn.placeholder = toolData.p1 || '';
        regexIn.style.cssText = 'width:100%;padding:14px;border-radius:12px;border:2px solid var(--bg);background:var(--bg);color:var(--text);font-size:1rem;font-family:monospace;margin-bottom:12px;';
        inputsGroup.appendChild(regexIn);
        var testIn = document.createElement('textarea');
        testIn.id = 'dynamic-teststr'; testIn.className = 'dynamic-ui';
        testIn.placeholder = toolData.p2 || '';
        testIn.rows = 4;
        testIn.style.cssText = 'width:100%;padding:14px;border-radius:12px;border:2px solid var(--bg);background:var(--bg);color:var(--text);font-size:1rem;font-family:monospace;resize:vertical;margin-bottom:12px;';
        inputsGroup.appendChild(testIn);
    }

    // ─── ابزار counter ───
    if (id === 'counter') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var counterUI = document.createElement('div');
        counterUI.className = 'dynamic-ui';
        counterUI.innerHTML = '<div style="text-align:center;font-size:3rem;font-weight:bold;padding:20px;" id="counter-val">0</div>' +
            '<div style="display:flex;gap:10px;justify-content:center;">' +
            '<button onclick="counterChange(-1)" style="padding:15px 30px;border-radius:12px;border:none;background:#e74c3c;color:#fff;font-size:1.5rem;cursor:pointer;">−</button>' +
            '<button onclick="counterChange(0)" style="padding:15px 30px;border-radius:12px;border:none;background:#95a5a6;color:#fff;font-size:1rem;cursor:pointer;">' + (currentLang === 'fa' ? 'پاک' : 'Clear') + '</button>' +
            '<button onclick="counterChange(1)" style="padding:15px 30px;border-radius:12px;border:none;background:#27ae60;color:#fff;font-size:1.5rem;cursor:pointer;">+</button>' +
            '</div>';
        inputsGroup.appendChild(counterUI);
        document.getElementById('btn-calc').style.display = 'none';
    } else {
        document.getElementById('btn-calc').style.display = '';
    }

    // ─── ابزار breathing ───
    if (id === 'breathing') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var breathUI = document.createElement('div');
        breathUI.className = 'dynamic-ui';
        breathUI.innerHTML = '<div id="breath-circle" style="width:150px;height:150px;border-radius:50%;background:var(--primary);margin:20px auto;transition:transform 4s ease-in-out;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.2rem;font-weight:bold;">' + (isFa ? 'آماده' : 'Ready') + '</div>' +
            '<div style="text-align:center;"><button onclick="startBreathing()" style="padding:12px 30px;border-radius:12px;border:none;background:var(--primary);color:#fff;font-size:1rem;cursor:pointer;">' + (isFa ? 'شروع' : 'Start') + '</button></div>';
        inputsGroup.appendChild(breathUI);
        document.getElementById('btn-calc').style.display = 'none';
    }

    // ─── ابزار world clock ───
    if (id === 'worldClock') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var wcUI = document.createElement('div');
        wcUI.className = 'dynamic-ui';
        var citiesFa = [
            { name: 'تهران', tz: 'Asia/Tehran' }, { name: 'استانبول', tz: 'Europe/Istanbul' },
            { name: 'لندن', tz: 'Europe/London' }, { name: 'نیویورک', tz: 'America/New_York' },
            { name: 'توکیو', tz: 'Asia/Tokyo' }, { name: 'دубای', tz: 'Asia/Dubai' },
            { name: 'مسکو', tz: 'Europe/Moscow' }, { name: 'پاریس', tz: 'Europe/Paris' }
        ];
        var citiesEn = [
            { name: 'Tehran', tz: 'Asia/Tehran' }, { name: 'Istanbul', tz: 'Europe/Istanbul' },
            { name: 'London', tz: 'Europe/London' }, { name: 'New York', tz: 'America/New_York' },
            { name: 'Tokyo', tz: 'Asia/Tokyo' }, { name: 'Dubai', tz: 'Asia/Dubai' },
            { name: 'Moscow', tz: 'Europe/Moscow' }, { name: 'Paris', tz: 'Europe/Paris' }
        ];
        var cities = currentLang === 'fa' ? citiesFa : citiesEn;
        wcUI.innerHTML = cities.map(function(c) {
            return '<div style="display:flex;justify-content:space-between;padding:12px;border-bottom:1px solid var(--bg);"><span>' + c.name + '</span><span id="wc-' + c.tz.replace('/','-') + '" style="font-weight:bold;"></span></div>';
        }).join('');
        inputsGroup.appendChild(wcUI);
        document.getElementById('btn-calc').style.display = 'none';
        updateWorldClock();
        if (!window._wcInterval) window._wcInterval = setInterval(updateWorldClock, 1000);
    }

    // ─── ابزار calendar ───
    if (id === 'calendarTool') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var calUI = document.createElement('div');
        calUI.className = 'dynamic-ui';
        calUI.id = 'calendar-container';
        inputsGroup.appendChild(calUI);
        renderCalendar(new Date());
        document.getElementById('btn-calc').style.display = 'none';
    }

    // ─── ابزار date converter ───
    if (id === 'dateConv') {
        i1.placeholder = isFa ? 'تاریخ (۱۴۰۳/۰۵/۱۵)' : 'Date (2024/08/05)';
        i2.style.display = 'none'; i3.style.display = 'none';
    }

    // ─── ابزار checklist ───
    if (id === 'checklist') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var clUI = document.createElement('div');
        clUI.className = 'dynamic-ui';
        clUI.innerHTML = '<div style="display:flex;gap:8px;margin-bottom:12px;"><input id="cl-input" placeholder="' + (isFa ? 'آیتم جدید...' : 'New item...') + '" style="flex:1;padding:12px;border-radius:10px;border:2px solid var(--bg);background:var(--bg);color:var(--text);font-size:1rem;"><button onclick="addCheckItem()" style="padding:12px 20px;border-radius:10px;border:none;background:var(--primary);color:#fff;cursor:pointer;">+</button></div><div id="cl-list"></div>';
        inputsGroup.appendChild(clUI);
        document.getElementById('btn-calc').style.display = 'none';
        loadChecklist();
    }

    // ─── ابزار myIp ───
    if (id === 'myIp') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var ipUI = document.createElement('div');
        ipUI.className = 'dynamic-ui';
        ipUI.id = 'ip-result';
        ipUI.innerHTML = '<div style="text-align:center;padding:20px;">' + (isFa ? 'در حال دریافت...' : 'Loading...') + '</div>';
        inputsGroup.appendChild(ipUI);
        document.getElementById('btn-calc').style.display = 'none';
        fetch('https://api.ipify.org?format=json').then(function(r) { return r.json(); }).then(function(d) {
            document.getElementById('ip-result').textContent = d.ip;
        }).catch(function() {
            document.getElementById('ip-result').innerHTML = '<div style="text-align:center;color:red;">' + (isFa ? 'خطا در دریافت' : 'Error') + '</div>';
        });
    }

    // ─── ابزار color pick ───
    if (id === 'colorPick') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var cpUI = document.createElement('div');
        cpUI.className = 'dynamic-ui';
        cpUI.innerHTML = '<input type="color" id="cp-input" value="#0984e3" style="width:100%;height:60px;border:none;border-radius:12px;cursor:pointer;margin-bottom:12px;"><div id="cp-palette" style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;"></div>';
        inputsGroup.appendChild(cpUI);
        document.getElementById('cp-input').onchange = function() { generatePalette(this.value); };
        generatePalette('#0984e3');
        document.getElementById('btn-calc').style.display = 'none';
    }

    // ─── ابزار image convert ───
    if (id === 'imgConvert') {
        i1.style.display = 'none'; i2.style.display = 'none'; i3.style.display = 'none';
        var icUI = document.createElement('div');
        icUI.className = 'dynamic-ui';
        icUI.innerHTML = '<input type="file" id="ic-file" accept="image/*" style="width:100%;padding:14px;border-radius:12px;border:2px dashed var(--bg);background:var(--bg);color:var(--text);margin-bottom:12px;"><select id="ic-format" class="dynamic-select"><option value="png">PNG</option><option value="jpeg">JPEG</option><option value="webp">WebP</option></select><canvas id="ic-canvas" style="display:none;"></canvas><div id="ic-result"></div>';
        inputsGroup.appendChild(icUI);
        document.getElementById('btn-calc').innerText = isFa ? 'تبدیل' : 'Convert';
    }

    // ─── ابزار text on image ───
    if (id === 'textOnImg') {
        i2.style.display = 'none'; i3.style.display = 'none';
        i1.placeholder = toolData.p1 || '';
        var toiUI = document.createElement('div');
        toiUI.className = 'dynamic-ui';
        toiUI.innerHTML = '<input type="file" id="toi-file" accept="image/*" style="width:100%;padding:14px;border-radius:12px;border:2px dashed var(--bg);background:var(--bg);color:var(--text);margin-bottom:12px;"><canvas id="toi-canvas" style="display:none;"></canvas><div id="toi-result"></div>';
        inputsGroup.appendChild(toiUI);
        document.getElementById('btn-calc').innerText = isFa ? 'افزودن متن' : 'Add Text';
    }

    document.title = isFa ? toolData.title + ' آنلاین | حسابیست' : toolData.title + ' Online | HESABIST';
    window.scrollTo(0, 0);
}

function showHome(pushState) {
    if (pushState === undefined) pushState = true;
    if (pushState) window.history.pushState(null, '', window.location.pathname);
    document.getElementById('tool-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
    document.title = 'حسابیست | HESABIST';
}

function changeLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    document.documentElement.lang = currentLang === 'fa' ? 'fa' : 'en';
    document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    updateUI(); tickClock();
}

function toggleSettings() {
    var m = document.getElementById('settings-modal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}
function applyTheme(c) {
    document.body.classList.remove('theme-blue','theme-purple','theme-orange','theme-green');
    document.body.classList.add('theme-' + c);
    localStorage.setItem('hesabist_theme', c);
}
function handleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('hesabist_dark', document.body.classList.contains('dark-mode'));
}
function copyResult() {
    navigator.clipboard.writeText(document.getElementById('res-val').innerText).catch(function(){});
}

// ─── Counter ────────────────────────────────────────────────────────────────
var _counterVal = 0;
function counterChange(d) {
    if (d === 0) _counterVal = 0; else _counterVal += d;
    var el = document.getElementById('counter-val');
    if (el) el.innerText = _counterVal;
}

// ─── Breathing ──────────────────────────────────────────────────────────────
var _breathRunning = false;
function startBreathing() {
    if (_breathRunning) return;
    _breathRunning = true;
    var circle = document.getElementById('breath-circle');
    if (!circle) { _breathRunning = false; return; }
    var isFa = currentLang === 'fa';
    var phases = [
        { text: isFa ? 'دم' : 'Inhale', transform: 'scale(1.5)', dur: 4000 },
        { text: isFa ? 'نگه‌دار' : 'Hold', transform: 'scale(1.5)', dur: 4000 },
        { text: isFa ? 'بازدم' : 'Exhale', transform: 'scale(1)', dur: 4000 },
        { text: isFa ? 'نگه‌دار' : 'Hold', transform: 'scale(1)', dur: 2000 }
    ];
    var i = 0;
    function nextPhase() {
        if (!_breathRunning) return;
        var p = phases[i % phases.length];
        circle.innerText = p.text;
        circle.style.transform = p.transform;
        i++;
        setTimeout(nextPhase, p.dur);
    }
    nextPhase();
    setTimeout(function() { _breathRunning = false; }, 60000);
}

// ─── World Clock ────────────────────────────────────────────────────────────
function updateWorldClock() {
    var cities = ['Asia/Tehran','Europe/Istanbul','Europe/London','America/New_York','Asia/Tokyo','Asia/Dubai','Europe/Moscow','Europe/Paris'];
    cities.forEach(function(tz) {
        var el = document.getElementById('wc-' + tz.replace('/','-'));
        if (el) {
            try { el.innerText = new Date().toLocaleTimeString(currentLang === 'fa' ? 'fa-IR' : 'en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit' }); }
            catch(e) { el.innerText = '--:--'; }
        }
    });
}

// ─── Calendar ───────────────────────────────────────────────────────────────
function renderCalendar(date) {
    var container = document.getElementById('calendar-container');
    if (!container) return;
    var year = date.getFullYear(), month = date.getMonth();
    var monthNamesFa = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
    var monthNamesEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var monthNames = currentLang === 'fa' ? monthNamesFa : monthNamesEn;
    var prevArrow = currentLang === 'fa' ? '▶' : '◀';
    var nextArrow = currentLang === 'fa' ? '◀' : '▶';
    var html = '<div style="display:flex;justify-content:space-between;margin-bottom:12px;"><button onclick="calNav(-1)" style="padding:8px 16px;border-radius:8px;border:none;background:var(--primary);color:#fff;cursor:pointer;">' + prevArrow + '</button><span style="font-weight:bold;font-size:1.1rem;">' + monthNames[month] + ' ' + year + '</span><button onclick="calNav(1)" style="padding:8px 16px;border-radius:8px;border:none;background:var(--primary);color:#fff;cursor:pointer;">' + nextArrow + '</button></div>';
    if (currentLang === 'fa') {
        var dayNamesFa = ['ش','ی','د','س','چ','پ','ج'];
        html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;">';
        dayNamesFa.forEach(function(d) { html += '<div style="font-weight:bold;padding:8px;font-size:0.8rem;opacity:0.5;">' + d + '</div>'; });
        var firstDay = (new Date(year, month, 1).getDay() + 1) % 7;
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        for (var i = 0; i < firstDay; i++) html += '<div></div>';
        var today = new Date();
        for (var d = 1; d <= daysInMonth; d++) {
            var isToday = (d === today.getDate() && month === today.getMonth() && year === today.getFullYear());
            var bg = isToday ? 'var(--primary)' : 'transparent';
            var col = isToday ? '#fff' : 'var(--text)';
            html += '<div style="padding:10px;border-radius:8px;background:' + bg + ';color:' + col + ';cursor:pointer;">' + d + '</div>';
        }
    } else {
        var dayNamesEn = ['S','M','T','W','T','F','S'];
        html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;">';
        dayNamesEn.forEach(function(d) { html += '<div style="font-weight:bold;padding:8px;font-size:0.8rem;opacity:0.5;">' + d + '</div>'; });
        var firstDay = new Date(year, month, 1).getDay();
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        for (var i = 0; i < firstDay; i++) html += '<div></div>';
        var today = new Date();
        for (var d = 1; d <= daysInMonth; d++) {
            var isToday = (d === today.getDate() && month === today.getMonth() && year === today.getFullYear());
            var bg = isToday ? 'var(--primary)' : 'transparent';
            var col = isToday ? '#fff' : 'var(--text)';
            html += '<div style="padding:10px;border-radius:8px;background:' + bg + ';color:' + col + ';cursor:pointer;">' + d + '</div>';
        }
    }
    html += '</div>';
    container.innerHTML = html;
}
var _calDate = new Date();
function calNav(dir) {
    _calDate.setMonth(_calDate.getMonth() + dir);
    renderCalendar(_calDate);
}

// ─── Palette ────────────────────────────────────────────────────────────────
function generatePalette(hex) {
    var el = document.getElementById('cp-palette');
    if (!el) return;
    var r = parseInt(hex.substr(1,2),16), g = parseInt(hex.substr(3,2),16), b = parseInt(hex.substr(5,2),16);
    var colors = [];
    for (var i = 0; i < 10; i++) {
        var f = (i - 5) * 25;
        var nr = Math.min(255, Math.max(0, r + f));
        var ng = Math.min(255, Math.max(0, g + f));
        var nb = Math.min(255, Math.max(0, b + f));
        colors.push('rgb(' + nr + ',' + ng + ',' + nb + ')');
    }
    el.innerHTML = colors.map(function(c) {
        return '<div onclick="navigator.clipboard.writeText(\'' + c + '\')" style="height:40px;border-radius:8px;background:' + c + ';cursor:pointer;" title="' + c + '"></div>';
    }).join('');
}

// ─── Checklist ──────────────────────────────────────────────────────────────
var _checkItems = [];
function loadChecklist() {
    try { _checkItems = JSON.parse(localStorage.getItem('hesabist_checklist') || '[]'); } catch(e) { _checkItems = []; }
    renderChecklist();
}
function renderChecklist() {
    var el = document.getElementById('cl-list');
    if (!el) return;
    el.innerHTML = _checkItems.map(function(item, i) {
        return '<div style="display:flex;align-items:center;gap:8px;padding:10px;border-bottom:1px solid var(--bg);"><input type="checkbox" ' + (item.done ? 'checked' : '') + ' onchange="toggleCheckItem(' + i + ')" style="width:20px;height:20px;"><span style="flex:1;' + (item.done ? 'text-decoration:line-through;opacity:0.5;' : '') + '">' + escHtml(item.text) + '</span><button onclick="removeCheckItem(' + i + ')" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:1.2rem;">×</button></div>';
    }).join('');
    localStorage.setItem('hesabist_checklist', JSON.stringify(_checkItems));
}
function addCheckItem() {
    var inp = document.getElementById('cl-input');
    if (!inp || !inp.value.trim()) return;
    _checkItems.push({ text: inp.value.trim(), done: false });
    inp.value = '';
    renderChecklist();
}
function toggleCheckItem(i) { _checkItems[i].done = !_checkItems[i].done; renderChecklist(); }
function removeCheckItem(i) { _checkItems.splice(i, 1); renderChecklist(); }

// ─── محاسبات ────────────────────────────────────────────────────────────────
document.getElementById('btn-calc').onclick = function() {
    var v1 = parseFloat(document.getElementById('inp1').value);
    var v2 = parseFloat(document.getElementById('inp2').value);
    var v3 = parseFloat(document.getElementById('inp3').value);
    var resEl = document.getElementById('res-val');
    var copyBtn = document.getElementById('btn-copy');
    var isFa = currentLang === 'fa';

    // ابزارهای متنی
    var textareaTools = ['base64','textAnalyzer','diffChecker','codeBeautifier','codeMinifier','jsonFormatter','listSorter','charConverter','notepad','bulkUrl'];
    if (textareaTools.indexOf(currentToolId) !== -1) {
        var ta = document.getElementById('dynamic-textarea');
        var text = ta ? ta.value : '';
        var ta2 = document.getElementById('dynamic-textarea2');
        var text2 = ta2 ? ta2.value : '';
        var result = '';

        switch(currentToolId) {
            case 'base64':
                try {
                    if (/^[A-Za-z0-9+/=]+$/.test(text.trim()) && text.trim().length > 0 && !text.includes('\n') && text.trim().length % 4 === 0) {
                        result = atob(text.trim());
                    } else {
                        result = btoa(unescape(encodeURIComponent(text)));
                    }
                } catch(e) { result = '⚠️ ' + (isFa ? 'خطا در رمزگذاری' : 'Encoding error'); }
                break;

            case 'textAnalyzer':
                var words = text.trim() ? text.trim().split(/\s+/).length : 0;
                var chars = text.length;
                var charsNoSpace = text.replace(/\s/g, '').length;
                var lines = text ? text.split('\n').length : 0;
                var sentences = text.replace(/[^.!?؟\s]/g, '').split(/\s+/).filter(function(s){ return s.trim(); }).length;
                result = isFa
                    ? 'کلمات: ' + words + ' | کاراکتر: ' + chars + ' | بدون فاصله: ' + charsNoSpace + ' | خطوط: ' + lines + ' | جملات: ' + sentences
                    : 'Words: ' + words + ' | Chars: ' + chars + ' | No space: ' + charsNoSpace + ' | Lines: ' + lines + ' | Sentences: ' + sentences;
                break;

            case 'diffChecker':
                var lines1 = text.split('\n');
                var lines2 = text2.split('\n');
                var diff = [];
                var maxLen = Math.max(lines1.length, lines2.length);
                for (var i = 0; i < maxLen; i++) {
                    if (lines1[i] !== lines2[i]) {
                        diff.push((isFa ? 'خط ' : 'Line ') + (i+1) + ':');
                        if (lines1[i]) diff.push('- ' + lines1[i]);
                        if (lines2[i]) diff.push('+ ' + lines2[i]);
                    }
                }
                result = diff.length ? diff.join('\n') : (isFa ? '✅ متن‌ها identical' : '✅ Texts are identical');
                break;

            case 'codeBeautifier':
                try {
                    var indent = 0;
                    result = text.replace(/\s*{\s*/g, ' {\n').replace(/\s*}\s*/g, '\n}\n')
                        .replace(/;\s*/g, ';\n')
                        .split('\n').map(function(line) {
                            line = line.trim();
                            if (line === '}') indent = Math.max(0, indent - 1);
                            var out = '  '.repeat(indent) + line;
                            if (line.endsWith('{')) indent++;
                            return out;
                        }).join('\n');
                } catch(e) { result = text; }
                break;

            case 'codeMinifier':
                result = text.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '')
                    .replace(/\s*([{};,=+\-*/<>!&|])\s*/g, '$1')
                    .replace(/\s+/g, ' ').trim();
                break;

            case 'jsonFormatter':
                try {
                    result = JSON.stringify(JSON.parse(text), null, 2);
                } catch(e) { result = '⚠️ ' + (isFa ? 'JSON نامعتبر: ' : 'Invalid JSON: ') + e.message; }
                break;

            case 'listSorter':
                var listLines = text.split('\n').filter(function(l){ return l.trim(); });
                var sortType = 'alpha';
                if (listLines.every(function(l){ return !isNaN(parseFloat(l)); })) sortType = 'num';
                if (sortType === 'num') {
                    listLines.sort(function(a,b){ return parseFloat(a) - parseFloat(b); });
                } else {
                    listLines.sort(function(a,b){ return a.localeCompare(b, currentLang === 'fa' ? 'fa' : 'en'); });
                }
                result = listLines.join('\n');
                break;

            case 'charConverter':
                var arabicChars = {'أ':'ا','إ':'ا','آ':'ا','ة':'ه','ى':'ی','ؤ':'و','ئ':'ی','ء':'ا','ك':'ک','ي':'ی'};
                result = text;
                Object.keys(arabicChars).forEach(function(k) {
                    result = result.split(k).join(arabicChars[k]);
                });
                // Normalize zero-width characters
                result = result.replace(/[\u200B\u200C\u200D\uFEFF]/g, '');
                break;

            case 'notepad':
                if (!text && localStorage.getItem('hesabist_notepad')) {
                    document.getElementById('dynamic-textarea').value = localStorage.getItem('hesabist_notepad');
                    result = isFa ? '📥 یادداشت قبلی بارگذاری شد' : '📥 Previous notes loaded';
                } else {
                    localStorage.setItem('hesabist_notepad', text);
                    result = isFa ? '✅ ذخیره شد (' + text.length + ' کاراکتر)' : '✅ Saved (' + text.length + ' chars)';
                }
                break;

            case 'bulkUrl':
                var urls = text.split('\n').map(function(u){ return u.trim(); }).filter(function(u){ return u; });
                var opened = 0;
                urls.forEach(function(url, idx) {
                    if (!url.startsWith('http')) url = 'https://' + url;
                    setTimeout(function() {
                        try { window.open(url, '_blank'); } catch(e) {}
                    }, idx * 300);
                    opened++;
                });
                result = isFa ? '✅ ' + opened + ' لینک باز شد (با تاخیر)' : '✅ ' + opened + ' links opening...';
                break;
        }
        resEl.innerText = result;
        copyBtn.style.display = (result && result.indexOf('⚠️') === -1) ? 'inline-block' : 'none';
        return;
    }

    // ابزار ریجکس تستر
    if (currentToolId === 'regexTester') {
        var pattern = document.getElementById('dynamic-regex');
        var testStr = document.getElementById('dynamic-teststr');
        var result = '';
        try {
            var re = new RegExp(pattern.value, 'g');
            var matches = testStr.value.match(re);
            result = matches
                ? (isFa ? '✅ ' + matches.length + ' تطابق: ' : '✅ ' + matches.length + ' matches: ') + matches.join(', ')
                : (isFa ? '❌ بدون تطابق' : '❌ No matches');
        } catch(e) { result = '⚠️ ' + e.message; }
        resEl.innerText = result;
        copyBtn.style.display = 'none';
        return;
    }

    // ابزارها با ورودی عددی
    if (isNaN(v1) || v1 < 0) {
        resEl.innerText = isFa ? '⚠️ عدد معتبر وارد کن' : '⚠️ Enter a valid number';
        copyBtn.style.display = 'none';
        return;
    }

    var result = '';

    switch(currentToolId) {
        case 'math':
            if (isNaN(v2)) { result = '⚠️'; break; }
            result = (v1 * v2 / 100).toLocaleString(isFa ? 'fa-IR' : 'en-US');
            break;

        case 'vat':
            var tax = Math.round(v1 * 0.09);
            var total = v1 + tax;
            result = isFa ? 'مالیات: ' + tax.toLocaleString('fa-IR') + ' | کل: ' + total.toLocaleString('fa-IR')
                         : 'Tax: ' + tax.toLocaleString() + ' | Total: ' + total.toLocaleString();
            break;

        case 'bmi':
            if (isNaN(v1) || v1 <= 0 || v1 > 500) { result = isFa ? '⚠️ وزن معتبر نیست' : '⚠️ Invalid weight'; break; }
            if (isNaN(v2) || v2 < 50 || v2 > 250) { result = isFa ? '⚠️ قد معتبر نیست' : '⚠️ Invalid height'; break; }
            var bmiRes = calcBMI(v1, v2);
            if (bmiRes.error) { result = '⚠️ ' + bmiRes.error; break; }
            result = bmiRes.bmi + ' — ' + bmiRes.category;
            break;

        case 'loan':
            if (isNaN(v2) || isNaN(v3) || v3 < 1) { result = '⚠️'; break; }
            var lr = calcLoan(v1, v2, v3);
            if (lr.error) { result = '⚠️ ' + lr.error; break; }
            result = lr.toLocaleString(isFa ? 'fa-IR' : 'en-US') + (isFa ? ' تومان' : ' Toman');
            break;

        case 'discount':
            if (isNaN(v2) || v2 < 0 || v2 > 100) { result = isFa ? '⚠️ درصد ۰ تا ۱۰۰' : '⚠️ Percent 0-100'; break; }
            var dc = calcDiscount(v1, v2);
            result = isFa ? dc.finalPrice.toLocaleString('fa-IR') + ' تومان' : dc.finalPrice.toLocaleString();
            break;

        case 'age':
            var persianYear = getPersianYear();
            var gregorianYear = new Date().getFullYear();
            var birthYear = v1;
            if (isFa && (birthYear < 1000 || birthYear > persianYear)) { result = isFa ? '⚠️ سال تولد معتبر نیست' : '⚠️ Birth year invalid'; break; }
            if (!isFa && (birthYear < 1900 || birthYear > gregorianYear)) { result = '⚠️ Birth year invalid'; break; }
            var age = isFa ? persianYear - birthYear : gregorianYear - birthYear;
            if (age < 0 || age > 150) { result = isFa ? '⚠️ سال تولد معتبر نیست' : '⚠️ Birth year invalid'; break; }
            result = age + (isFa ? ' سال' : ' years');
            break;

        case 'water':
            result = (v1 * 0.033).toFixed(1) + ' L';
            break;

        case 'pass':
            var passLen = parseInt(document.getElementById('inp1').value);
            if (isNaN(passLen) || passLen < 4 || passLen > 64) {
                result = isFa ? '⚠️ طول ۴ تا ۶۴' : '⚠️ Length 4-64';
            } else {
                result = generatePassword(passLen);
            }
            break;

        case 'unit':
            result = (v1 / 2.54).toFixed(2) + ' inch';
            break;

        case 'circle':
            if (v1 <= 0) { result = '⚠️'; break; }
            result = (Math.PI * v1 ** 2).toFixed(2);
            break;

        case 'temp':
            result = (v1 * 1.8 + 32).toFixed(1) + ' °F';
            break;

        case 'ideals':
            if (v1 < 120 || v1 > 250) { result = isFa ? '⚠️ قد ۱۲۰ تا ۲۵۰' : '⚠️ Height 120-250'; break; }
            result = ((v1 - 100) - ((v1 - 150) / 4)).toFixed(1) + ' kg';
            break;

        case 'square':
            result = (v1 * v1).toLocaleString(isFa ? 'fa-IR' : 'en-US');
            break;

        case 'profit':
            if (isNaN(v2) || v2 < 0) { result = '⚠️'; break; }
            result = Math.round((v1 * v2 / 100) / 12).toLocaleString(isFa ? 'fa-IR' : 'en-US') + (isFa ? ' تومان/ماه' : '/month');
            break;

        case 'dollar':
            if (isNaN(v2) || v2 <= 0) { result = '⚠️'; break; }
            var dr = calcDollar(v1, v2);
            if (dr.error) { result = '⚠️'; break; }
            result = dr.formatted;
            break;

        case 'currency':
            var selFrom = document.getElementById('sel-from');
            var selTo = document.getElementById('sel-to');
            if (!selFrom || !selTo || !selFrom.value || !selTo.value) { result = isFa ? '⚠️ ارزها را انتخاب کنید' : '⚠️ Select currencies'; break; }
            var fromRate = currencyData[selFrom.value].rate;
            var toRate = currencyData[selTo.value].rate;
            var converted = (v1 * fromRate) / toRate;
            result = v1.toLocaleString(isFa ? 'fa-IR' : 'en-US') + ' ' + currencyData[selFrom.value].name + ' = ' + converted.toLocaleString(isFa ? 'fa-IR' : 'en-US', {maximumFractionDigits:2}) + ' ' + currencyData[selTo.value].name;
            break;

        case 'calorie':
            var selAct = document.getElementById('sel-activity');
            var actType = (selAct && selAct.value) ? selAct.value : 'default';
            if (v1 <= 0 || v2 <= 0) { result = '⚠️'; break; }
            var cr = calcCalorie(v1, v2, actType);
            if (cr.error) { result = '⚠️'; break; }
            result = cr.calories + ' ' + (isFa ? 'کالری' : 'kcal') + ' (MET: ' + cr.met + ')';
            break;

        case 'unitConv':
            var selUnit = document.getElementById('sel-unit');
            if (!selUnit || !selUnit.value) { result = isFa ? '⚠️ نوع تبدیل را انتخاب کنید' : '⚠️ Select conversion'; break; }
            result = convertUnit(v1, selUnit.value);
            break;

        case 'eidi':
            var eidi = Math.round(v1 * 2 / 12);
            result = isFa ? eidi.toLocaleString('fa-IR') + ' تومان' : eidi.toLocaleString() + ' Toman';
            break;

        case 'priceCalc':
            if (isNaN(v2) || v2 <= 0) { result = '⚠️'; break; }
            var total = v1 * v2;
            result = total.toLocaleString(isFa ? 'fa-IR' : 'en-US') + (isFa ? ' تومان' : ' Toman');
            break;

        case 'realstate':
            if (isNaN(v2) || v2 <= 0) { result = '⚠️'; break; }
            var total = v1 * v2;
            result = total.toLocaleString(isFa ? 'fa-IR' : 'en-US') + (isFa ? ' تومان' : ' Toman');
            break;

        case 'timestampConv':
            var ts = v1;
            if (ts > 1e12) { /* already milliseconds */ }
            else if (ts > 1e9) ts = ts * 1000; // seconds to ms
            else {
                // Try parsing as date
                var d = new Date(document.getElementById('inp1').value);
                if (!isNaN(d.getTime())) {
                    result = Math.floor(d.getTime() / 1000) + ' (Unix) | ' + d.toISOString();
                    break;
                }
            }
            var d = new Date(ts);
            if (isNaN(d.getTime())) { result = '⚠️'; break; }
            result = d.toLocaleString(isFa ? 'fa-IR' : 'en-US') + ' | Unix: ' + Math.floor(d.getTime() / 1000);
            break;

        case 'dateConv':
            var input = document.getElementById('inp1').value.trim();
            if (!input) { result = '⚠️'; break; }
            // Try to parse shamsi date like 1403/05/15
            var parts = input.split(/[\/\-]/);
            if (parts.length >= 3) {
                var sy = parseInt(parts[0]), sm = parseInt(parts[1]), sd = parseInt(parts[2]);
                // Convert jalali to gregorian (simplified)
                var gDate = jalaliToGregorian(sy, sm, sd);
                if (gDate) {
                    result = gDate.getFullYear() + '/' + (gDate.getMonth()+1) + '/' + gDate.getDate() + ' (' + gDate.toLocaleDateString(isFa ? 'fa-IR' : 'en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'}) + ')';
                } else {
                    result = isFa ? '⚠️ تاریخ نامعتبر' : '⚠️ Invalid date';
                }
            } else {
                result = isFa ? '⚠️ فرمت: ۱۴۰۳/۰۵/۱۵' : '⚠️ Format: 2024/08/05';
            }
            break;

        case 'cssGen':
            if (isNaN(v3)) v3 = 12;
            var bg = document.getElementById('inp1').value || '#fff';
            var col = document.getElementById('inp2') && document.getElementById('inp2').value ? document.getElementById('inp2').value : '#333';
            result = 'background: ' + bg + ';\ncolor: ' + col + ';\nborder-radius: ' + v3 + 'px;\npadding: 16px;';
            break;

        case 'robotsGen':
            var domain = document.getElementById('inp1').value.trim();
            if (!domain) { result = '⚠️'; break; }
            if (!domain.startsWith('http')) domain = 'https://' + domain;
            result = 'User-agent: *\nAllow: /\nSitemap: ' + domain + '/sitemap.xml';
            break;

        case 'seoGen':
            var title = escHtml(document.getElementById('inp1').value);
            var desc = escHtml(document.getElementById('inp2') ? document.getElementById('inp2').value : '');
            var url = escHtml(document.getElementById('inp3') ? document.getElementById('inp3').value : '');
            result = '<title>' + title + '</title>\n<meta name="description" content="' + desc + '">\n<meta property="og:title" content="' + title + '">\n<meta property="og:description" content="' + desc + '">\n<meta property="og:url" content="' + url + '">';
            break;

        case 'utmBuilder':
            var url = document.getElementById('inp1').value;
            var campaign = document.getElementById('inp2') ? document.getElementById('inp2').value : '';
            var source = document.getElementById('inp3') ? document.getElementById('inp3').value : '';
            if (!url) { result = '⚠️'; break; }
            var sep = url.includes('?') ? '&' : '?';
            result = url + sep + 'utm_source=' + encodeURIComponent(source) + '&utm_medium=social&utm_campaign=' + encodeURIComponent(campaign);
            break;

        case 'ogPreview':
            var title = escHtml(document.getElementById('inp1').value);
            var desc = escHtml(document.getElementById('inp2') ? document.getElementById('inp2').value : '');
            var img = escHtml(document.getElementById('inp3') ? document.getElementById('inp3').value : '');
            result = 'OG Title: ' + title + '\nOG Description: ' + desc + '\nOG Image: ' + img;
            break;

        case 'qrGen':
            var text = document.getElementById('inp1').value;
            if (!text) { result = '⚠️'; break; }
            var dataUrl = generateQR(text);
            resultEl.innerHTML = '<img src="' + dataUrl + '" style="max-width:200px;margin:10px auto;display:block;border-radius:8px;">';
            copyBtn.style.display = 'none';
            return;

        case 'imgConvert':
            var fileInput = document.getElementById('ic-file');
            if (!fileInput || !fileInput.files[0]) { result = isFa ? '⚠️ فایل انتخاب کنید' : '⚠️ Select a file'; break; }
            var format = document.getElementById('ic-format').value;
            var canvas = document.getElementById('ic-canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width; canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                var mime = 'image/' + format;
                var dataUrl = canvas.toDataURL(mime, 0.9);
                var link = document.createElement('a');
                link.download = 'converted.' + format;
                link.href = dataUrl;
                document.getElementById('ic-result').innerHTML = '<a href="' + dataUrl + '" download="converted.' + format + '" style="color:var(--primary);font-weight:bold;">' + (isFa ? 'دانلود تصویر' : 'Download Image') + '</a>';
            };
            img.src = URL.createObjectURL(fileInput.files[0]);
            result = isFa ? 'در حال تبدیل...' : 'Converting...';
            break;

        case 'textOnImg':
            var fileInput = document.getElementById('toi-file');
            var text = document.getElementById('inp1').value;
            if (!fileInput || !fileInput.files[0] || !text) { result = isFa ? '⚠️ فایل و متن وارد کنید' : '⚠️ Enter file and text'; break; }
            var canvas = document.getElementById('toi-canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width; canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                ctx.font = 'bold ' + Math.max(24, img.width / 15) + 'px Vazirmatn, Tahoma, Arial, sans-serif';
                ctx.fillStyle = '#fff';
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 3;
                ctx.textAlign = 'center';
                var y = img.height / 2;
                ctx.strokeText(text, img.width / 2, y);
                ctx.fillText(text, img.width / 2, y);
                var dataUrl = canvas.toDataURL('image/png');
                document.getElementById('toi-result').innerHTML = '<img src="' + dataUrl + '" style="max-width:100%;border-radius:8px;margin-top:10px;"><br><a href="' + dataUrl + '" download="text-image.png" style="color:var(--primary);font-weight:bold;">' + (isFa ? 'دانلود' : 'Download') + '</a>';
            };
            img.src = URL.createObjectURL(fileInput.files[0]);
            result = isFa ? 'در حال پردازش...' : 'Processing...';
            break;

        default:
            result = isFa ? '⚠️ ابزار پشتیبانی نمی‌شود' : '⚠️ Tool not supported';
    }

    resEl.innerText = result;
    copyBtn.style.display = (result && result.indexOf('⚠️') === -1) ? 'inline-block' : 'none';
};

// ─── تبدیل تاریخ شمسی به میلادی (ساده) ─────────────────────────────────────
function jalaliToGregorian(jy, jm, jd) {
    var jy_ref = 1397;
    var g_year = 2018, g_month = 3, g_day = 21;
    var days = 0;
    var yDiff = jy - jy_ref;
    if (yDiff >= 0) {
        for (var y = 0; y < yDiff; y++) {
            var cyc = (jy_ref + y) % 33;
            days += [1,5,9,13,17,22,26,30].indexOf(cyc) !== -1 ? 366 : 365;
        }
    } else {
        for (var y = 0; y > yDiff; y--) {
            var cyc = (jy_ref + y - 1 + 33) % 33;
            days -= [1,5,9,13,17,22,26,30].indexOf(cyc) !== -1 ? 366 : 365;
        }
    }
    for (var m = 1; m < jm; m++) {
        days += m <= 6 ? 31 : m <= 11 ? 30 : ([1,5,9,13,17,22,26,30].indexOf(jy % 33) !== -1 ? 30 : 29);
    }
    days += jd - 1;
    var result = new Date(g_year, g_month - 1, g_day);
    result.setDate(result.getDate() + days);
    return result;
}

// ─── XSS Protection ────────────────────────────────────────────────────────
function escHtml(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s));
    return d.innerHTML;
}

function searchTools() {
    var s = document.getElementById('toolSearch').value.toLowerCase();
    renderTools(toolList.filter(function(t) {
        var title = dictionary[currentLang].tools[t.id].title.toLowerCase();
        var id = t.id.toLowerCase();
        var cat = t.cat.toLowerCase();
        return title.includes(s) || id.includes(s) || cat.includes(s);
    }));
}

// ─── Service Worker ─────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function() { console.log('Hesabist SW registered'); })
            .catch(function(err) { console.log('SW failed:', err); });
    });
}
