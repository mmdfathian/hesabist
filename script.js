let currentLang = 'fa';
let currentToolId = '';

const dictionary = {
    fa: {
        title: "حسابیست", sub: "HESABIST", badge: "MOHIX SMART ENGINE",
        search: "جستجو میان ابزارها...", calc: "محاسبه نهایی", back: "← بازگشت",
        cats: { all: "همه", math: "ریاضی", finance: "مالی", health: "سلامت", general: "عمومی" },
        tools: {
            math:     { title: "درصدگیری",    p1: "عدد اصلی",    p2: "درصد",          desc: "با ابزار درصدگیری آنلاین حسابیست، به راحتی درصد اعداد، تخفیف کالاهای فروشگاهی و نسبت‌های ریاضی را با دقت بالا محاسبه کنید." },
            vat:      { title: "مالیات ۹٪",   p1: "مبلغ (تومان)",                      desc: "محاسبه آنلاین مالیات بر ارزش افزوده (VAT) با نرخ ۹ درصد." },
            bmi:      { title: "شاخص BMI",    p1: "وزن (کیلو)",  p2: "قد (سانت)",      desc: "شاخص توده بدنی یا BMI آنلاین — وضعیت بدنی خود را طبق استانداردهای بهداشت جهانی بررسی کنید." },
            loan:     { title: "اقساط وام",   p1: "مبلغ وام",    p2: "سود سالانه (%)", p3: "تعداد ماه", desc: "محاسبه‌گر اقساط وام بانکی با فرمول استاندارد PMT." },
            discount: { title: "تخفیف",       p1: "قیمت کل",     p2: "درصد تخفیف",    desc: "محاسبه آنلاین درصد تخفیف و قیمت نهایی کالا." },
            age:      { title: "محاسبه سن",   p1: "سال تولد شمسی", desc: "ابزار دقیق محاسبه سن بر اساس تاریخ امروز." },
            water:    { title: "نیاز به آب",  p1: "وزن (کیلو)",  desc: "محاسبه آنلاین میزان آب مورد نیاز بدن در روز بر اساس وزن." },
            pass:     { title: "پسورد ساز",   p1: "تعداد کاراکتر (۸ تا ۳۲)", desc: "ساخت پسورد قوی و تصادفی با استفاده از crypto API." },
            unit:     { title: "سانت به اینچ",p1: "سانتی‌متر",   desc: "تبدیل واحد آنلاین سانتی‌متر به اینچ با دقت بالا." },
            circle:   { title: "مساحت دایره", p1: "شعاع",         desc: "فرمول و محاسبه آنلاین مساحت دایره." },
            temp:     { title: "دما (C به F)", p1: "درجه سانتی‌گراد", desc: "تبدیل آنلاین درجه سانتی‌گراد به فارنهایت." },
            ideals:   { title: "وزن ایده‌آل", p1: "قد (سانت، بیشتر از ۱۲۰)", desc: "محاسبه آنلاین وزن ایده‌آل بر اساس قد." },
            square:   { title: "توان دوم",    p1: "عدد",          desc: "محاسبه آنلاین توان دوم (مجذور) اعداد." },
            profit:   { title: "سود بانکی",   p1: "سرمایه (تومان)", p2: "سود سالانه (%)", desc: "محاسبه آنلاین سود سپرده بانکی ماهانه و سالانه." },
            dollar:   { title: "قیمت دلار",   p1: "مبلغ (تومان)",  p2: "نرخ دلار",     desc: "تبدیل تومان به دلار با نرخ روز." },
            currency: { title: "نرخ ارز",      p1: "مبلغ",          p2: "نرخ ارز مبدأ",   p3: "نرخ ارز مقصد", desc: "تبدیل ارزهای مختلف. نرخ‌ها رو به عدد وارد کنید." },
            calorie:  { title: "کالری‌سوزی",   p1: "وزن (کیلو)",    p2: "زمان (دقیقه)",  p3: "نوع فعالیت", desc: "محاسبه کالری سوزانده شده در ورزش." }
        }
    },
    en: {
        title: "HESABIST", sub: "حسابیست", badge: "MOHIX SMART ENGINE",
        search: "Search tools...", calc: "Calculate", back: "← Back",
        cats: { all: "All", math: "Math", finance: "Finance", health: "Health", general: "General" },
        tools: {
            math:     { title: "Percentage",   p1: "Value",      p2: "Percent" },
            vat:      { title: "VAT 9%",        p1: "Amount" },
            bmi:      { title: "BMI Index",     p1: "Weight (kg)", p2: "Height (cm)" },
            loan:     { title: "Loan Calc",     p1: "Principal",  p2: "Annual Interest (%)", p3: "Months" },
            discount: { title: "Discount",      p1: "Price",      p2: "Percent" },
            age:      { title: "Age Calc",      p1: "Birth Year" },
            water:    { title: "Water Needs",   p1: "Weight (kg)" },
            pass:     { title: "Pass Gen",      p1: "Length (8–32)" },
            unit:     { title: "CM to Inch",    p1: "CM" },
            circle:   { title: "Circle Area",   p1: "Radius" },
            temp:     { title: "Celsius to F",  p1: "Celsius" },
            ideals:   { title: "Ideal Weight",  p1: "Height (cm, >120)" },
            square:   { title: "Square (x²)",   p1: "Number" },
            profit:   { title: "Bank Profit",   p1: "Deposit",    p2: "APY (%)" },
            dollar:   { title: "Dollar Price",  p1: "Amount (Toman)", p2: "Dollar Rate", desc: "Convert Toman to Dollar with current rate." },
            currency: { title: "Exchange Rate", p1: "Amount",     p2: "From Rate",    p3: "To Rate", desc: "Convert between currencies. Enter rates as numbers." },
            calorie:  { title: "Calorie Burn",  p1: "Weight (kg)", p2: "Duration (min)", p3: "Activity Type", desc: "Calculate calories burned during exercise." }
        }
    }
};

