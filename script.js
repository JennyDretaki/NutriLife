// === DATA: Διατροφές ===
const diets = [
    { name: "Μεσογειακή", img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400", details: "Βασίζεται σε φρούτα, λαχανικά, ελαιόλαδο, ψάρι και ολικά δημητριακά. Προστατεύει την καρδιά και μειώνει τον κίνδυνο διαβήτη." },
    { name: "Keto", img: "https://www.eatingwell.com/thmb/BD8_UKmmL777MZKfBF1aXoGUzc0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/keto-friendly-foods-final-bf76c95d8849423b862a71be19b8bb32.jpg", details: "Υψηλά λιπαρά, χαμηλοί υδατάνθρακες. Βοηθά στην απώλεια βάρους μέσω κέτωσης." },
    { name: "Vegan", img: "https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png", details: "100% φυτική διατροφή. Πλούσια σε φυτικές ίνες, βιταμίνες και αντιοξειδωτικά." },
    { name: "Paleo", img: "https://hips.hearstapps.com/hmg-prod/images/paleo-diet-yes-1605642938.png?resize=640:*", details: "Μιμείται τη διατροφή των προγόνων: κρέας, ψάρι, φρούτα, ξηροί καρποί. Αποφεύγει επεξεργασμένα." },
    { name: "High-Protein", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", details: "1.6-2.2g πρωτεΐνης/kg. Ιδανική για μυϊκή αποκατάσταση και αθλητές." },
    { name: "Carb-Loading", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400", details: "8-12g υδατάνθρακες/kg πριν από αγώνα. Αυξάνει το γλυκογόνο." },
    { name: "Endurance", img: "https://lh3.googleusercontent.com/aWcpLAtVWqCvtN098i5fuGH46HNmWHuOcrVaXoYX2jMYIVB9-h8y-IQOdL3Qkt3p3wyqflXo7WHP7zUT1tylGg=s800", details: "Ισορροπημένη διατροφή με έμφαση σε υδατάνθρακες, πρωτεΐνες και ηλεκτρολύτες." }
];
const recipes = {
    keto: [
        { title: "Keto Ομελέτα", ingredients: ["3 αυγά", "50g τυρί", "30g βούτυρο"], instructions: "Χτυπήστε τα αυγά, τηγανίστε με βούτυρο, προσθέστε τυρί." },
        { title: "Keto Σαλάτα Αβοκάντο", ingredients: ["1 αβοκάντο", "100g κοτόπουλο", "ελαιόλαδο"], instructions: "Κόψτε, ανακατέψτε, σερβίρετε." },
        { title: "Keto Μπριζόλα", ingredients: ["200g μπριζόλα", "αλάτι", "βούτυρο"], instructions: "Ψήστε 4' από κάθε πλευρά." },
        { title: "Keto Σούπα Μπρόκολο", ingredients: ["300g μπρόκολο", "κρέμα γάλακτος", "τυρί"], instructions: "Βράστε, πολτοποιήστε." },
        { title: "Keto Ψωμί", ingredients: ["αλεύρι αμυγδάλου", "αυγά", "βούτυρο"], instructions: "Ψήστε 30' στους 180°C." },
        { title: "Keto Smoothie", ingredients: ["αβοκάντο", "γάλα αμυγδάλου", "στέβια"], instructions: "Χτυπήστε στο μπλέντερ." },
        { title: "Keto Κοτόπουλο Ψητό", ingredients: ["στήθος", "ελαιόλαδο", "μπαχαρικά"], instructions: "Ψήστε 25' στους 200°C." }
    ],
    protein: [
        { title: "Πρωτεϊνικό Smoothie", ingredients: ["30g πρωτεΐνη", "μπανάνα", "γάλα"], instructions: "Χτυπήστε." },
        { title: "Κοτόπουλο Γκριλ", ingredients: ["200g στήθος", "μπαχαρικά"], instructions: "Ψήστε 15'." },
        { title: "Τόνος Σαλάτα", ingredients: ["1 κονσέρβα τόνος", "αυγό", "μαγιονέζα"], instructions: "Ανακατέψτε." },
        { title: "Μοσχάρι Στιφάδο", ingredients: ["300g μοσχάρι", "κρεμμύδι"], instructions: "Σιγοψηθείτε 2 ώρες." },
        { title: "Σολομός Ψητός", ingredients: ["200g σολομός", "λεμόνι"], instructions: "Ψήστε 12'." },
        { title: "Αυγά Βραστά", ingredients: ["6 αυγά"], instructions: "Βράστε 10'." },
        { title: "Γαλοπούλα Στήθος", ingredients: ["150g γαλοπούλα", "σαλάτα"], instructions: "Ψήστε 20'." },
        { title: "Πρωτεϊνικό Pancake", ingredients: ["30g πρωτεΐνη", "αυγό", "μπανάνα"], instructions: "Τηγανίστε." }
    ],
    vegan: [
        { title: "Vegan Buddha Bowl", ingredients: ["κινόα", "ρεβίθια", "αβοκάντο"], instructions: "Βράστε, ανακατέψτε." },
        { title: "Χούμους", ingredients: ["ρεβίθια", "ταχίνι", "λεμόνι"], instructions: "Πολτοποιήστε." },
        { title: "Φακόρυζο", ingredients: ["φακές", "ρύζι", "κρεμμύδι"], instructions: "Βράστε μαζί." },
        { title: "Vegan Σπαγγέτι", ingredients: ["κολοκύθι", "ντομάτα", "σκόρδο"], instructions: "Σοτάρετε." },
        { title: "Τofu Stir Fry", ingredients: ["τοφού", "λαχανικά", "σόγια"], instructions: "Τηγανίστε." },
        { title: "Vegan Burger", ingredients: ["φασόλια", "κρεμμύδι"], instructions: "Πλάστε, ψήστε." },
        { title: "Σαλάτα Κινόα", ingredients: ["κινόα", "ντομάτα", "αγγούρι"], instructions: "Ανακατέψτε." }
    ],
    paleo: [
        { title: "Paleo Steak", ingredients: ["300g μπριζόλα", "αλάτι"], instructions: "Ψήστε 5'." },
        { title: "Γλυκοπατάτα Ψητή", ingredients: ["2 γλυκοπατάτες"], instructions: "Ψήστε 45'." },
        { title: "Paleo Σαλάτα", ingredients: ["σπανάκι", "αβοκάντο", "ξηροί καρποί"], instructions: "Ανακατέψτε." },
        { title: "Κοτόπουλο Κάρυ", ingredients: ["στήθος", "γάλα καρύδας"], instructions: "Σιγοβράστε." },
        { title: "Paleo Ψάρι", ingredients: ["200g μπακαλιάρος", "ελαιόλαδο"], instructions: "Ψήστε 15'." },
        { title: "Αυγά με Αβοκάντο", ingredients: ["2 αυγά", "1 αβοκάντο"], instructions: "Τηγανίστε." },
        { title: "Paleo Smoothie", ingredients: ["μπανάνα", "αμύγδαλα", "γάλα καρύδας"], instructions: "Χτυπήστε." }
    ],
    endurance: [
        { title: "Energy Oatmeal", ingredients: ["50g βρώμη", "φρούτα", "μέλι"], instructions: "Βράστε." },
        { title: "Banana Energy Bar", ingredients: ["μπανάνα", "ξηροί καρποί"], instructions: "Ψήστε." },
        { title: "Παστά με Ντομάτα", ingredients: ["100g πάστα", "ντομάτα"], instructions: "Βράστε." },
        { title: "Ρύζι με Λαχανικά", ingredients: ["ρύζι", "μπρόκολο", "καρότο"], instructions: "Βράστε." },
        { title: "Smoothie Φρούτων", ingredients: ["φράουλες", "μπανάνα", "γιαούρτι"], instructions: "Χτυπήστε." },
        { title: "Πρωινό Μούσλι", ingredients: ["βρώμη", "γάλα", "φρούτα"], instructions: "Ανακατέψτε." },
        { title: "Πατάτες Γλυκοπατάτας", ingredients: ["2 γλυκοπατάτες", "ελαιόλαδο"], instructions: "Ψήστε." }
    ]
};

// === UTILS ===
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);


// === BMI CALCULATOR ===
$('#bmi-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const w = parseFloat($('#weight').value);
    const h = parseFloat($('#height').value) / 100;
    if (!w || !h) return;
    const bmi = (w / (h * h)).toFixed(1);
    const cat = bmi < 18.5 ? 'Λιποβαρής' : bmi < 25 ? 'Κανονικό' : bmi < 30 ? 'Υπέρβαρος' : 'Παχύσαρκος';
    $('#bmi-result').textContent = `BMI: ${bmi} → ${cat}`;
});
// === RENDER DIETS ===
function renderDiets() {
    const container = $('#diets-container');
    if (!container) return;
    container.innerHTML = '';
    diets.forEach((diet, i) => {
        const card = document.createElement('article');
        card.className = 'card animate-fade';
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${diet.img}" alt="${diet.name}" loading="lazy">
                    <h3>${diet.name}</h3>
                </div>
                <div class="card-back">
                    <h3>${diet.name}</h3>
                    <p>${diet.details}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        container.appendChild(card);
    });
}

// === RENDER RECIPES (FLIP CARDS) ===
function renderRecipes() {
    const container = $('#recipes-container');
    if (!container) return;
    container.innerHTML = '';

    Object.entries(recipes).forEach(([cat, list]) => {
        const section = document.createElement('section');
        section.className = 'recipe-category';
        section.innerHTML = `<h2 class="category-title">${getCategoryName(cat)}</h2><div class="cards-grid"></div>`;
        container.appendChild(section);

        const grid = section.querySelector('.cards-grid');
        list.forEach((recipe, i) => {
            const card = document.createElement('article');
            card.className = 'card recipe-card animate-fade';
            card.style.animationDelay = `${i * 0.1}s`;
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <h3>${recipe.title}</h3>
                        <p><strong>Κατηγορία:</strong> ${getCategoryName(cat)}</p>
                    </div>
                    <div class="card-back">
                        <h3>${recipe.title}</h3>
                        <h4>Υλικά:</h4>
                        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
                        <h4>Οδηγίες:</h4>
                        <p>${recipe.instructions}</p>
                        <button onclick="exportPDF(${JSON.stringify(recipe).replace(/"/g, '&quot;')})">PDF</button>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => card.classList.toggle('flipped'));
            grid.appendChild(card);
        });
    });
}

