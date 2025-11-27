/* =========================================
   1. CONFIGURATION & DONNÉES
   ========================================= */

   const cvLinks = {
    fr: "cv.pdf",
    en: "cvAnglais.pdf"
};

// Variable pour stocker le HTML des compétences en Français (Badges)
let originalFrSkillsHTML = "";

// Données pour les barres de compétences (Mode Anglais uniquement)
const englishSkillsData = [
    {
        title: "Development",
        icon: "fas fa-code",
        skills: [
            { name: "C# / .NET", percent: 90 },
            { name: "Python", percent: 75 },
            { name: "C / C++", percent: 70 },
            { name: "JavaScript", percent: 65 }
        ]
    },
    {
        title: "System & Data",
        icon: "fas fa-database",
        skills: [
            { name: "SQL / PostgreSQL", percent: 85 },
            { name: "Linux / Debian", percent: 75 },
            { name: "Git / GitHub", percent: 80 },
            { name: "Bash", percent: 60 }
        ]
    }
];

const dictionary = {
    fr: {
        nav_profile: "Profil", nav_skills: "Compétences", nav_edu: "Formation", nav_portfolio: "Portfolio", nav_exp: "Expérience", nav_ref: "Références",
        btn_download_cv: "CV Français",
        hero_pre: "-- System Ready --",
        hero_role: "Étudiant en Informatique<br>Data & IA",
        btn_contact: "Me Contacter", btn_projects: "Voir Projets",
        
        title_profile: "Profil",
        text_profile: "Actuellement étudiant en 2ème année de BUT Informatique (Parcours BD & IA), je cherche un STAGE. Passionné par le bas niveau (C/C++) et l'optimisation, je veux concevoir des systèmes intelligents.",
        
        title_lang: "Langues",
        lang_fr: "Français", lang_en: "Anglais", lang_es: "Espagnol", lang_cn: "Chinois",

        title_skills: "Stack Technique", skill_cat_dev: "Développement", skill_cat_data: "Système & Data",
        
        title_edu: "Formation",
        edu_1_title: "BUT Informatique",
        edu_1_date: "2024 - Présent",
        edu_1_school: "Université Savoie Mont-Blanc / IUT d'Annecy",
        edu_1_desc: "Parcours Base de Données et IA",
        
        edu_2_title: "Baccalauréat Général",
        edu_2_date: "2020 - 2023",
        edu_2_school: "Lycée Jean-Macé - Rennes",
        edu_2_desc: "Spécialités Maths, Physique-Chimie (Mention Bien)",

        title_portfolio: "Projets Remarquables",
        proj_type_academic: "Projet Universitaire",
        proj_type_personal: "Projet Personnel",
        
        // PROJET 1
        proj_1_title: "App Web & Base de Données",
        proj_1_date: "Jan - Mar 2025",
        proj_1_context: "IUT Annecy",
        proj_1_desc: "Conception complète d'une application web. De la modélisation de la BDD PostgreSQL à l'interface dynamique en JS. Focus sur le travail collaboratif et la qualité du code.",

        // PROJET 2
        proj_2_title: "Piratis (Moteur de Jeu)",
        proj_2_date: "Printemps 2024",
        proj_2_context: "IUT Annecy",
        proj_2_desc: "Développement d'un clone de Tetris en C#. Implémentation bas niveau : gestion de la grille logique, détection de collisions, système de score et interface graphique.",

        // PROJET 3
        proj_3_title: "Loxam Gestion (WPF)",
        proj_3_date: "2024",
        proj_3_context: "IUT Annecy",
        proj_3_desc: "Application lourde développée en architecture MVVM (simplifiée). Reproduction des fonctionnalités métiers de Loxam : CRUD matériel, gestion stocks et interface utilisateur XAML.",

        title_exp: "Expérience",
        exp_1_role: "Projet Universitaire - USMB",
        exp_1_d1: "Collaboration en équipe agile cross-fonctionnelle",
        exp_1_d2: "Revues de code et amélioration de la qualité",
        exp_1_d3: "Tests unitaires et tests systèmes",

        exp_2_role: "Stage - La Poste Digital",
        exp_2_d1: "Découverte de l'environnement de développement logiciel",
        exp_2_d2: "Documentation technique et tests simples",

        title_ref: "Références",
        ref_1_role: "Enseignant UML et SQL",
        ref_2_role: "Maître de conférences SQL et POO",

        title_contact: "Contact",
        contact_text: "Mon inbox est toujours ouverte. Que ce soit pour une opportunité ou juste pour dire bonjour, je ferai de mon mieux pour vous répondre !"
    },
    en: {
        nav_profile: "Profile", nav_skills: "Skills", nav_edu: "Education", nav_portfolio: "Portfolio", nav_exp: "Experience", nav_ref: "References",
        btn_download_cv: "English Resume",
        hero_pre: "-- System Ready --",
        hero_role: "Computer Science Student<br>Data & AI",
        btn_contact: "Contact Me", btn_projects: "See Projects",
        
        title_profile: "Profile",
        text_profile: "Currently a 2nd-year CS student (Data & AI), I am looking for an INTERNSHIP. Passionate about low-level dev (C/C++) and AI integration, I aim to build intelligent and efficient systems.",
        
        title_lang: "Languages",
        lang_fr: "French", lang_en: "English", lang_es: "Spanish", lang_cn: "Chinese",

        title_skills: "Tech Stack", skill_cat_dev: "Development", skill_cat_data: "System & Data",
        
        title_edu: "Education",
        edu_1_title: "Technical Bachelor's Degree",
        edu_1_date: "2024 - Present",
        edu_1_school: "University of Savoy - IUT Annecy",
        edu_1_desc: "Specializing in Data Administration and AI",

        edu_2_title: "French Baccalaureate",
        edu_2_date: "2020 - 2023",
        edu_2_school: "Lycée Jean-Macé - Rennes",
        edu_2_desc: "Specialized in Math and Physics-Chemistry (With Honors)",

        title_portfolio: "Portfolio",
        proj_type_academic: "Academic Project",
        proj_type_personal: "Personal Project",

        proj_1_title: "Web App & Database",
        proj_1_date: "Jan - Mar 2025",
        proj_1_context: "Annecy University",
        proj_1_desc: "Full-stack web application design. From PostgreSQL DB modeling to dynamic JS frontend. Focus on collaborative workflows (Git) and code quality.",

        proj_2_title: "Piratis (Game Engine)",
        proj_2_date: "Spring 2024",
        proj_2_context: "Annecy University",
        proj_2_desc: "Development of a Tetris clone in C/C++. Low-level implementation: logic grid management, collision detection, scoring system, and graphical interface.",

        proj_3_title: "Loxam Management (WPF)",
        proj_3_date: "2024",
        proj_3_context: "Annecy University",
        proj_3_desc: "Desktop application developed with .NET/WPF. Reproduction of Loxam's business features: Equipment CRUD, inventory management, and XAML UI design.",

        title_exp: "Experience",
        exp_1_role: "University Project - USMB",
        exp_1_d1: "Collaborating with cross-functional teams to identify and prioritize features",
        exp_1_d2: "Conducting code reviews and providing feedback to improve code quality",
        exp_1_d3: "Developing unit tests and performing system testing",

        exp_2_role: "Internship - La Poste Digital",
        exp_2_d1: "Discovered the work environment of a software development team",
        exp_2_d2: "Assisted with documentation and simple testing",

        title_ref: "References",
        ref_1_role: "UML and SQL teacher",
        ref_2_role: "SQL and OOP associate professor",

        title_contact: "Get In Touch",
        contact_text: "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
    }
};