const toolList = [
    { id: 'math',     icon: '٪',  cat: 'math'    },
    { id: 'vat',      icon: '💰', cat: 'finance'  },
    { id: 'bmi',      icon: '⚖️', cat: 'health'   },
    { id: 'loan',     icon: '🏦', cat: 'finance'  },
    { id: 'discount', icon: '🏷️', cat: 'finance'  },
    { id: 'age',      icon: '📅', cat: 'general'  },
    { id: 'water',    icon: '💧', cat: 'health'   },
    { id: 'pass',     icon: '🔑', cat: 'general'  },
    { id: 'unit',     icon: '📏', cat: 'general'  },
    { id: 'circle',   icon: '⭕', cat: 'math'     },
    { id: 'temp',     icon: '🌡️', cat: 'general'  },
    { id: 'ideals',   icon: '🚶', cat: 'health'   },
    { id: 'square',   icon: '🔢', cat: 'math'     },
    { id: 'profit',   icon: '📈', cat: 'finance'  },
    { id: 'dollar',   icon: '💵', cat: 'finance'  },
    { id: 'currency', icon: '💱', cat: 'finance'  },
    { id: 'calorie',  icon: '🔥', cat: 'health'   }
];

// ─── داده ارزها (نرخ تقریبی به تومان) ────────────────────────────────────────
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
    'PKR': { name: 'روپیه پاکستان', rate: 180 },
    'INR': { name: 'روپیه هند', rate: 600 },
    'KWD': { name: 'دینار کویت', rate: 162000 },
    'QAR': { name: 'ریال قطر', rate: 13700 },
    'BHD': { name: 'دینار بحرین', rate: 132000 },
    'OMR': { name: 'ریال عمان', rate: 130000 }
};

// ─── داده فعالیت‌ها ──────────────────────────────────────────────────────────
const activityData = {
    fa: [
        ['walking', 'پیاده‌روی'], ['running', 'دویدن'], ['cycling', 'دوچرخه‌سواری'],
        ['swimming', 'شنا'], ['yoga', 'یوگا'], ['gym', 'بدنسازی']
    ],
    en: [
        ['walking', 'Walking'], ['running', 'Running'], ['cycling', 'Cycling'],
        ['swimming', 'Swimming'], ['yoga', 'Yoga'], ['gym', 'Gym']
    ]
};

// ─── تاریخ شمسی پویا ───────────────────────────────────────────────────────
function getPersianYear() {
    return parseInt(new Date().toLocaleDateString('fa-IR-u-ca-persian', { year: 'numeric' }).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
}

// ─── پسورد امن ─────────────────────────────────────────────────────────────
function generatePassword(length) {
    const len = Math.min(Math.max(parseInt(length) || 12, 8), 32);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr, b => chars[b % chars.length]).join('');
}

