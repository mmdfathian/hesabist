let currentLang = 'fa';
let currentToolId = '';

const dictionary = {
    fa: {
        title: "حسابیست", sub: "HESABIST", badge: "MOHIX SMART ENGINE",
        search: "جستجو میان ابزارها...", calc: "محاسبه نهایی", back: "← بازگشت",
        cats: { all: "همه", math: "ریاضی", finance: "مالی", health: "سلامت", general: "عمومی" },
        tools: {
            math: { title: "درصدگیری", p1: "عدد اصلی", p2: "درصد" },
            vat: { title: "مالیات ۹٪", p1: "مبلغ (تومان)" },
            bmi: { title: "شاخص BMI", p1: "وزن (کیلو)", p2: "قد (سانت)" },
            loan: { title: "اقساط وام", p1: "مبلغ وام", p2: "سود (%)", p3: "تعداد ماه" },
            discount: { title: "تخفیف", p1: "قیمت کل", p2: "درصد تخفیف" },
            age: { title: "محاسبه سن", p1: "سال تولد" },
            water: { title: "نیاز به آب", p1: "وزن (کیلو)" },
            pass: { title: "پسورد ساز", p1: "تعداد کاراکتر" },
            unit: { title: "سانت به اینچ", p1: "سانتی‌متر" },
            circle: { title: "مساحت دایره", p1: "شعاع" },
            temp: { title: "دما (C به F)", p1: "درجه سانتی‌گراد" },
            ideals: { title: "وزن ایده‌آل", p1: "قد (سانت)" },
            square: { title: "توان دوم", p1: "عدد" },
            profit: { title: "سود بانکی", p1: "سرمایه", p2: "سود سالانه (%)" }
        }
    },
    en: {
        title: "HESABIST", sub: "حسابیست", badge: "MOHIX SMART ENGINE",
        search: "Search tools...", calc: "Calculate", back: "← Back",
        cats: { all: "All", math: "Math", finance: "Finance", health: "Health", general: "General" },
        tools: {
            math: { title: "Percentage", p1: "Value", p2: "Percent" },
            vat: { title: "VAT 9%", p1: "Amount" },
            bmi: { title: "BMI Index", p1: "Weight", p2: "Height" },
            loan: { title: "Loan Calc", p1: "Principal", p2: "Interest", p3: "Months" },
            discount: { title: "Discount", p1: "Price", p2: "Percent" },
            age: { title: "Age Calc", p1: "Birth Year" },
            water: { title: "Water Needs", p1: "Weight" },
            pass: { title: "Pass Gen", p1: "Length" },
            unit: { title: "CM to Inch", p1: "CM" },
            circle: { title: "Circle Area", p1: "Radius" },
            temp: { title: "Celsius to F", p1: "Celsius" },
            ideals: { title: "Ideal Weight", p1: "Height" },
            square: { title: "Square (x²)", p1: "Number" },
            profit: { title: "Bank Profit", p1: "Deposit", p2: "APY (%)" }
        }
    }
};

const toolList = [
    { id: 'math', icon: '٪', cat: 'math' }, { id: 'vat', icon: '💰', cat: 'finance' },
    { id: 'bmi', icon: '⚖️', cat: 'health' }, { id: 'loan', icon: '🏦', cat: 'finance' },
    { id: 'discount', icon: '🏷️', cat: 'finance' }, { id: 'age', icon: '📅', cat: 'general' },
    { id: 'water', icon: '💧', cat: 'health' }, { id: 'pass', icon: '🔑', cat: 'general' },
    { id: 'unit', icon: '📏', cat: 'general' }, { id: 'circle', icon: '⭕', cat: 'math' },
    { id: 'temp', icon: '🌡️', cat: 'general' }, { id: 'ideals', icon: '🚶', cat: 'health' },
    { id: 'square', icon: '🔢', cat: 'math' }, { id: 'profit', icon: '📈', cat: 'finance' }
];

