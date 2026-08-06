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
            profit:   { title: "سود بانکی",   p1: "سرمایه (تومان)", p2: "سود سالانه (%)", desc: "محاسبه آنلاین سود سپرده بانکی ماهانه و سالانه." }
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
            profit:   { title: "Bank Profit",   p1: "Deposit",    p2: "APY (%)" }
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
    { id: 'profit',   icon: '📈', cat: 'finance'  }
];

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
    if (toolData.p3) i3.placeholder = toolData.p3;

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
    }

    resEl.innerText = result;
    copyBtn.style.display = result.startsWith('⚠️') ? 'none' : 'inline-block';
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