// ─── فرمول استاندارد PMT برای وام ──────────────────────────────────────────
function calcLoan(principal, annualRate, months) {
    // Validation
    if (principal <= 0 || annualRate < 0 || months <= 0) {
        return { error: 'مقادیر نامعتبر' };
    }
    if (annualRate === 0) return Math.round(principal / months);
    const r = annualRate / 100 / 12;
    return Math.round(principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1));
}

// ─── محاسبه BMI ─────────────────────────────────────────────────────────────
function calcBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return { error: 'مقادیر نامعتبر' };
    }
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    let category = '';
    if (bmi < 18.5) category = 'کمبود وزن';
    else if (bmi < 25) category = 'نرمال';
    else if (bmi < 30) category = 'اضافه وزن';
    else category = 'چاق';
    return { bmi: Math.round(bmi * 10) / 10, category };
}

// ─── محاسبه تخفیف ──────────────────────────────────────────────────────────
function calcDiscount(price, discountPercent) {
    if (price <= 0 || discountPercent < 0 || discountPercent > 100) {
        return { error: 'مقادیر نامعتبر' };
    }
    const discount = price * discountPercent / 100;
    const finalPrice = price - discount;
    return { discount: Math.round(discount), finalPrice: Math.round(finalPrice) };
}

// ─── محاسبه سن ──────────────────────────────────────────────────────────────
function calcAge(birthYear) {
    const currentYear = parseInt(new Date().toLocaleDateString('fa-IR-u-ca-persian', { year: 'numeric' }).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
    if (birthYear <= 0 || birthYear > currentYear) {
        return { error: 'سال تولد نامعتبر' };
    }
    return { age: currentYear - birthYear };
}

// ─── تبدیل تومان به دلار ──────────────────────────────────────────────────
function calcDollar(amount, rate) {
    if (amount <= 0 || rate <= 0) {
        return { error: 'مقادیر نامعتبر' };
    }
    const dollar = amount / rate;
    return { 
        dollar: Math.round(dollar * 100) / 100,
        formatted: dollar.toFixed(2) + ' $'
    };
}

// ─── تبدیل ارز ──────────────────────────────────────────────────────────────
function calcCurrency(amount, fromRate, toRate) {
    if (amount <= 0 || fromRate <= 0 || toRate <= 0) {
        return { error: 'مقادیر نامعتبر' };
    }
    const result = (amount / fromRate) * toRate;
    return { 
        result: Math.round(result * 100) / 100,
        formatted: result.toFixed(2)
    };
}

// ─── محاسبه کالری سوزی ──────────────────────────────────────────────────────
function calcCalorie(weight, duration, activityType) {
    if (weight <= 0 || duration <= 0) {
        return { error: 'مقادیر نامعتبر' };
    }
    
    // ضرایب فعالیت (MET values)
    const metValues = {
        'walking': 3.5,
        'running': 8.0,
        'cycling': 6.0,
        'swimming': 7.0,
        'yoga': 2.5,
        'gym': 5.0,
        'default': 4.0
    };
    
    const met = metValues[activityType] || metValues['default'];
    const calories = (met * weight * duration) / 60;
    
    return { 
        calories: Math.round(calories),
        met: met
    };
}

// ─── بوت ───────────────────────────────────────────────────────────────────
window.onload = () => {
    const isDark = localStorage.getItem('hesabist_dark') === 'true';
    if (isDark) document.body.classList.add('dark-mode');
    applyTheme(localStorage.getItem('hesabist_theme') || 'blue');
    updateUI();
    setInterval(tickClock, 1000);
    tickClock();

    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const wrapper = document.getElementById('app-wrapper');
        splash.style.transition = 'opacity 0.5s ease';
        splash.style.opacity = '0';
        wrapper.style.display = 'block';
        setTimeout(() => {
            wrapper.style.opacity = '1';
            splash.style.display = 'none';
            const toolId = new URLSearchParams(window.location.search).get('tool');
            if (toolId && dictionary[currentLang].tools[toolId]) openTool(toolId, false);
        }, 500);
    }, 900); // splash کوتاه‌تر شد
};

