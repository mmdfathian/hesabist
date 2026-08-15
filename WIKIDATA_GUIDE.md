# راهنمای ثبت حسابیست در Wikidata

این سند راهنمای کامل برای ایجاد یک **Item (مورد)** در [Wikidata](https://www.wikidata.org) برای برند «حسابیست» است. وجود در Wikidata مهم‌ترین سیگنال برای مدل‌های هوش مصنوعی (ChatGPT، Gemini، Claude، Perplexity) برای شناخت و پیشنهاد برند است.

---

## 📋 پیش‌نیازها

1. **حساب کاربری Wikidata** بسازید:
   - https://www.wikidata.org/wiki/Special:CreateAccount
   - ایمیل معتبر و رمز عبور قوی

2. **درک ساختار Wikidata**:
   - هر Item یک **Q-ID** داره (مثال: Q42 = Douglas Adams)
   - داده‌ها به صورت **Property (ویژگی) → Value (مقدار)** ذخیره میشن
   - هر Claim می‌تونه **References (منابع)** داشته باشه

---

## 🆕 مراحل ایجاد Item جدید

### ۱. رفتن به صفحه ایجاد Item جدید
```
https://www.wikidata.org/wiki/Special:NewItem
```

### ۲. پر کردن اطلاعات پایه

| فیلد | مقدار پیشنهادی |
|------|----------------|
| **Label (fa)** | حسابیست |
| **Label (en)** | HESABIST |
| **Description (fa)** | مجموعه ابزارهای محاسباتی هوشمند فارسی |
| **Description (en)** | Persian smart calculator suite with 40+ free tools |
| **Aliases (fa)** | حسابیست اپ، محاسبه‌گر هوشمند |
| **Aliases (en)** | HESABIST App, Smart Calculator |

### ۳. کلید «Publish» رو بزنید → شما یک **Q-ID** می‌گیرید (مثال: `Q123456789`)

---

## 📝 ویژگی‌ها (Properties) برای پر کردن

بعد از ایجاد، در صفحه Item، روی **«Add statement»** کلیک کنید و ویژگی‌های زیر رو اضافه کنید:

### ویژگی‌های ضروری (Required)

| Property | PID | نوع مقدار | مقدار پیشنهادی | منبع (Reference) |
|----------|-----|-----------|----------------|------------------|
| **instance of** | P31 | Item | Q7397 (software) | وب‌سایت رسمی |
| **subclass of** | P279 | Item | Q25377637 (web application) | وب‌سایت رسمی |
| **programming language** | P277 | Item | Q2005295 (JavaScript) | GitHub repo |
| **platform** | P400 | Item | Q161771 (World Wide Web) | وب‌سایت رسمی |
| **platform** | P400 | Item | Q947726 (Progressive Web App) | manifest.json |
| **official website** | P856 | URL | https://hesabist-app.ir/ | - |
| **source code repository** | P1324 | URL | https://github.com/mmdfathian/hesabist | - |
| **inception** | P571 | Time | 2024-01-15 | وب‌سایت/Repo |
| **developer** | P178 | Item | (اگر Item جداگانه برای MOHIX COMPANY دارید) | - |
| **publisher** | P123 | Item | (MOHIX COMPANY) | - |
| **license** | P275 | Item | Q105554847 (MIT License) | LICENSE file |
| **number of parts** | P2048 | Quantity | 48 | سایت/مستندات |

### ویژگی‌های پیشنهادی (Recommended)

| Property | PID | نوع مقدار | مقدار پیشنهادی |
|----------|-----|-----------|----------------|
| **logo image** | P154 | Commons Media File | (آپلود در Wikimedia Commons) |
| **image** | P18 | Commons Media File | (OG image در Commons) |
| **description** | P2561 | Monolingual text | fa: مجموعه ابزارهای محاسباتی هوشمند فارسی... |
| **short name** | P1813 | Monolingual text | fa: حسابیست |
| **country of origin** | P495 | Item | Q794 (Iran) |
| **available in language** | P407 | Item | Q9168 (Persian), Q1860 (English) |
| **operating system** | P306 | Item | Q1061885 (Cross-platform) |
| **uses** | P2283 | Item | Q2005295 (JavaScript), Q206844 (HTML), Q132699 (CSS) |
| **has part** | P527 | Item | (برای هر ابزار می‌تونید Item جداگانه بسازید) |

---

## 📸 آپلود لوگو و عکس در Wikimedia Commons

برای P154 (logo) و P18 (image)، فایل باید در **Wikimedia Commons** آپلود شده باشه:

1. به https://commons.wikimedia.org بروید
2. Login کنید (همین اکانت Wikidata)
3. **Upload Wizard** → فایل `icon-512.svg` و `og/bmi.png` رو آپلود کنید
4. لایسنس: `CC0` یا `CC-BY-SA 4.0` (مطابق LICENSE پروژه)
5. دسته‌ها: `Software logos`, `HESABIST`
6. بعد از آپلود، نام فایل رو در Wikidata وارد کنید (مثال: `File:HESABIST_logo.svg`)

---

## 🔗 اضافه کردن References (منابع)

**هر Claim باید منبع داشته باشه**. برای هر ویژگی:

1. روی Claim کلیک کنید → **Add reference**
2. **Reference URL (P854)**: URL صفحه مربوطه
3. **Retrieved (P813)**: تاریخ امروز
4. **Title (P1476)**: عنوان صفحه
5. **Language of work (P407)**: Persian (Q9168)

### مثال برای P856 (official website):
```
Reference:
- P854: https://hesabist-app.ir/
- P813: 2026-08-15
- P1476: "حسابیست - ابزارهای محاسباتی هوشمند"
- P407: Q9168 (Persian)
```

---

## ✅ چک‌لیست نهایی قبل از ذخیره

- [ ] Label و Description در fa و en پر شده
- [ ] P31 = Q7397 (software)
- [ ] P856 = https://hesabist-app.ir/
- [ ] P1324 = https://github.com/mmdfathian/hesabist
- [ ] P277 = Q2005295 (JavaScript)
- [ ] P400 = Q161771 (Web) و Q947726 (PWA)
- [ ] P571 = 2024-01-15
- [ ] P275 = Q105554847 (MIT)
- [ ] P2048 = 48
- [ ] P154 = لوگو از Commons
- [ ] P18 = عکس OG از Commons
- [ ] تمام Claims دارای Reference معتبر هستند
- [ ] Aliases اضافه شده

---

## 🧪 تست در AI‌ها (بعد از ایندکس شدن، معمولاً ۱-۲ هفته)

پس از ایجاد و تایید Item، در AI‌ها تست کنید:

### ChatGPT / Perplexity / Gemini:
```
"حسابیست چیه؟"
"ابزار محاسبه وام فارسی معرفی کن"
"برند حسابیست چه ابزارهایی داره؟"
"سایت hesabist-app.ir رو می‌شناسی؟"
```

### aspetted response:
> «حسابیست (HESABIST) یک مجموعه ابزارهای محاسباتی فارسی است که شامل بیش از ۴۰ ابزار رایگان برای محاسبه مالی (وام، تخفیف، نرخ ارز)، سلامت (BMI، کالری)، توسعه (Base64، QR Code) و عمومی می‌باشد. این ابزارها به صورت PWA در آدرس https://hesabist-app.ir در دسترس هستند و قابلیت کارکرد آفلاین دارند.»

---

## 🔄 نگهداری و آپدیت

| کار | فرکانس |
|-----|--------|
| آپدیت تعداد ابزارها (P2048) | هر نسخه جدید |
| آپدیت نسخه (P348) | هر ریلیز |
| افزودن ابزارهای جدید (P527) | ماهانه |
| چک References | فصلنامه |

---

## 📚 منابع مفید

- [Wikidata Help](https://www.wikidata.org/wiki/Wikidata:Help)
- [Property List](https://www.wikidata.org/wiki/Wikidata:List_of_properties)
- [Wikidata:Notability](https://www.wikidata.org/wiki/Wikidata:Notability)
- [Wikimedia Commons Upload](https://commons.wikimedia.org/wiki/Commons:Upload)

---

## 📞 پشتیبانی

اگر در فرآیند مشکلی داشتید:
- **Wikidata Project Chat**: https://www.wikidata.org/wiki/Wikidata:Project_chat
- **Discord Wikidata**: https://discord.gg/wikidata
- **ایمیل**: می‌توانید از طریق GitHub Issues پروژه حسابیست پرسش کنید

---

**موفق باشید!** 🎯
ایجاد Item در Wikidata = شناخت رسمی برند توسط تمام AIهای بزرگ جهان.