function getCategoryName(key) {
    const map = { keto: "Keto", protein: "Υψηλή Πρωτεΐνη", vegan: "Vegan", paleo: "Paleo", endurance: "Αντοχή" };
    return map[key] || key;
}

// === PDF EXPORT ===
function exportPDF(recipe) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(18);
    doc.text(recipe.title, 20, 30);
    doc.setFontSize(12);
    doc.text("Υλικά:", 20, 50);
    recipe.ingredients.forEach((ing, i) => doc.text(`• ${ing}`, 30, 60 + i * 8));
    doc.text("Οδηγίες:", 20, 100);
    doc.text(recipe.instructions, 30, 110, { maxWidth: 150 });
    doc.save(`${recipe.title}.pdf`);
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderDiets();
    if (location.pathname.includes('recipes.html')) renderRecipes();

    // Theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        $('.theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Hamburger
    $('.nav-toggle')?.addEventListener('click', () => {
        $('.nav-list').classList.toggle('active');
        const expanded = $('.nav-toggle').getAttribute('aria-expanded') === 'true';
        $('.nav-toggle').setAttribute('aria-expanded', !expanded);
    });

    // Theme Toggle
    $('.theme-toggle')?.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        $('.theme-toggle').innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Active link
    $$('.nav-link').forEach(link => {
        if (link.href === location.href) link.classList.add('active');
    });
});