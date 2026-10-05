document.addEventListener("DOMContentLoaded", async () => {
    /* =========================
       الإعدادات
    ========================= */

    const WHATSAPP_NUMBER = "201017570005";

    /* =========================
       SUPABASE
    ========================= */

    const SUPABASE_URL = "https://ezaqxgmyxmnjsrdtvbai.supabase.co";
    const SUPABASE_ANON_KEY =
        "sb_publishable_rf0MyawzWzRW8dHOtbgSDg_qQqPGoO9";

    const supabaseClient =
        window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY
            ? window.supabase.createClient(
                  SUPABASE_URL,
                  SUPABASE_ANON_KEY
              )
            : null;

    /* =========================
       بيانات القائمة
    ========================= */

    const categories = [
        {
            id: "tuyoor",
            name: "الطيور",
            icon: "fa-solid fa-drumstick-bite",
            items: [
                { id: "t1", name: "فراخ محشية", description: "فرخة كاملة محشية", price: 440 },
                { id: "t2", name: "فراخ مشوية بالشواية", description: "فرخة كاملة مشوية بالشواية", price: 380 },
                { id: "t3", name: "فراخ مشوية مخلية على الفحم", description: "فرخة مخلية من العظم مشوية على الفحم", price: 420 },
                { id: "t4", name: "حمام محشى", description: "حمامة محشية أرز", price: 205 },
                { id: "t5", name: "حمام مشوى", description: "حمامة مشوية", price: 190 },
                { id: "t6", name: "بط محمر بالفرن", description: "بطة كاملة محمرة بالفرن", price: 1049 },
                { id: "t7", name: "كيلو شيش طاووك", description: "شيش طاووق نيء بالكيلو للطهي في المنزل", price: 740 },
                { id: "t8", name: "كيلو فراخ بانية", description: "فراخ بانيه نيئة بالكيلو", price: 730 },
            ],
        },
       {
    id: "mahashi",
    name: "المحاشي",
    icon: "fa-solid fa-seedling",
    note: "اختر السعر المناسب لحجم الطبق (١٠٠ / ٢٠٠ / ٣٠٠ جنيه)، أو تواصل معنا لأي طلب مختلف.",
    items: [
        { id: "mh1", name: "ورق عنب", description: "محشي ورق عنب تقليدي", priceOptions: [100, 200, 300] },
        { id: "mh2", name: "كوسة محشية", description: "", priceOptions: [100, 200, 300] },
        { id: "mh3", name: "خرشوف محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh4", name: "باذنجان عجمي محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh5", name: "بطاطس تركة محشية", description: "", priceOptions: [100, 200, 300] },
        { id: "mh6", name: "فلفل رومي محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh7", name: "جلاش محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh8", name: "كانيلوني محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh9", name: "رقاق محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh10", name: "ممبار محشي", description: "", priceOptions: [100, 200, 300] },
        { id: "mh11", name: "طاجن ورق عنب بالكوارع", description: "", price: 400 },
        { id: "mh12", name: "كبيبة", description: "السعر بالقطعة", price: 18 },
        { id: "mh13", name: "سمبوسك", description: "السعر بالقطعة", price: 18 },
    ],
},
        {
            id: "tawajen",
            name: "الطواجن",
            icon: "fa-solid fa-kitchen-set",
            items: [
                { id: "tj1", name: "طاجن ملوخية سادة", description: "", price: 60 },
                { id: "tj2", name: "طاجن مكرونة بالبشاميل", description: "", price: 70 },
                { id: "tj3", name: "طاجن أرز معمر سادة", description: "", price: 70 },
                { id: "tj4", name: "طاجن لسان عصفور باللحم البتلو", description: "", price: 240 },
                { id: "tj5", name: "طاجن خضار باللحمة", description: "", price: 240 },
                { id: "tj6", name: "طبق أرز بالخلطة والمكسرات", description: "", price: 60 },
                { id: "tj7", name: "طبق أرز بسمتي", description: "", price: 50 },
            ],
        },
        {
            id: "makarona",
            name: "المكرونة",
            icon: "fa-solid fa-bowl-rice",
            items: [
                { id: "mk1", name: "مكرونة اسباجتي سي فود", description: "", price: 285 },
                { id: "mk2", name: "مكرونة اسباجتي باللحمة المفرومة", description: "", price: 90 },
                { id: "mk3", name: "مكرونة اسباجتي بالكبدة", description: "", price: 125 },
                { id: "mk4", name: "مكرونة اسباجتي بالسجق", description: "", price: 125 },
            ],
        },
        {
            id: "salatat",
            name: "السلطات",
            icon: "fa-solid fa-carrot",
            note: "أي نوع سلطة بسعر ٢٠ جنيه للعلبة.",
            items: [
                { id: "sl1", name: "سلطة خضراء", description: "", price: 20 },
                { id: "sl2", name: "سلطة طحينة", description: "", price: 20 },
                { id: "sl3", name: "سلطة تومية", description: "", price: 20 },
                { id: "sl4", name: "سلطة بابا غنوج", description: "", price: 20 },
                { id: "sl5", name: "سلطة بطاطس", description: "", price: 20 },
            ],
        },
        {
            id: "muqabbilat",
            name: "المقبلات",
            icon: "fa-solid fa-utensils",
            items: [
                { id: "mq1", name: "بطاطس محمرة (L)", description: "", price: 45 },
                { id: "mq2", name: "بطاطس محمرة (XL)", description: "", price: 65 },
                { id: "mq3", name: "تشيز فرايز (L)", description: "", price: 45 },
                { id: "mq4", name: "تشيز فرايز (XL)", description: "", price: 65 },
            ],
        },
        {
            id: "mashroubat",
            name: "مشروبات غازية",
            icon: "fa-solid fa-mug-hot",
            items: [
                { id: "dr1", name: "كانز", description: "", price: 25 },
                { id: "dr2", name: "بريل", description: "", price: 40 },
                { id: "dr3", name: "عصير ليمون فريش", description: "", price: 55 },
                { id: "dr4", name: "مياه صغيرة", description: "", price: 18 },
            ],
        },
        {
            id: "atbaq-tuyoor",
            name: "أطباق طيور",
            icon: "fa-solid fa-plate-wheat",
            items: [
                { id: "at1", name: "طبق بط", description: "١/٢ بطة بلدي مع أرز محمر بالخلطة", price: 490 },
                { id: "at2", name: "طبق مكس حمام وبط", description: " ١/٤ بطة محمرة،  حمام محشي، أرز برياني ", price: 460 },
                { id: "at3", name: "طبق حمام محشى", description: "٢ حمام محشي مع ورق عنب", price: 420 },
                { id: "at4", name: "طبق فراخ بانيه", description: "صدور فراخ بانيه مع خضار سوتيه وأرز أبيض", price: 330 },
                { id: "at5", name: "طبق فراخ مشوى على الفحم", description: "١/٢ فراخ مشوى على الفحم، خضار مشوي، بطاطس محمرة", price: 265 },
                { id: "at6", name: "طبق فراخ محشية", description: "١/٢ فراخ محشي أرز بالخلطة والكبدة، خضار مشوي، بطاطس محمرة", price: 265 },
                { id: "at7", name: "طبق شيش طاووق", description: "شيش طاووق، أرز أبيض، بطاطس محمرة", price: 295 },
            ],
        },
        {
            id: "atbaq-lohoom",
            name: "أطباق اللحوم",
            icon: "fa-solid fa-drumstick-bite",
            items: [
                { id: "al1", name: "طبق الصفواني", description: "قطع كباب مع الكفتة وفراخ مشوية على الفحم وورق عنب، بطاطس محمرة", price: 390 },
                { id: "al2", name: "طبق مشويات مشكلة", description: "كفته شامي + انتركوت + شيش طاووق، بطاطس محمرة", price: 430 },
                { id: "al3", name: "طبق كوارع", description: "قطع كوارع مع فتة بالخل والثوم وشوربة الكوارع", price: 430 },
                { id: "al4", name: "طبق سكالوب بانيه", description: "مكرونة سباجيتي مع خضار سوتيه أو بطاطس محمرة", price: 340 },
                { id: "al5", name: "ورقة لحمة بالخضار في الفرن", description: "", price: 360 },
            ],
        },
        {
            id: "mashawi",
            name: "المشويات",
            icon: "fa-solid fa-fire",
            note: "الأسعار بالكيلو.",
            items: [
                { id: "ms1", name: "ميكس جريل", description: "السعر بالكيلو", price: 1040 },
                { id: "ms2", name: "كباب وكفته", description: "السعر بالكيلو", price: 1080 },
                { id: "ms3", name: "انتركوت شمبري", description: "السعر بالكيلو", price: 1180 },
                { id: "ms4", name: "كفته", description: "السعر بالكيلو", price: 940 },
                { id: "ms5", name: "كفته شامي", description: "السعر بالكيلو", price: 980 },
                { id: "ms6", name: "سجق مخصوص مشوي", description: "السعر بالكيلو", price: 890 },
            ],
        },
        {
            id: "shorba",
            name: "الشوربة",
            icon: "fa-solid fa-bowl-food",
            items: [
                { id: "sh1", name: "شوربة لسان عصفور", description: "", price: 35 },
                { id: "sh2", name: "شوربة حمام", description: "", price: 70 },
                { id: "sh3", name: "شوربة طماطم", description: "", price: 40 },
                { id: "sh4", name: "شوربة كريمة بالفراخ", description: "", price: 55 },
                { id: "sh5", name: "شوربة كوارع", description: "", price: 170 },
            ],
        },
        {
            id: "sawani",
            name: "صواني الصفواني",
            icon: "fa-solid fa-fire-burner",
            note: "عروض صواني بأسعار مخفضة لتجمعات العيلة والمناسبات.",
            items: [
                {
                    id: "sw1",
                    name: "صينية 4×4",
                    description: "ربع كفتة + ربع سجق + ربع انتركوت + ربع شيش طاووق + ربع ممبار + أرز بسمتي + محاشي مشكلة + 6 علب سلطة + 6 عيش (بدلًا من 1420 ج)",
                    price: 1320,
                },
                {
                    id: "sw2",
                    name: "صينية ربعين ونص",
                    description: "نص فراخ مخلية مشوية على الفحم + ربع كفتة + ربع سجق + محاشي مشكلة + أرضية أرز بسمتي + 5 علب سلطة + 6 عيش (بدلًا من 990 ج)",
                    price: 845,
                },
                {
                    id: "sw3",
                    name: "صينية كله ع الفحم",
                    description: "فراخة مخلية مشوية على الفحم + ربع كفتة + ربع سجق + محاشي مشكلة + أرضية أرز بسمتي + 8 علب سلطة + 8 عيش (بدلًا من 1210 ج)",
                    price: 1090,
                },
                {
                    id: "sw4",
                    name: "صينية ميكس مشاوي وحمام",
                    description: "2 حمام محشي أرز + ربع كفتة + ربع سجق + ربع انتركوت + محاشي مشكلة + أرضية أرز بسمتي + 8 علب سلطة + 8 عيش (بدلًا من 1840 ج)",
                    price: 1645,
                },
                {
                    id: "sw5",
                    name: "صينية لمة العيلة",
                    description: "ربع كفتة + ربع سجق + ربع انتركوت + ربع شيش طاووق بتتبيلة الصفواني + محاشي مشكلة + أرضية أرز بسمتي + 8 علب سلطة + 10 عيش (بدلًا من 2090 ج)",
                    price: 1645,
                },
            ],
        },
    ];

    /* =========================
       التقييمات الافتراضية
    ========================= */

    const seedReviews = [
        { name: "خالد المطيري", rating: 5, text: "أفضل مندي جربته منذ زمن، والخدمة سريعة جدًا.", date: "2026-06-02" },
        { name: "سارة العتيبي", rating: 4, text: "الأجواء رائعة والطعم ممتاز، سعر المشاوي المشكلة مناسب.", date: "2026-07-14" },
        { name: "محمد الحربي", rating: 5, text: "الكنافة رهيبة! أنصح الجميع بتجربتها.", date: "2026-08-20" },
    ];

    /* =========================
       Local Storage
    ========================= */

    function storeGet(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            console.error("LocalStorage read error:", error);
            return fallback;
        }
    }

    function storeSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("LocalStorage write error:", error);
        }
    }

    /* =========================
       أدوات مساعدة
    ========================= */

    function findMenuItem(id) {
        for (const category of categories) {
            const item = category.items.find((item) => item.id === id);
            if (item) return item;
        }
        return null;
    }

    function starString(rating) {
        const rounded = Math.round(Number(rating) || 0);
        return "★★★★★"
            .split("")
            .map((star, index) => (index < rounded ? "★" : "☆"))
            .join("");
    }

    function formatDate(date) {
        const d = new Date(date);
        if (Number.isNaN(d.getTime())) return "";
        return d.toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* =========================
       INTRO
    ========================= */

    const introScreen = document.getElementById("introScreen");
    const introVideo = document.getElementById("introVideo");

    function hideIntro() {
        if (!introScreen) return;
        introScreen.classList.add("hide-intro");
        setTimeout(() => {
            introScreen.style.display = "none";
        }, 1000);
    }

    window.hideIntro = hideIntro;

    if (introScreen) {
        introScreen.addEventListener("click", (e) => {
            if (e.target.closest(".skip-intro-btn")) return;
            hideIntro();
        });
    }

    if (introVideo) {
        introVideo.addEventListener("ended", hideIntro);
        introVideo.addEventListener("error", hideIntro);

        // شبكة أمان: لو الفيديو غير موجود أو لم يبدأ تشغيله خلال 4 ثوانٍ، لا نحجب الموقع
        setTimeout(() => {
            if (introScreen && !introScreen.classList.contains("hide-intro") && introVideo.readyState === 0) {
                hideIntro();
            }
        }, 4000);
    } else {
        hideIntro();
    }

    /* =========================
       عناصر DOM الأساسية
    ========================= */

    const menuPopup = document.getElementById("menuPopup");
    const categoryItemsContainer = document.getElementById("menuItems");
    const categoryTitle = document.getElementById("menuTitle");

    /* =========================
       دوال عرض الفئات والعناصر
    ========================= */

    function renderCategories() {
        const container = document.getElementById("categoriesContainer");
        if (!container) return;

        container.innerHTML = categories.map(category => `
            <div class="category-card" data-open-category="${category.id}">
                <i class="${category.icon}"></i>
                <h3>${category.name}</h3>
            </div>
        `).join("");
    }

    function renderCategoryItems(category) {
    if (!categoryItemsContainer || !categoryTitle) return;

    categoryTitle.textContent = category.name;

    let html = "";

    if (category.note) {
        html += `
            <div class="category-note">
                <i class="fa-solid fa-info-circle"></i>
                <p>${escapeHTML(category.note)}</p>
            </div>
        `;
    }

    html += category.items.map(item => {
        let actionHTML = "";

        // منتج له أكثر من سعر
        if (Array.isArray(item.priceOptions) && item.priceOptions.length > 0) {
            actionHTML = `
                <div class="variable-price-actions">
                    <select
                        id="price-select-${escapeHTML(item.id)}"
                        class="price-select"
                        aria-label="اختر السعر"
                    >
                        ${item.priceOptions.map(price => `
                            <option value="${Number(price)}">
                                ${Number(price)} ج.م
                            </option>
                        `).join("")}
                    </select>

                    <button
                        type="button"
                        class="add-to-cart-btn"
                        data-add-variable="${escapeHTML(item.id)}"
                    >
                        <i class="fa-solid fa-plus"></i>
                        إضافة
                    </button>
                </div>
            `;
        }

        // منتج بدون سعر
        else if (item.price === null || item.price === undefined) {
            actionHTML = `
                <div class="price-on-request">
                    السعر حسب الطلب
                </div>

                <button
                    type="button"
                    class="add-to-cart-btn disabled"
                    disabled
                >
                    <i class="fa-solid fa-phone"></i>
                    اتصل بنا
                </button>
            `;
        }

        // منتج بسعر ثابت
        else {
            actionHTML = `
                <div class="fixed-price">
                    <strong>${Number(item.price)} ج.م</strong>
                </div>

                <button
                    type="button"
                    class="add-to-cart-btn"
                    data-add-item="${escapeHTML(item.id)}"
                >
                    <i class="fa-solid fa-plus"></i>
                    إضافة
                </button>
            `;
        }

        return `
            <div class="menu-item">
                <div class="menu-item-info">
                    <h4>${escapeHTML(item.name)}</h4>

                    ${
                        item.description
                            ? `<p>${escapeHTML(item.description)}</p>`
                            : ""
                    }
                </div>

                <div class="menu-item-action">
                    ${actionHTML}
                </div>
            </div>
        `;
    }).join("");

    categoryItemsContainer.innerHTML = html;

    if (menuPopup) {
        menuPopup.classList.add("active");
        document.body.classList.add("popup-open");
    }
}


    function openCategory(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        if (!category) return;
        renderCategoryItems(category);
    }

    function closePopup(popup) {
        if (popup) {
            popup.classList.remove("active");
            document.body.classList.remove("popup-open");
        }
    }

    /* =========================
       السلة
    ========================= */

    let cart = storeGet("safawani_cart", {});

    const cartButton = document.getElementById("cartButton");
    const cartCountEl = document.getElementById("cartCount");
    const cartPopup = document.getElementById("cartPopup");
    const cartItemsEl = document.getElementById("cartItems");
    const cartTotalEl = document.getElementById("cartTotal");

    const checkoutOrderBtn = document.getElementById("checkoutOrderBtn");
    const customerNameEl = document.getElementById("customerName");
    const customerPhoneEl = document.getElementById("customerPhone");
    const deliveryAddressEl = document.getElementById("deliveryAddress");
    const orderMessageEl = document.getElementById("orderMessage");

    const savedOrderDetails = storeGet("safawani_order_details", null);

    if (savedOrderDetails) {
        if (customerNameEl) customerNameEl.value = savedOrderDetails.name || "";
        if (customerPhoneEl) customerPhoneEl.value = savedOrderDetails.phone || "";
        if (deliveryAddressEl) deliveryAddressEl.value = savedOrderDetails.address || "";
    }

    function saveCart() {
        storeSet("safawani_cart", cart);
    }

    function getCartCount() {
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    }

    function getCartTotal() {
        return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
    }

   function addToCart(itemId, chosenPrice) {
    const item = findMenuItem(itemId);

    if (!item) return;

    const isVariable = Array.isArray(item.priceOptions);

    const price = isVariable
        ? Number(chosenPrice)
        : Number(item.price);

    if (!Number.isFinite(price) || price < 0) {
        console.error("Invalid price:", price);
        return;
    }

    const cartKey = isVariable
        ? `${itemId}-${price}`
        : itemId;

    const displayName = isVariable
        ? `${item.name} (${price} ج.م)`
        : item.name;

    if (!cart[cartKey]) {
        cart[cartKey] = {
            id: cartKey,
            name: displayName,
            price: price,
            quantity: 1
        };
    } else {
        cart[cartKey].quantity += 1;
    }

    saveCart();
    renderCart();

    // تأثير الإضافة
    const btn = document.querySelector(
        `[data-add-item="${CSS.escape(itemId)}"], [data-add-variable="${CSS.escape(itemId)}"]`
    );

    if (btn) {
        btn.classList.add("added");

        setTimeout(() => {
            btn.classList.remove("added");
        }, 500);
    }
}

    

    function removeFromCart(itemId) {
        if (!cart[itemId]) return;

        cart[itemId].quantity -= 1;
        if (cart[itemId].quantity <= 0) delete cart[itemId];

        saveCart();
        renderCart();
    }

    function increaseCartItem(itemId) {
        if (!cart[itemId]) return;
        cart[itemId].quantity += 1;
        saveCart();
        renderCart();
    }

    function renderCart() {
        const count = getCartCount();
        const total = getCartTotal();

        if (cartCountEl) cartCountEl.textContent = count;

        if (!cartItemsEl || !cartTotalEl) return;

        const items = Object.values(cart);

        if (!items.length) {
            cartItemsEl.innerHTML = `
                <div class="empty-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>السلة فارغة</p>
                </div>
            `;
            cartTotalEl.innerHTML = "";
            return;
        }

        cartItemsEl.innerHTML = items
            .map(
                (item) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h3>${escapeHTML(item.name)}</h3>
                        <p>${item.price} ج.م × ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button type="button" data-remove-item="${item.id}">−</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-add-cart-item="${item.id}">+</button>
                    </div>
                </div>
            `
            )
            .join("");

        cartTotalEl.innerHTML = `<strong>الإجمالي: ${total.toFixed(2)} ج.م</strong>`;
    }

    /* =========================
       التحكم في النوافذ والأزرار
    ========================= */

    document.addEventListener("click", (e) => {
        const openCategoryButton = e.target.closest("[data-open-category]");
        if (openCategoryButton) {
            openCategory(openCategoryButton.dataset.openCategory);
            return;
        }

        const addItemButton = e.target.closest("[data-add-item]");
        if (addItemButton) {
            addToCart(addItemButton.dataset.addItem);
            return;
        }

        const removeItemButton = e.target.closest("[data-remove-item]");
        if (removeItemButton) {
            removeFromCart(removeItemButton.dataset.removeItem);
            return;
        }

        const addCartItemButton = e.target.closest("[data-add-cart-item]");
        if (addCartItemButton) {
            increaseCartItem(addCartItemButton.dataset.addCartItem);
            return;
        }

        const closeButton = e.target.closest("[data-close]");
        if (closeButton) {
            const popup = document.getElementById(closeButton.dataset.close);
            closePopup(popup);
        }
    });

    if (cartButton && cartPopup) {
        cartButton.addEventListener("click", () => {
            renderCart();
            cartPopup.classList.add("active");
            document.body.classList.add("popup-open");
        });
    }

    // إغلاق البوب أب عند النقر خارج المحتوى
    [menuPopup, cartPopup].forEach((popup) => {
        if (!popup) return;
        popup.addEventListener("click", (e) => {
            if (e.target === popup) closePopup(popup);
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        document.querySelectorAll(".popup.active").forEach((popup) => closePopup(popup));
    });

    /* =========================
       تفاصيل الطلب
    ========================= */

    function saveOrderDetails() {
        storeSet("safawani_order_details", {
            name: customerNameEl ? customerNameEl.value.trim() : "",
            phone: customerPhoneEl ? customerPhoneEl.value.trim() : "",
            address: deliveryAddressEl ? deliveryAddressEl.value.trim() : "",
        });
    }

    function clearFieldError(input) {
        input.classList.remove("input-error");
        if (orderMessageEl) orderMessageEl.textContent = "";
    }

    [customerNameEl, customerPhoneEl, deliveryAddressEl].forEach((input) => {
        if (!input) return;
        input.addEventListener("input", () => {
            saveOrderDetails();
            if (input.value.trim()) clearFieldError(input);
        });
    });

    function isValidPhone(value) {
        const digitsOnly = value.replace(/[\s+()-]/g, "");
        return /^\d{8,15}$/.test(digitsOnly);
    }

    function showOrderError(message, fieldEl) {
        if (orderMessageEl) {
            orderMessageEl.textContent = message;
            orderMessageEl.className = "review-message error";
        }
        [customerNameEl, customerPhoneEl, deliveryAddressEl].forEach((el) => el && el.classList.remove("input-error"));
        if (fieldEl) {
            fieldEl.classList.add("input-error");
            fieldEl.focus();
        }
    }

    /* =========================
       طلب واتساب
    ========================= */

    if (checkoutOrderBtn) {
        checkoutOrderBtn.addEventListener("click", () => {
            const items = Object.values(cart);

            if (!items.length) {
                if (orderMessageEl) {
                    orderMessageEl.textContent = "السلة فارغة، أضف طلبًا أولًا.";
                    orderMessageEl.className = "review-message error";
                }
                return;
            }

            const name = customerNameEl ? customerNameEl.value.trim() : "";
            const phone = customerPhoneEl ? customerPhoneEl.value.trim() : "";
            const address = deliveryAddressEl ? deliveryAddressEl.value.trim() : "";

            if (!name) {
                showOrderError("من فضلك اكتب اسمك قبل إرسال الطلب", customerNameEl);
                return;
            }

            if (!phone || !isValidPhone(phone)) {
                showOrderError("من فضلك اكتب رقم تواصل صحيح قبل إرسال الطلب", customerPhoneEl);
                return;
            }

            if (!address) {
                showOrderError("من فضلك اكتب عنوان التوصيل بالتفصيل قبل إرسال الطلب", deliveryAddressEl);
                return;
            }

            [customerNameEl, customerPhoneEl, deliveryAddressEl].forEach((el) => el && el.classList.remove("input-error"));
            if (orderMessageEl) orderMessageEl.textContent = "";

            saveOrderDetails();

            let message = "مرحبًا، أريد طلبًا من مطعم الصفواني\n\n";
            message += `الاسم: ${name}\n`;
            message += `رقم التواصل: ${phone}\n`;
            message += `العنوان: ${address}\n\n`;
            message += "الطلب:\n";

            items.forEach((item) => {
                message += `- ${item.name} × ${item.quantity} = ${item.price * item.quantity} ج.م\n`;
            });

            message += `\nالإجمالي: ${getCartTotal().toFixed(2)} ج.م`;

            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(waLink, "_blank", "noopener");
        });
    }

    /* =========================
       التقييمات
    ========================= */

    let reviews = [];

    const averageRatingEl = document.getElementById("averageRating");
    const averageStarsEl = document.getElementById("averageStars");
    const reviewCountEl = document.getElementById("reviewCount");
    const reviewsListEl = document.getElementById("reviewsList");
    const reviewForm = document.getElementById("reviewForm");
    const reviewMessageEl = document.getElementById("reviewMessage");
    const ratingInput = document.getElementById("ratingInput");
    const reviewSubmitBtn = reviewForm ? reviewForm.querySelector("button[type='submit']") : null;

    let selectedRating = 0;

    async function loadReviews() {
        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient
                    .from("reviews")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (!error && data) {
                    reviews = data.map((r) => ({
                        name: r.name,
                        rating: r.rating,
                        text: r.text,
                        date: r.created_at,
                    }));
                    return;
                }

                if (error) console.error("Supabase load error:", error);
            } catch (error) {
                console.error("Supabase load error:", error);
            }
        }

        // احتياطي محلي: قبل ربط Supabase أو عند تعذر الاتصال
        reviews = storeGet("safawani_reviews", null) || seedReviews;
    }

    async function submitReview(review) {
        if (supabaseClient) {
            const { error } = await supabaseClient.from("reviews").insert({
                name: review.name,
                rating: review.rating,
                text: review.text,
            });
            if (error) throw error;
            return;
        }

        const local = storeGet("safawani_reviews", null) || seedReviews;
        local.push(review);
        storeSet("safawani_reviews", local);
    }

    function renderReviews() {
        const count = reviews.length;
        const avg = count ? reviews.reduce((s, r) => s + r.rating, 0) / count : 0;

        if (averageRatingEl) averageRatingEl.textContent = avg.toFixed(1);
        if (averageStarsEl) averageStarsEl.textContent = starString(avg);
        if (reviewCountEl) reviewCountEl.textContent = count ? `بناءً على ${count} تقييم` : "لا توجد تقييمات بعد";

        if (!reviewsListEl) return;

        reviewsListEl.innerHTML = [...reviews]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(
                (r) => `
                <div class="review-card">
                    <div class="review-card-header">
                        <span class="review-card-name">${escapeHTML(r.name)}</span>
                        <span class="review-card-stars">${starString(r.rating)}</span>
                    </div>
                    <p>${escapeHTML(r.text)}</p>
                    <span class="review-date">${formatDate(r.date)}</span>
                </div>`
            )
            .join("");
    }

    if (ratingInput) {
        ratingInput.addEventListener("click", (e) => {
            const span = e.target.closest("span[data-value]");
            if (!span) return;
            selectedRating = Number(span.dataset.value);
            updateStarSelection();
        });
    }

    function updateStarSelection() {
        if (!ratingInput) return;
        [...ratingInput.querySelectorAll("span")].forEach((span) => {
            span.classList.toggle("active", Number(span.dataset.value) <= selectedRating);
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.getElementById("reviewName").value.trim();
            const text = document.getElementById("reviewText").value.trim();

            if (!name || !text || selectedRating === 0) {
                if (reviewMessageEl) {
                    reviewMessageEl.textContent = "الرجاء تعبئة الاسم والتقييم والتعليق قبل الإرسال";
                    reviewMessageEl.className = "review-message error";
                }
                return;
            }

            if (reviewSubmitBtn) reviewSubmitBtn.disabled = true;

            try {
                await submitReview({
                    name,
                    rating: selectedRating,
                    text,
                    date: new Date().toISOString(),
                });

                if (reviewMessageEl) {
                    reviewMessageEl.textContent = "شكرًا لك! تم إضافة تقييمك بنجاح";
                    reviewMessageEl.className = "review-message success";
                }

                reviewForm.reset();
                selectedRating = 0;
                updateStarSelection();

                await loadReviews();
                renderReviews();
            } catch (error) {
                console.error("Review submit error:", error);
                if (reviewMessageEl) {
                    reviewMessageEl.textContent = "تعذر إرسال التقييم، حاول مرة أخرى";
                    reviewMessageEl.className = "review-message error";
                }
            } finally {
                if (reviewSubmitBtn) reviewSubmitBtn.disabled = false;
            }
        });
    }
    (function () {
    const THEME_KEY = "safawani_theme";
    const body = document.body;
    const toggleBtn = document.getElementById("themeToggleBtn");

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            body.classList.remove("dark-mode");
            if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    applyTheme(savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const isDark = body.classList.contains("dark-mode");
            const newTheme = isDark ? "light" : "dark";
            applyTheme(newTheme);
            localStorage.setItem(THEME_KEY, newTheme);
        });
    };
})
();
});
