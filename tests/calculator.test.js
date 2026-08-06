/**
 * تست‌های حسابیست | Hesabist Tests
 */

// توابع تست شده از script.js
function calcLoan(principal, annualRate, months) {
    if (principal <= 0 || annualRate < 0 || months <= 0) {
        return { error: 'مقادیر نامعتبر' };
    }
    if (annualRate === 0) return Math.round(principal / months);
    const r = annualRate / 100 / 12;
    return Math.round(principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1));
}

function generatePassword(length) {
    const len = Math.min(Math.max(parseInt(length) || 12, 8), 32);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr, b => chars[b % chars.length]).join('');
}

function calcBMI(weight, height) {
    if (weight <= 0 || height <= 0) return { error: 'مقادیر نامعتبر' };
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    let category = '';
    if (bmi < 18.5) category = 'کمبود وزن';
    else if (bmi < 25) category = 'نرمال';
    else if (bmi < 30) category = 'اضافه وزن';
    else category = 'چاق';
    return { bmi: Math.round(bmi * 10) / 10, category };
}

function calcDiscount(price, discountPercent) {
    if (price <= 0 || discountPercent < 0 || discountPercent > 100) {
        return { error: 'مقادیر نامعتبر' };
    }
    const discount = price * discountPercent / 100;
    const finalPrice = price - discount;
    return { discount: Math.round(discount), finalPrice: Math.round(finalPrice) };
}