/* =========================================
   2. FONCTIONS LOGIQUES
   ========================================= */

// Générateur HTML pour les barres de compétences (Mode EN)
function generateEnglishSkills() {
    return englishSkillsData.map(cat => `
        <div class="skill-card">
            <div class="skill-icon"><i class="${cat.icon}"></i></div>
            <h4>${cat.title}</h4>
            <div class="skill-bars-container">
                ${cat.skills.map(skill => `
                    <div class="skill-bar-item">
                        <div class="skill-info">
                            <span>${skill.name}</span>
                            <span class="skill-percent">${skill.percent}%</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 0%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Fonction principale de changement de langue
function setLanguage(lang) {
    if (!dictionary[lang]) return;
    
    // 1. Mise à jour des textes simples
    const keys = Object.keys(dictionary[lang]);
    keys.forEach(key => {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el) el.innerHTML = dictionary[lang][key];
    });

    // 2. Mise à jour du lien CV
    const cvBtn = document.getElementById('cv-btn');
    if (cvBtn) cvBtn.href = cvLinks[lang];

    // 3. Mise à jour visuelle des boutons (Active state)
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // 4. LOGIQUE SPÉCIALE COMPÉTENCES (Badges vs Barres)
    const skillsContainer = document.querySelector('.skills-grid');
    if (skillsContainer) {
        if (lang === 'en') {
            // A. Injection des barres
            skillsContainer.innerHTML = generateEnglishSkills();
            
            // B. Animation des barres (0% -> X%)
            setTimeout(() => {
                // On récupère toutes les barres qu'on vient de créer
                const bars = skillsContainer.querySelectorAll('.progress-fill');
                // On boucle sur chaque barre pour lui donner sa bonne largeur
                let cardIndex = 0;
                englishSkillsData.forEach(cat => {
                    cat.skills.forEach(skill => {
                        // On trouve la barre correspondante dans le DOM (approximation par ordre)
                        // Une méthode plus robuste serait de le faire par index global, 
                        // mais ici l'ordre d'injection est linéaire.
                        // On va simplement itérer sur la NodeList 'bars'
                    });
                });
                
                // Application des largeurs correctes
                let globalIndex = 0;
                englishSkillsData.forEach(cat => {
                    cat.skills.forEach(skill => {
                        if(bars[globalIndex]) {
                            bars[globalIndex].style.width = `${skill.percent}%`;
                        }
                        globalIndex++;
                    });
                });

            }, 50); // Petit délai pour permettre au navigateur de rendre le DOM avant d'animer

        } else {
            // Retour au mode Français (Badges)
            if (originalFrSkillsHTML) {
                skillsContainer.innerHTML = originalFrSkillsHTML;
            }
        }
    }
}

/* =========================================
   3. INITIALISATION (DOM READY)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // A. Sauvegarde de l'état initial des compétences (Français / Badges)
    const skillsContainer = document.querySelector('.skills-grid');
    if (skillsContainer) {
        originalFrSkillsHTML = skillsContainer.innerHTML;
    }

    // B. Event Listeners pour les boutons de langue
    const btnFr = document.getElementById('btn-fr');
    const btnEn = document.getElementById('btn-en');

    if(btnFr) btnFr.addEventListener('click', () => setLanguage('fr'));
    if(btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    // C. Année dynamique footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // D. Gestion de l'Intro Overlay & Logo
    const introOverlay = document.getElementById('intro-overlay');
    const navLogo = document.getElementById('nav-logo');
    const body = document.body;

    body.style.overflow = 'hidden'; // Empêcher le scroll pendant l'intro
    
    if(navLogo) {
        navLogo.style.opacity = '0';
        navLogo.style.transition = 'opacity 1s ease';
    }

    setTimeout(() => {
        if(introOverlay) {
            introOverlay.classList.add('hidden');
            setTimeout(() => introOverlay.style.display = 'none', 800);
        }
        body.style.overflow = 'auto'; // Réactiver le scroll
        if(navLogo) {
            setTimeout(() => {
                navLogo.style.opacity = '1';
            }, 300);
        }
    }, 2200);

    // E. Background Canvas Animation (Particules)
    const canvas = document.getElementById("bg-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let w, h;
        const particles = [];

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.life = 0;
                this.maxLife = Math.random() * 200 + 100;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life++;
                if(this.life > this.maxLife || this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
            }
            draw() {
                ctx.fillStyle = `rgba(74, 222, 128, ${Math.min(this.life/50, 0.15)})`; 
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        // Création de 40 particules
        for(let k=0; k<40; k++) particles.push(new Particle());
        
        function animate() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        animate();
    }
});