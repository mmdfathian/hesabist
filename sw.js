// نسخه cache — هر بار آپدیت کنید (v4.3)
const CACHE_VERSION = 'hesabist-v4.3';
const CACHE_NAME = CACHE_VERSION;

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './icon-192.svg',
    './icon-512.svg'
];

// SEO pages to cache
const SEO_PAGES = [
    './bmi.html', './loan.html', './discount.html', './base64.html', './qrGen.html',
    './math.html', './vat.html', './age.html', './water.html', './pass.html',
    './unit.html', './circle.html', './temp.html', './ideals.html', './square.html',
    './profit.html', './dollar.html', './currency.html', './calorie.html', './textAnalyzer.html',
    './diffChecker.html', './codeBeautifier.html', './codeMinifier.html', './jsonFormatter.html', './regexTester.html',
    './listSorter.html', './timestampConv.html', './charConverter.html', './notepad.html', './cssGen.html',
    './robotsGen.html', './seoGen.html', './utmBuilder.html', './ogPreview.html', './bulkUrl.html',
    './eidi.html', './priceCalc.html', './realstate.html', './counter.html', './checklist.html',
    './calendarTool.html', './dateConv.html', './breathing.html', './worldClock.html', './unitConv.html',
    './myIp.html', './colorPick.html', './imgConvert.html', './textOnImg.html'
];

// Add SEO pages to cache list
SEO_PAGES.forEach(page => ASSETS_TO_CACHE.push(page));

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// استراتژی: Network First → Cache fallback
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