window.onpopstate = (event) => {
    if (event.state && event.state.id) openTool(event.state.id, false);
    else showHome(false);
};

// ─── ساعت ──────────────────────────────────────────────────────────────────
function tickClock() {
    const now = new Date();
    const isFa = currentLang === 'fa';
    document.getElementById('txt-clock').innerText = now.toLocaleTimeString(isFa ? 'fa-IR' : 'en-US');
    document.getElementById('txt-date').innerText = now.toLocaleDateString(
        isFa ? 'fa-IR-u-ca-persian' : 'en-US',
        { day: 'numeric', month: 'long' }
    );
}

// ─── UI ─────────────────────────────────────────────────────────────────────
function updateUI() {
    const lang = dictionary[currentLang];
    document.querySelector('.brand-info h1').innerText = lang.title;
    document.querySelector('.brand-info span').innerText = lang.sub;
    document.querySelector('.engine-label').innerText = lang.badge;
    document.getElementById('toolSearch').placeholder = lang.search;
    document.getElementById('lang-btn').innerText = currentLang === 'fa' ? 'English' : 'فارسی';
    document.getElementById('btn-calc').innerText = lang.calc;
    const tabs = document.getElementById('tabs-container');
    tabs.innerHTML = Object.keys(lang.cats).map(c =>
        `<button class="tab-btn" onclick="filterByCategory('${c}', this)">${lang.cats[c]}</button>`
    ).join('');
    tabs.querySelector('.tab-btn').classList.add('active');
    renderTools(toolList);
}

function renderTools(data) {
    const grid = document.getElementById('tools-grid');
    grid.innerHTML = data.map(t => `
        <div class="tool-card" onclick="openTool('${t.id}')">
            <span class="icon">${t.icon}</span>
            <h3>${dictionary[currentLang].tools[t.id].title}</h3>
        </div>
    `).join('') + `<div style="grid-column:1/-1; text-align:center; opacity:0.1; font-size:0.6rem; padding:40px;">MOHIX COMPANY</div>`;
}

function filterByCategory(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTools(cat === 'all' ? toolList : toolList.filter(t => t.cat === cat));
}

function openTool(id, pushState = true) {
    currentToolId = id;
    const toolData = dictionary[currentLang].tools[id];
    if (pushState) window.history.pushState({ id }, '', window.location.pathname + '?tool=' + id);

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('tool-view').style.display = 'block';
    document.getElementById('tool-title').innerText = toolData.title;
    document.getElementById('res-val').innerText = '';
    document.getElementById('btn-copy').style.display = 'none';

    const [i1, i2, i3] = ['inp1','inp2','inp3'].map(id => document.getElementById(id));
    i1.value = ''; i2.value = ''; i3.value = '';
    i1.placeholder = toolData.p1;
    i2.style.display = toolData.p2 ? 'block' : 'none';
    i3.style.display = toolData.p3 ? 'block' : 'none';
    if (toolData.p2) i2.placeholder = toolData.p2;
    i3.type = 'number';
    i3.removeAttribute('list');

    // ─── حذف select‌های قبلی ───
    document.querySelectorAll('.dynamic-select').forEach(el => el.remove());

    const inputsGroup = document.querySelector('.inputs-group');
    const isFa = currentLang === 'fa';

    // ─── ابزار نرخ ارز: dropdown انتخاب ارز ───
    if (id === 'currency') {
        i2.style.display = 'none';
        i3.style.display = 'none';

        const selFrom = document.createElement('select');
        selFrom.id = 'sel-from';
        selFrom.className = 'dynamic-select';
        selFrom.innerHTML = '<option value="">' + (isFa ? 'ارز مبدأ را انتخاب کنید' : 'Select source currency') + '</option>' +
            Object.entries(currencyData).map(([code, d]) =>
                '<option value="' + code + '">' + d.name + ' (' + code + ')</option>'
            ).join('');
        inputsGroup.appendChild(selFrom);

        const selTo = document.createElement('select');
        selTo.id = 'sel-to';
        selTo.className = 'dynamic-select';
        selTo.innerHTML = '<option value="">' + (isFa ? 'ارز مقصد را انتخاب کنید' : 'Select target currency') + '</option>' +
            Object.entries(currencyData).map(([code, d]) =>
                '<option value="' + code + '">' + d.name + ' (' + code + ')</option>'
            ).join('');
        inputsGroup.appendChild(selTo);
    }

    // ─── ابزار کالری: dropdown انتخاب فعالیت ───
    if (id === 'calorie') {
        i3.style.display = 'none';

        const acts = activityData[currentLang] || activityData.fa;
        const selAct = document.createElement('select');
        selAct.id = 'sel-activity';
        selAct.className = 'dynamic-select';
        selAct.innerHTML = '<option value="">' + (isFa ? 'نوع فعالیت را انتخاب کنید' : 'Select activity type') + '</option>' +
            acts.map(function(a) { return '<option value="' + a[0] + '">' + a[1] + '</option>'; }).join('');
        inputsGroup.appendChild(selAct);
    }

    document.title = toolData.title + " آنلاین | حسابیست";
    window.scrollTo(0, 0);
}

