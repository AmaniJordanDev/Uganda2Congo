/* ===================================================
   UGANDA2CONGO — MAIN JAVASCRIPT
=================================================== */

// ===================================================
// TRANSLATION SYSTEM
// ===================================================

const translations = {
    en: {
        home: "Home",
        about: "About Us",
        howItWorks: "How It Works",
        businesses: "Businesses",
        marketplace: "Marketplace",
        services: "Services",
        login: "Login",
        getStarted: "Get Started",
        heroLineOne: "Connecting",
        uganda: "Uganda",
        congo: "Congo",
        and: "&",
        heroDescription: "A platform connecting people, businesses, products and opportunities across Uganda and Congo.",
        discoverPlatform: "Discover Uganda2Congo",
        joinUs: "Join Uganda2Congo",
        from: "FROM",
        to: "TO",
        whoWeAre: "WHO WE ARE",
        aboutTitle: "More than a platform. A connection.",
        aboutLead: "Uganda2Congo is a digital platform built to bring people and businesses in Uganda and Congo closer together.",
        aboutText: "Whether you are looking for a business, discovering products, finding services, moving goods or building new connections, Uganda2Congo gives you a place to discover opportunities across borders.",
        learnMore: "Learn more",
        whyUganda2Congo: "WHY UGANDA2CONGO",
        whyTitle: "One connection. Many possibilities.",
        whyDescription: "We are building a digital bridge between people, businesses and opportunities in Uganda and Congo.",
        crossBorder: "Cross-Border Connection",
        crossBorderText: "Discover people and businesses across Uganda and Congo from one platform.",
        businessDiscovery: "Business Discovery",
        businessDiscoveryText: "Find businesses, suppliers and service providers and connect with them directly.",
        opportunities: "New Opportunities",
        opportunitiesText: "Create new connections that can lead to trade, collaboration and growth.",
        onePlatform: "One Platform",
        onePlatformText: "Bring businesses, products, services and logistics into one growing ecosystem.",
        howItWorksLabel: "HOW IT WORKS",
        howTitle: "Simple connections. Real opportunities.",
        discover: "Discover",
        discoverText: "Search for businesses, products, services and opportunities.",
        connect: "Connect",
        connectText: "Find the right person or business and start a conversation.",
        grow: "Grow",
        growText: "Build relationships, trade, collaborate and create new opportunities.",
        builtFor: "BUILT FOR",
        audienceTitle: "A growing community.",
        forBusinesses: "Businesses",
        forBusinessesText: "Put your business in front of potential customers and partners across Uganda and Congo.",
        forCustomers: "Customers",
        forCustomersText: "Discover products and services from businesses across the border.",
        forTraders: "Traders",
        forTradersText: "Discover suppliers, customers and new business opportunities.",
        forTransporters: "Transporters",
        forTransportersText: "Connect with people and businesses that need transport and logistics.",
        explore: "Explore",
        findServices: "Find Services",
        ourVision: "OUR VISION",
        visionTitle: "Two countries.<br>One connection.",
        visionText: "Uganda2Congo is creating a digital connection that makes discovering, connecting and doing business across borders easier.",
        ready: "READY TO CONNECT?",
        ctaTitle: "Be part of Uganda2Congo.",
        ctaText: "Discover what is possible when Uganda and Congo connect.",
        listBusiness: "List Your Business",
        footerText: "Connecting people, businesses and opportunities across Uganda and Congo.",
        platform: "Platform",
        business: "Business",
        legal: "Legal",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
        allRightsReserved: "All rights reserved.",
        transport: "Transport",
        businessSupport: "Business Support"
    },

    lg: {
        home: "Mwanzo",
        about: "Kutuuka",
        howItWorks: "Engeri Gye Kukolesa",
        businesses: "Bizinensi",
        marketplace: "Paansi y'Ebipimisa",
        services: "Serivisi",
        login: "Kiyingira",
        getStarted: "Tandika",
        heroLineOne: "Okukuumanya",
        uganda: "Uganda",
        congo: "Congo",
        and: "&",
        heroDescription: "Platform yokukuumanya bantu, bizinensi, ebigabanya n'amalobo okukoma Uganda ne Congo.",
        discoverPlatform: "Jjukira Uganda2Congo",
        joinUs: "Yingira mu Uganda2Congo",
        from: "BWAVA",
        to: "WAKA",
        whoWeAre: "TUTUKWATA DDALA",
        aboutTitle: "Ekira kyokugira ku nneggejja.",
        aboutLead: "Uganda2Congo ye platform yaaluma okukuumanya bantu ne bizinensi mu Uganda ne Congo.",
        aboutText: "Bino biri bizinensi, ebigabanya, serivisi, okuteekawo ekintu oba okukola emikwano emipya, Uganda2Congo erina kifo ky'ojjukira amalobo.",
        learnMore: "Jjukira entegeka",
        whyUganda2Congo: "LWAKI UGANDA2CONGO",
        whyTitle: "Okuuumanya kumu. Amalobo amangi.",
        whyDescription: "Tukyomukunnya eri okukuumanya bantu, bizinensi n'amalobo mu Uganda ne Congo.",
        crossBorder: "Okuuumanya okukoma Ensi",
        crossBorderText: "Jjukira bantu ne bizinensi mu Uganda ne Congo mu platform emu.",
        businessDiscovery: "Okuzuula Bizinensi",
        businessDiscoveryText: "Zula bizinensi, abagula n'abafo serivisi n'okukuumana nabo.",
        opportunities: "Amalobo Amapya",
        opportunitiesText: "Kayira emikwano egiyinza okukoma mu muloosi, emikwano n'okukula.",
        onePlatform: "Platform Emu",
        onePlatformText: "Tweke bizinensi, ebigabanya, serivisi ne logisitiki mu sisitemu emu.",
        howItWorksLabel: "ENGERI GYE KUKOLESA",
        howTitle: "Okuuumanya okukuwufu. Amalobo gatufu.",
        discover: "Zula",
        discoverText: "Zula bizinensi, ebigabanya, serivisi n'amalobo.",
        connect: "Kuumanya",
        connectText: "Zula omuntu oba bizinesi gy'orina okukuumanya nayo.",
        grow: "Kula",
        growText: "Kola emikwano, ga, n'okukula.",
        builtFor: "KYOKUKOLA FO",
        audienceTitle: "Kasitomala ekula.",
        forBusinesses: "Bizinensi",
        forBusinessesText: "Teeka bizinesi yo mu maaso ga kasitomala n'omuwawo mu Uganda ne Congo.",
        forCustomers: "Kasitomala",
        forCustomersText: "Zula ebigabanya ne serivisi biva mu bizinensi okukoma Ensi.",
        forTraders: "Abagula",
        forTradersText: "Zula abagula, kasitomala n'amalobo emipya.",
        forTransporters: "Abatwala",
        forTransportersText: "Kuumanya ne bantu ne bizinensi eteekeddwa abatwala ne logisitiki.",
        explore: "Zula",
        findServices: "Zula Serivisi",
        ourVision: "OKUTEGEEZA KWETFU",
        visionTitle: "Ensi bbiri.<br>Okuuumanya kumu.",
        visionText: "Uganda2Congo ekola okuuumanya okukwata ensi bbiri okukola byakyo kumukyamu okukola emikwano okukoma Ensi.",
        ready: "WEEWALE OKUUUMANYA?",
        ctaTitle: "Kana mu katikati ga Uganda2Congo.",
        ctaText: "Jjukira kyekiyinza okukolebwa Uganda ne Congo okukuumanya.",
        listBusiness: "Teeka Bizinesi Yo",
        footerText: "Okuuumanya bantu, bizinensi n'amalobo okukoma Uganda ne Congo.",
        platform: "Platform",
        business: "Bizinesi",
        legal: "Ettegeeza",
        privacy: "Secreza",
        terms: "Ebifo",
        contact: "Kuumanya",
        allRightsReserved: "Emikisa gyonna gyave.",
        transport: "Okutwalwa",
        businessSupport: "Okuwayo ku Bizinensi"
    },

    sw: {
        home: "Nyumbani",
        about: "Kuhusu Sisi",
        howItWorks: "Jinsi ya Kufanya Kazi",
        businesses: "Biashara",
        marketplace: "Soko",
        services: "Huduma",
        login: "Kuingia",
        getStarted: "Kuanza",
        heroLineOne: "Kuunganisha",
        uganda: "Uganda",
        congo: "Kongo",
        and: "&",
        heroDescription: "Jukwaa linaloounganisha watu, biashara, bidhaa na nafasi kwa Uganda na Kongo.",
        discoverPlatform: "Kugundua Uganda2Congo",
        joinUs: "Jiunieni Uganda2Congo",
        from: "KUTOKA",
        to: "KWENDA",
        whoWeAre: "NANI SISI",
        aboutTitle: "Zaidi ya jukwaa. Unganisho.",
        aboutLead: "Uganda2Congo ni jukwaa la kidijitali linalolenga kukaribisha watu na biashara huko Uganda na Kongo.",
        aboutText: "Iwe unajitafuta biashara, bidhaa, huduma, kuhamisha bidhaa au kujenga miunganisho mipya, Uganda2Congo inakupa mahali kupata nafasi za biashara.",
        learnMore: "Jifunze zaidi",
        whyUganda2Congo: "KWAANINI UGANDA2CONGO",
        whyTitle: "Unganisho moja. Umakini wengi.",
        whyDescription: "Tunajenga daraja la kidijitali kati ya watu, biashara na nafasi za biashara huko Uganda na Kongo.",
        crossBorder: "Unganisho Linalokataa Mpaka",
        crossBorderText: "Kugundua watu na biashara huko Uganda na Kongo kutoka kwenye jukwaa moja.",
        businessDiscovery: "Kugundua Biashara",
        businessDiscoveryText: "Tafuta biashara, wasambazaji na watoa huduma na wasiliane nao moja kwa moja.",
        opportunities: "Nafasi Mpya",
        opportunitiesText: "Tengeneza miunganisho inayoweza kusababisha biashara, ushirikiano na ukuaji.",
        onePlatform: "Jukwaa Moja",
        onePlatformText: "Kamatia biashara, bidhaa, huduma na lojistiki katika idadi moja ya mifumo.",
        howItWorksLabel: "JINSI YA KUFANYA KAZI",
        howTitle: "Miunganisho rahisi. Nafasi halisi.",
        discover: "Kugundua",
        discoverText: "Tafuta biashara, bidhaa, huduma na nafasi.",
        connect: "Kuunganisha",
        connectText: "Tafuta mtu au biashara sahihi na anza mazungumzo.",
        grow: "Kukua",
        growText: "Jenga mahusiano, biashara, ushirikiano na ujenzi wa nafasi mpya.",
        builtFor: "IMEJENGWA KWA",
        audienceTitle: "Jamii inayokua.",
        forBusinesses: "Biashara",
        forBusinessesText: "Weka biashara yako mbele ya wauzaji na washirikiano unaoweza huko Uganda na Kongo.",
        forCustomers: "Wateja",
        forCustomersText: "Kugundua bidhaa na huduma kutoka kwa biashara katika mpaka.",
        forTraders: "Wafanya Biashara",
        forTradersText: "Kugundua wasambazaji, wateja na nafasi za biashara mpya.",
        forTransporters: "Wahamishaji",
        forTransportersText: "Kuunganisha na watu na biashara inayohitaji usafiri na lojistiki.",
        explore: "Tukuza",
        findServices: "Tafuta Huduma",
        ourVision: "MACHO YETU",
        visionTitle: "Nchi mbili.<br>Unganisho moja.",
        visionText: "Uganda2Congo inaunda unganisho la kidijitali linalofanya kugundua, kuunganisha na kufanya biashara katika mpaka kuwa rahisi.",
        ready: "JE, UME KUWA TAYARI KUUNGANISHA?",
        ctaTitle: "Kua sehemu ya Uganda2Congo.",
        ctaText: "Kugundua kile kinachowezekana wakati Uganda na Kongo kuunganisha.",
        listBusiness: "Andika Biashara Yako",
        footerText: "Kuunganisha watu, biashara na nafasi kati ya Uganda na Kongo.",
        platform: "Jukwaa",
        business: "Biashara",
        legal: "Kisheria",
        privacy: "Usiri",
        terms: "Masharti",
        contact: "Kuwasiliana",
        allRightsReserved: "Haki zote zimehifadhiwa.",
        transport: "Usafiri",
        businessSupport: "Msaada wa Biashara"
    },

    fr: {
        home: "Accueil",
        about: "À Propos",
        howItWorks: "Comment Ça Marche",
        businesses: "Entreprises",
        marketplace: "Marché",
        services: "Services",
        login: "Connexion",
        getStarted: "Commencer",
        heroLineOne: "Connecter",
        uganda: "Ouganda",
        congo: "Congo",
        and: "&",
        heroDescription: "Une plateforme reliant les personnes, les entreprises, les produits et les opportunités entre l'Ouganda et le Congo.",
        discoverPlatform: "Découvrir Uganda2Congo",
        joinUs: "Rejoindre Uganda2Congo",
        from: "DE",
        to: "À",
        whoWeAre: "QUI SOMMES-NOUS",
        aboutTitle: "Plus qu'une plateforme. Une connexion.",
        aboutLead: "Uganda2Congo est une plateforme numérique conçue pour rapprocher les personnes et les entreprises en Ouganda et au Congo.",
        aboutText: "Que vous cherchiez une entreprise, découriez des produits, trouviez des services, transportiez des marchandises ou créiez de nouvelles connexions, Uganda2Congo vous offre un lieu pour découvrir des opportunités commerciales.",
        learnMore: "En savoir plus",
        whyUganda2Congo: "POURQUOI UGANDA2CONGO",
        whyTitle: "Une connexion. De nombreuses possibilités.",
        whyDescription: "Nous construisons un pont numérique entre les personnes, les entreprises et les opportunités en Ouganda et au Congo.",
        crossBorder: "Connexion Transfrontalière",
        crossBorderText: "Découvrez les personnes et les entreprises en Ouganda et au Congo à partir d'une seule plateforme.",
        businessDiscovery: "Découverte d'Entreprise",
        businessDiscoveryText: "Trouvez des entreprises, des fournisseurs et des prestataires et connectez-vous avec eux directement.",
        opportunities: "Nouvelles Opportunités",
        opportunitiesText: "Créez de nouvelles connexions qui peuvent mener au commerce, à la collaboration et à la croissance.",
        onePlatform: "Une Plateforme",
        onePlatformText: "Réunissez les entreprises, les produits, les services et la logistique dans un seul écosystème en croissance.",
        howItWorksLabel: "COMMENT ÇA MARCHE",
        howTitle: "Connexions simples. Opportunités réelles.",
        discover: "Découvrir",
        discoverText: "Recherchez des entreprises, des produits, des services et des opportunités.",
        connect: "Connecter",
        connectText: "Trouvez la bonne personne ou entreprise et lancez une conversation.",
        grow: "Grandir",
        growText: "Construisez des relations, des transactions commerciales, collaborez et créez de nouvelles opportunités.",
        builtFor: "CONSTRUIT POUR",
        audienceTitle: "Une communauté en croissance.",
        forBusinesses: "Entreprises",
        forBusinessesText: "Présentez votre entreprise aux clients potentiels et aux partenaires en Ouganda et au Congo.",
        forCustomers: "Clients",
        forCustomersText: "Découvrez les produits et services des entreprises au-delà des frontières.",
        forTraders: "Commerçants",
        forTradersText: "Découvrez les fournisseurs, les clients et les nouvelles opportunités commerciales.",
        forTransporters: "Transporteurs",
        forTransportersText: "Connectez-vous avec des personnes et des entreprises qui ont besoin de transport et de logistique.",
        explore: "Explorer",
        findServices: "Trouver des Services",
        ourVision: "NOTRE VISION",
        visionTitle: "Deux pays.<br>Une connexion.",
        visionText: "Uganda2Congo crée une connexion numérique qui rend la découverte, la connexion et les affaires entre les frontières plus faciles.",
        ready: "PRÊT À VOUS CONNECTER?",
        ctaTitle: "Faites partie de Uganda2Congo.",
        ctaText: "Découvrez ce qui est possible quand l'Ouganda et le Congo se connectent.",
        listBusiness: "Lister Votre Entreprise",
        footerText: "Connecter les personnes, les entreprises et les opportunités entre l'Ouganda et le Congo.",
        platform: "Plateforme",
        business: "Entreprise",
        legal: "Légal",
        privacy: "Confidentialité",
        terms: "Conditions",
        contact: "Contact",
        allRightsReserved: "Tous droits réservés.",
        transport: "Transport",
        businessSupport: "Support Entreprise"
    },

    ln: {
        home: "Ekutololo",
        about: "Lisunsu",
        howItWorks: "Ndenge Elilingaki",
        businesses: "Likobo",
        marketplace: "Malako",
        services: "Matungela",
        login: "Ketuka",
        getStarted: "Komesa",
        heroLineOne: "Kokambola",
        uganda: "Uganda",
        congo: "Kongo",
        and: "&",
        heroDescription: "Nzela ya makambo okambolela banto, bikobo, biloko mpe mahina kati ya Uganda mpe Kongo.",
        discoverPlatform: "Yeba Uganda2Congo",
        joinUs: "Yika mu Uganda2Congo",
        from: "MABALI",
        to: "MOSI",
        whoWeAre: "NANI BISO",
        aboutTitle: "Mokano ya nzela. Makambo ma kokambola.",
        aboutLead: "Uganda2Congo ezali nzela ya kidijita oyo etongaki pene banto mpe bikobo kati ya Uganda mpe Kongo.",
        aboutText: "Soki oyeba likobo, bilong ete, matungela, kotambola makambo to kosala mayina, Uganda2Congo epesi yo lopango ya koyeba mahina makambo.",
        learnMore: "Jiba malamu",
        whyUganda2Congo: "LIPELA NINI UGANDA2CONGO",
        whyTitle: "Kokambola koko moko. Mahina mingi.",
        whyDescription: "Kozali kotonga punda ya kidijita oyo esalaka kokambola kati ya banto, bikobo mpe mahina kati ya Uganda mpe Kongo.",
        crossBorder: "Kokambola ya Bilanga",
        crossBorderText: "Yeba banto mpe bikobo kati ya Uganda mpe Kongo, lelo oyo epesemaka.",
        businessDiscovery: "Koyeba Bikobo",
        businessDiscoveryText: "Sosa bikobo, bavandi mpe basamboli ya matungela, mpe kokambola na bango kolekaka.",
        opportunities: "Mahina Mipya",
        opportunitiesText: "Kosala mayina mipya oyo ekoki kolambisa makambo, kopambola mpe moboko.",
        onePlatform: "Nzela Moko",
        onePlatformText: "Kamata bikobo, biloko, matungela mpe lokondisi kati ya nzela moko ya mabaku.",
        howItWorksLabel: "NDENGE ELILINGAKI",
        howTitle: "Kokambola kitoko. Mahina mazali na kilo.",
        discover: "Yeba",
        discoverText: "Sosa bikobo, biloko, matungela mpe mahina.",
        connect: "Kokambola",
        connectText: "Sosa moto to likobo oyo malamu, mpe komanza lokambo.",
        grow: "Lokola",
        growText: "Tonga mayina, makambo, kopambola mpe kosala mahina mipya.",
        builtFor: "EZALI BASEMI",
        audienceTitle: "Lisanga linaloku.",
        forBusinesses: "Bikobo",
        forBusinessesText: "Teka likobo na yo liboso ya mopesi mpe mosakoli kati ya Uganda mpe Kongo.",
        forCustomers: "Bopesi",
        forCustomersText: "Yeba biloko mpe matungela ya bikobo ya molongo moko.",
        forTraders: "Bafandi",
        forTradersText: "Yeba bavandi, bopesi mpe mahina mipya ya makambo.",
        forTransporters: "Basamboli",
        forTransportersText: "Kokambola na banto mpe bikobo oyo esengi lokondisi mpe lo.",
        explore: "Mona",
        findServices: "Sosa Matungela",
        ourVision: "MINDUKI YETU",
        visionTitle: "Bilanga mibale.<br>Kokambola koko moko.",
        visionText: "Uganda2Congo ezali kofundisha ndenge ya kidijita oyo esalaka koyeba, kokambola mpe kosala makambo kati ya bilanga kuwa kitoko.",
        ready: "ELONGO KIYAMBA?",
        ctaTitle: "Zala ndambo ya Uganda2Congo.",
        ctaText: "Yeba nini esalaka soki Uganda mpe Kongo kokambola.",
        listBusiness: "Teika Likobo Yoko",
        footerText: "Kokambola banto, bikobo mpe mahina kati ya Uganda mpe Kongo.",
        platform: "Nzela",
        business: "Likobo",
        legal: "Mibeko",
        privacy: "Sombeko",
        terms: "Mituka",
        contact: "Kokambolana",
        allRightsReserved: "Moto yoko ayaka.",
        transport: "Lokondisi",
        businessSupport: "Msaada wa Likobo"
    }
};