function calcAge(birthYear) {
    const currentYear = parseInt(new Date().toLocaleDateString('fa-IR-u-ca-persian', { year: 'numeric' }).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
    if (birthYear <= 0 || birthYear > currentYear) return { error: 'سال تولد نامعتبر' };
    return { age: currentYear - birthYear };
}

function calcDollar(amount, rate) {
    if (amount <= 0 || rate <= 0) return { error: 'مقادیر نامعتبر' };
    const dollar = amount / rate;
    return { 
        dollar: Math.round(dollar * 100) / 100,
        formatted: dollar.toFixed(2) + ' $'
    };
}

function calcCurrency(amount, fromRate, toRate) {
    if (amount <= 0 || fromRate <= 0 || toRate <= 0) return { error: 'مقادیر نامعتبر' };
    const result = (amount / fromRate) * toRate;
    return { 
        result: Math.round(result * 100) / 100,
        formatted: result.toFixed(2)
    };
}

function calcCalorie(weight, duration, activityType) {
    if (weight <= 0 || duration <= 0) return { error: 'مقادیر نامعتبر' };
    const metValues = {
        'walking': 3.5, 'running': 8.0, 'cycling': 6.0,
        'swimming': 7.0, 'yoga': 2.5, 'gym': 5.0, 'default': 4.0
    };
    const met = metValues[activityType] || metValues['default'];
    const calories = (met * weight * duration) / 60;
    return { calories: Math.round(calories), met: met };
}

// ===== تست‌ها =====
const tests = [];
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        tests.push({ name, status: 'PASS' });
        passed++;
        console.log(`✅ ${name}`);
    } catch (e) {
        tests.push({ name, status: 'FAIL', error: e.message });
        failed++;
        console.log(`❌ ${name}: ${e.message}`);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`);
        },
        toBeGreaterThan(expected) {
            if (actual <= expected) throw new Error(`Expected > ${expected}, got ${actual}`);
        },
        toBeLessThan(expected) {
            if (actual >= expected) throw new Error(`Expected < ${expected}, got ${actual}`);
        },
        toEqual(expected) {
            if (JSON.stringify(actual) !== JSON.stringify(expected)) {
                throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
            }
        },
        toHaveProperty(prop) {
            if (!(prop in actual)) throw new Error(`Expected object to have property '${prop}'`);
        }
    };
}

// ===== تست‌های calcLoan =====
test('calcLoan: محاسبه وام با سود', () => {
    const result = calcLoan(1000000, 12, 12);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThan(0);
});

test('calcLoan: وام بدون سود', () => {
    const result = calcLoan(1200000, 0, 12);
    expect(result).toBe(100000);
});

test('calcLoan: مقادیر نامعتبر (منفی)', () => {
    const result = calcLoan(-1000000, 12, 12);
    expect(result).toHaveProperty('error');
});

test('calcLoan: مقادیر نامعتبر (صفر)', () => {
    const result = calcLoan(0, 12, 12);
    expect(result).toHaveProperty('error');
});

// ===== تست‌های calcBMI =====
test('calcBMI: وزن نرمال', () => {
    const result = calcBMI(70, 175);
    expect(result.bmi).toBe(22.9);
    expect(result.category).toBe('نرمال');
});

test('calcBMI: کمبود وزن', () => {
    const result = calcBMI(50, 175);
    expect(result.bmi).toBe(16.3);
    expect(result.category).toBe('کمبود وزن');
});

test('calcBMI: اضافه وزن', () => {
    const result = calcBMI(90, 175);
    expect(result.bmi).toBe(29.4);
    expect(result.category).toBe('اضافه وزن');
});

test('calcBMI: چاق', () => {
    const result = calcBMI(120, 175);
    expect(result.bmi).toBe(39.2);
    expect(result.category).toBe('چاق');
});

test('calcBMI: مقادیر نامعتبر', () => {
    const result = calcBMI(0, 175);
    expect(result).toHaveProperty('error');
});

// ===== تست‌های calcDiscount =====
test('calcDiscount: تخفیف ۱۰٪', () => {
    const result = calcDiscount(100000, 10);
    expect(result.discount).toBe(10000);
    expect(result.finalPrice).toBe(90000);
});

test('calcDiscount: تخفیف ۵۰٪', () => {
    const result = calcDiscount(200000, 50);
    expect(result.discount).toBe(100000);
    expect(result.finalPrice).toBe(100000);
});

test('calcDiscount: مقادیر نامعتبر', () => {
    const result = calcDiscount(100000, 150);
    expect(result).toHaveProperty('error');
});

// ===== تست‌های calcAge =====
test('calcAge: محاسبه سن', () => {
    const result = calcAge(1390);
    expect(result).toHaveProperty('age');
    expect(result.age).toBeGreaterThan(0);
});

test('calcAge: سال تولد نامعتبر', () => {
    const result = calcAge(0);
    expect(result).toHaveProperty('error');
});

// ===== تست‌های generatePassword =====
test('generatePassword: طول پیش‌فرض', () => {
    const pass = generatePassword();
    expect(pass.length).toBe(12);
});

test('generatePassword: طول سفارشی', () => {
    const pass = generatePassword(20);
    expect(pass.length).toBe(20);
});

test('generatePassword: حداقل طول', () => {
    const pass = generatePassword(5);
    expect(pass.length).toBe(8);
});

test('generatePassword: حداکثر طول', () => {
    const pass = generatePassword(100);
    expect(pass.length).toBe(32);
});

// ===== تست‌های calcDollar =====
test('calcDollar: تبدیل تومان به دلار', () => {
    const result = calcDollar(500000, 50000);
    expect(result.dollar).toBe(10);
    expect(result.formatted).toBe('10.00 $');
});

test('calcDollar: مقادیر نامعتبر', () => {
    const result = calcDollar(0, 50000);
    expect(result).toHaveProperty('error');
});

// ===== تست‌های calcCurrency =====
test('calcCurrency: تبدیل ارز', () => {
    const result = calcCurrency(100, 1, 50000);
    expect(result.result).toBe(5000000);
});

test('calcCurrency: مقادیر نامعتبر', () => {
    const result = calcCurrency(0, 1, 50000);
    expect(result).toHaveProperty('error');
});

// ===== تست‌های calcCalorie =====
test('calcCalorie: دویدن', () => {
    const result = calcCalorie(70, 30, 'running');
    expect(result.calories).toBe(280);
    expect(result.met).toBe(8.0);
});

test('calcCalorie: پیاده‌روی', () => {
    const result = calcCalorie(70, 30, 'walking');
    expect(result.calories).toBe(123);
    expect(result.met).toBe(3.5);
});

test('calcCalorie: مقادیر نامعتبر', () => {
    const result = calcCalorie(0, 30, 'running');
    expect(result).toHaveProperty('error');
});

// ===== نتیجه =====
console.log('\n📊 نتیجه تست‌ها:');
console.log(`✅ موفق: ${passed}`);
console.log(`❌ ناموفق: ${failed}`);
console.log(`📈 درصد موفقیت: ${Math.round(passed / (passed + failed) * 100)}%`);