window.onload = () => {
    const isDark = localStorage.getItem('hesabist_dark') === 'true';
    if(isDark) document.body.classList.add('dark-mode');
    const theme = localStorage.getItem('hesabist_theme') || 'blue';
    applyTheme(theme);
    updateUI();
    setInterval(tickClock, 1000);
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const wrapper = document.getElementById('app-wrapper');
        splash.style.transition = 'opacity 0.6s ease';
        splash.style.opacity = '0';
        wrapper.style.display = 'block';
        setTimeout(() => {
            wrapper.style.opacity = '1';
            splash.style.display = 'none';
        }, 50);
    }, 2200);
};

function tickClock() {
    const now = new Date();
    const isFa = currentLang === 'fa';
    document.getElementById('txt-clock').innerText = now.toLocaleTimeString(isFa ? 'fa-IR' : 'en-US');
    document.getElementById('txt-date').innerText = now.toLocaleDateString(isFa ? 'fa-IR' : 'en-US', { day: 'numeric', month: 'long' });
}

function updateUI() {
    const lang = dictionary[currentLang];
    document.querySelector('.brand-info h1').innerText = lang.title;
    document.querySelector('.brand-info span').innerText = lang.sub;
    document.querySelector('.engine-label').innerText = lang.badge;
    document.getElementById('toolSearch').placeholder = lang.search;
    document.getElementById('lang-btn').innerText = currentLang === 'fa' ? 'English' : 'فارسی';
    const tabs = document.getElementById('tabs-container');
    tabs.innerHTML = Object.keys(lang.cats).map(c => `<button class="tab-btn" onclick="filterByCategory('${c}', this)">${lang.cats[c]}</button>`).join('');
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

function openTool(id) {
    currentToolId = id;
    const toolData = dictionary[currentLang].tools[id];
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('tool-view').style.display = 'block';
    document.getElementById('tool-title').innerText = toolData.title;
    document.getElementById('res-val').innerText = '';
    const i1 = document.getElementById('inp1'), i2 = document.getElementById('inp2'), i3 = document.getElementById('inp3');
    i1.value = ''; i2.value = ''; i3.value = '';
    i1.placeholder = toolData.p1;
    i2.style.display = toolData.p2 ? 'block' : 'none';
    i3.style.display = toolData.p3 ? 'block' : 'none';
    if(toolData.p2) i2.placeholder = toolData.p2;
    if(toolData.p3) i3.placeholder = toolData.p3;
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('tool-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
}

function changeLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    updateUI();
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

document.getElementById('btn-calc').onclick = () => {
    const v1 = parseFloat(document.getElementById('inp1').value);
    const v2 = parseFloat(document.getElementById('inp2').value);
    const v3 = parseFloat(document.getElementById('inp3').value);
    let result = "";
    if(isNaN(v1)) return;

    switch(currentToolId) {
        case 'math': result = (v1 * v2 / 100).toLocaleString(); break;
        case 'vat': result = (v1 * 0.09).toLocaleString(); break;
        case 'bmi': result = (v1 / ((v2/100)**2)).toFixed(1); break;
        case 'loan': result = Math.round((v1 + (v1*v2*(v3+1)/2400))/v3).toLocaleString(); break;
        case 'discount': result = (v1 - (v1*v2/100)).toLocaleString(); break;
        case 'age': result = (currentLang === 'fa' ? 1405 - v1 : 2026 - v1); break;
        case 'water': result = (v1 * 0.033).toFixed(1) + " L"; break;
        case 'pass': result = Math.random().toString(36).slice(-8); break;
        case 'unit': result = (v1 / 2.54).toFixed(2); break;
        case 'circle': result = (Math.PI * v1**2).toFixed(1); break;
        case 'temp': result = (v1 * 1.8 + 32).toFixed(1) + " °F"; break;
        case 'ideals': result = ((v1 - 100) - ((v1-150)/4)).toFixed(1); break;
        case 'square': result = (v1 * v1).toLocaleString(); break;
        case 'profit': result = Math.round((v1 * v2/100) / 12).toLocaleString(); break;
    }
    document.getElementById('res-val').innerText = result;
};

function searchTools() {
    const s = document.getElementById('toolSearch').value.toLowerCase();
    renderTools(toolList.filter(t => dictionary[currentLang].tools[t.id].title.toLowerCase().includes(s)));
}
// ثبت سرویس ورکر در انتهای فایل script.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Hesabist SW Registered!'))
            .catch(err => console.log('SW Registration Failed:', err));
    });
                            }