// ===================================================
// MOBILE MENU
// ===================================================

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        menuButton.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuButton.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.remove('open');
            menuButton.classList.remove('active');
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('open');
            menuButton.classList.remove('active');
        }
    });
}


// ===================================================
// LANGUAGE SELECTOR
// ===================================================

const languageButton = document.getElementById('languageButton');
const languageMenu = document.getElementById('languageMenu');
const selectedLanguage = document.getElementById('selectedLanguage');

if (languageButton && languageMenu) {
    languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        languageMenu.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageMenu.contains(e.target) && !languageButton.contains(e.target)) {
            languageMenu.classList.remove('open');
        }
    });

    // Language selection
    const languageOptions = languageMenu.querySelectorAll('button');
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.language;
            const langNames = {
                en: 'English',
                lg: 'Luganda',
                sw: 'Kiswahili',
                fr: 'Français',
                ln: 'Lingála'
            };

            if (selectedLanguage) {
                selectedLanguage.textContent = langNames[lang];
            }

            // Update page content
            updatePageLanguage(lang);

            // Save preference
            localStorage.setItem('u2c_language', lang);

            languageMenu.classList.remove('open');
        });
    });
}

function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('u2c_language') || 'en';
    updatePageLanguage(savedLang);

    const langNames = {
        en: 'English',
        lg: 'Luganda',
        sw: 'Kiswahili',
        fr: 'Français',
        ln: 'Lingála'
    };

    if (selectedLanguage) {
        selectedLanguage.textContent = langNames[savedLang];
    }
});


// ===================================================
// ACTIVE NAV LINK
// ===================================================

function setActiveNavLink() {
    const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === 'index.html' && currentPage === '') {
            link.classList.add('active');
        } else if (href === currentPage) {
            link.classList.add('active');
        } else if (href === '#' && currentPage === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', setActiveNavLink);