function showHome(pushState = true) {
    if (pushState) window.history.pushState(null, '', window.location.pathname);
    document.getElementById('tool-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
    document.title = "حسابیست | HESABIST";
}

function changeLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    document.documentElement.lang = currentLang === 'fa' ? 'fa' : 'en';
    document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    updateUI();
    tickClock();
}

function toggleSettings() {
    const m = document.getElementById('settings-modal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

function applyTheme(c) {
    document.body.classList.remove('theme-blue', 'theme-purple', 'theme-orange', 'theme-green');
    document.body.classList.add(`theme-${c}`);
    localStorage.setItem('hesabist_theme', c);
}

function handleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('hesabist_dark', document.body.classList.contains('dark-mode'));
}

function copyResult() {
    const text = document.getElementById('res-val').innerText;
    navigator.clipboard.writeText(text).catch(() => {});
}

// ─── محاسبات (اصلاح‌شده) ────────────────────────────────────────────────────
document.getElementById('btn-calc').onclick = () => {
    const v1 = parseFloat(document.getElementById('inp1').value);
    const v2 = parseFloat(document.getElementById('inp2').value);
    const v3 = parseFloat(document.getElementById('inp3').value);
    const resEl = document.getElementById('res-val');
    const copyBtn = document.getElementById('btn-copy');

    if (isNaN(v1) || v1 < 0) {
        resEl.innerText = currentLang === 'fa' ? '⚠️ عدد معتبر وارد کن' : '⚠️ Enter a valid number';
        copyBtn.style.display = 'none';
        return;
    }

    let result = "";

    switch (currentToolId) {
        case 'math':
            if (isNaN(v2)) { result = '⚠️'; break; }
            result = (v1 * v2 / 100).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
            break;

        case 'vat': {
            const tax = Math.round(v1 * 0.09);
            const total = v1 + tax;
            result = currentLang === 'fa'
                ? `مالیات: ${tax.toLocaleString('fa-IR')} | کل: ${total.toLocaleString('fa-IR')}`
                : `Tax: ${tax.toLocaleString()} | Total: ${total.toLocaleString()}`;
            break;
        }

        case 'bmi':
            if (isNaN(v2) || v2 < 50 || v2 > 250) { result = '⚠️ قد معتبر نیست'; break; }
            if (v1 < 10 || v1 > 500) { result = '⚠️ وزن معتبر نیست'; break; }
            result = (v1 / ((v2 / 100) ** 2)).toFixed(1);
            break;

        case 'loan':
            if (isNaN(v2) || isNaN(v3) || v3 < 1) { result = '⚠️'; break; }
            result = calcLoan(v1, v2, v3).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
            break;

        case 'discount':
            if (isNaN(v2) || v2 < 0 || v2 > 100) { result = '⚠️ درصد باید بین ۰ تا ۱۰۰ باشد'; break; }
            result = Math.round(v1 - (v1 * v2 / 100)).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
            break;

        case 'age': {
            const persianYear = getPersianYear();
            const gregorianYear = new Date().getFullYear();
            const age = currentLang === 'fa' ? persianYear - v1 : gregorianYear - v1;
            if (age < 0 || age > 150) { result = '⚠️ سال تولد معتبر نیست'; break; }
            result = age;
            break;
        }

        case 'water':
            result = (v1 * 0.033).toFixed(1) + " L";
            break;

        case 'pass':
            result = generatePassword(v1);
            break;

        case 'unit':
            result = (v1 / 2.54).toFixed(2) + " inch";
            break;

        case 'circle':
            if (v1 <= 0) { result = '⚠️ شعاع باید مثبت باشد'; break; }
            result = (Math.PI * v1 ** 2).toFixed(2);
            break;

        case 'temp':
            result = (v1 * 1.8 + 32).toFixed(1) + " °F";
            break;

        case 'ideals':
            if (v1 < 120 || v1 > 250) { result = '⚠️ قد باید بین ۱۲۰ تا ۲۵۰ سانت باشد'; break; }
            result = ((v1 - 100) - ((v1 - 150) / 4)).toFixed(1) + " kg";
            break;

        case 'square':
            result = (v1 * v1).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
            break;

        case 'profit':
            if (isNaN(v2) || v2 < 0) { result = '⚠️'; break; }
            result = Math.round((v1 * v2 / 100) / 12).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
            break;

        case 'dollar':
            if (isNaN(v2) || v2 <= 0) { result = currentLang === 'fa' ? '⚠️ نرخ دلار معتبر نیست' : '⚠️ Invalid rate'; break; }
            var dr = calcDollar(v1, v2);
            if (dr.error) { result = '⚠️ ' + dr.error; break; }
            result = dr.formatted;
            break;

        case 'currency': {
            var selFrom = document.getElementById('sel-from');
            var selTo = document.getElementById('sel-to');
            if (!selFrom || !selTo || !selFrom.value || !selTo.value) {
                result = currentLang === 'fa' ? '⚠️ ارزها را انتخاب کنید' : '⚠️ Select both currencies'; break;
            }
            if (v1 <= 0) { result = currentLang === 'fa' ? '⚠️ مبلغ معتبر وارد کنید' : '⚠️ Enter valid amount'; break; }
            var fromRate = currencyData[selFrom.value].rate;
            var toRate = currencyData[selTo.value].rate;
            var converted = (v1 / fromRate) * toRate;
            var fName = currencyData[selFrom.value].name;
            var tName = currencyData[selTo.value].name;
            result = currentLang === 'fa'
                ? v1.toLocaleString('fa-IR') + ' ' + fName + ' = ' + converted.toLocaleString('fa-IR', {maximumFractionDigits: 2}) + ' ' + tName
                : v1.toLocaleString() + ' ' + selFrom.value + ' = ' + converted.toLocaleString(undefined, {maximumFractionDigits: 2}) + ' ' + selTo.value;
            break;
        }

        case 'calorie': {
            var selActivity = document.getElementById('sel-activity');
            var actType = (selActivity && selActivity.value) ? selActivity.value : 'default';
            if (v1 <= 0 || v2 <= 0) { result = currentLang === 'fa' ? '⚠️ وزن و زمان را وارد کنید' : '⚠️ Enter weight and duration'; break; }
            var calorieResult = calcCalorie(v1, v2, actType);
            if (calorieResult.error) { result = '⚠️ ' + calorieResult.error; break; }
            var actNames = { fa: { walking: 'پیاده‌روی', running: 'دویدن', cycling: 'دوچرخه‌سواری', swimming: 'شنا', yoga: 'یوگا', gym: 'بدنسازی', default: 'عمومی' }, en: { walking: 'Walking', running: 'Running', cycling: 'Cycling', swimming: 'Swimming', yoga: 'Yoga', gym: 'Gym', default: 'General' } };
            var actName = actNames[currentLang][actType] || actNames[currentLang].default;
            result = currentLang === 'fa'
                ? actName + ': ' + calorieResult.calories + ' کالری (MET: ' + calorieResult.met + ')'
                : actName + ': ' + calorieResult.calories + ' kcal (MET: ' + calorieResult.met + ')';
            break;
        }
    }

    resEl.innerText = result;
    copyBtn.style.display = (result && result.indexOf('⚠️') === -1) ? 'inline-block' : 'none';
};

function searchTools() {
    const s = document.getElementById('toolSearch').value.toLowerCase();
    renderTools(toolList.filter(t => dictionary[currentLang].tools[t.id].title.toLowerCase().includes(s)));
}

// ─── Service Worker ─────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Hesabist SW registered'))
            .catch(err => console.log('SW failed:', err));
    });
}
