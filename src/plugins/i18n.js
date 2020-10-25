import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        january: 'January',
        march: 'March',
        july: 'July',
        august: 'August',
        december: 'December',

        explore: 'Explore',
        profile: 'Profile',
        portfolio: 'Portfolio',
        home: 'HOME',

        welcomeMsg: 'Hello, I am',
        city: 'near Nuremberg',
        bioTxt: 'I am currently working as an agile Full Stack Developer with specializations in Front End Development. ' +
            'In addition to my job, I practice various media computer design works, such as media and graphic design, ' +
            'game development, web and app development, 2D/3D animation and UX/UI/HC design.',
        bioTxt0: 'Diversive Developer',
        bioTxt1: 'Media Computer Master',
        bioTxt2: 'Gamification Geek',
        degree: 'Degree',
        birthday: 'October 2nd, 1988',
        birthday_label: 'Birthday',
        years: 'years',
        location: 'Schwaig near Nuremberg',
        location_label: 'Location',
        keywords: 'Keywords',
        currently: 'Currently',
        certs: 'Certification',
        personal: 'Personal',
        experience: 'Experience',

        education: 'Education',
        details: 'more details',
        education1: 'Master of Science, Media Computer Science',
        education1_1: 'Technische Hochschule Luebeck',
        education1_2: 'Interactive 3D, Human-Computer-Interaction, Gamification',
        education1_3: 'Master\'s Thesis',
        education1_4: '"Conception and development of a gamified human-centered design tool to support and motivate the development of IT projects"',
        education2: 'Bachelor of Science, Computer Science',
        education2_1: 'Friedrich-Alexander-University Erlangen-Nuremberg',
        education2_2: 'Medical Computer Science, Database Systems, Media Computer Science',
        education2_3: 'Bachelor\'s Thesis',
        education2_4: '"Ontological modeling of various types of information"',
        education2_5: 'Artificial Intelligence Chair',
        education3: 'Abitur (High School Diploma)',
        education3_1: 'Martin-Behaim-Gymnasium Nuremberg',
        focus: 'Focus',

        expertise: 'Expertise',
        today: 'today',
        detailed: 'Detailed career',
        expertise1: 'Full Stack Developer (Java, Angular, Typescript)',
        expertise1_1: 'Sopra Financial Technology GmbH, Nuremberg',
        expertise1_2: 'Java, Angular, Tests, Styleguide, CMS, BPMN, 3rd Lvl Support, Scrum...',
        expertise2: 'Application & Systems Developer',
        expertise2_1: 'Consorsbank by BNP Paribas, Nuremberg',
        expertise2_2: 'Java, JSP, Javascript, Angular,... Umsatzübersicht, Sparziele, Umsatzkategorisierung,...',
        expertise3: 'Web Developer',
        expertise3_1: 'SSI - Scuba Schools International GmbH, Wendelstein',
        expertise3_2: 'PHP, HTML, CSS, Neugestaltung des Internetauftritts, Optimierung Newsletter,...',
        tasks: 'Tasks',

        knowledge: 'Knowledge',
        search: 'What are you searching for?',

        work: 'Work & Projects',

        portfolio_button: 'View Portfolio Page',

        contact: 'Contact me',
        contact_1: 'If you want to get in contact with me, send me a message or add me on',
        contact_2: 'or',
        contact_3: '!',

    },
    'de': {
        january: 'Januar',
        march: 'März',
        july: 'Juli',
        august: 'August',
        december: 'Dezember',

        explore: 'Erkunden',
        profile: 'Profil',
        portfolio: 'Portfolio',
        home: 'HAUPTSEITE',

        welcomeMsg: 'Hallo, ich bin',
        city: 'Nähe Nürnberg',
        bioTxt: 'Derzeit arbeite ich als agile Full Stack Entwicklerin mit Spezialisierung in der Front-End-Entwicklung. ' +
            'Neben dem Beruf übe ich mich in verschiedenen Themen der Medieninformatik, wie beispielsweise Medien- und ' +
            'Grafikdesign, Spieleentwicklung, Web- und App-Entwicklung, 2D/3D-Animation und UX/UI/HC-Design.',
        bioTxt0: 'Diversive Developer',
        bioTxt1: 'Media Computer Master',
        bioTxt2: 'Gamification Geek',
        degree: 'Abschluss',
        birthday: '2. Oktober 1988',
        birthday_label: 'Geburtstag',
        years: 'Jahre',
        location: 'Schwaig bei Nürnberg',
        location_label: 'Wohnort',
        keywords: 'Stichworte',
        currently: 'Momentan',
        certs: 'Zertifikate',
        personal: 'Persönlich',
        experience: 'Erfahrung',

        education: 'Ausbildung',
        details: 'mehr Details',
        education1: 'Master of Science, Medieninformatik',
        education1_1: 'Technische Hochschule Lübeck',
        education1_2: 'Interactive 3D, Human-Computer-Interaction, Gamification',
        education1_3: 'Masterarbeit',
        education1_4: '"Konzeption und Entwicklung eines gamifizierten Human-Centered Design Tools zur Unterstützung und Motivation bei der Entwicklung von IT-Projekten"',
        education2: 'Bachelor of Science, Informatik',
        education2_1: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
        education2_2: 'Medizinische Informatik, Datenbanksysteme, Medieninformatik',
        education2_3: 'Bachelorarbeit',
        education2_4: '"Ontologische Modellierung verschiedener Informationsarten"',
        education2_5: 'Lehrstuhl für künstliche Intelligenz',
        education3: 'Abitur',
        education3_1: 'Martin-Behaim-Gymnasium Nürnberg',
        focus: 'Schwerpunkte',

        expertise: 'Beruflicher Werdegang',
        today: 'heute',
        detailed: 'Detaillierter Werdegang',
        expertise1: 'Full-Stack-Entwicklerin',
        expertise1_1: 'Sopra Financial Technology GmbH, Nürnberg',
        expertise1_2: 'Java, Angular, Tests, Styleguide, CMS, BPMN, 3rd Lvl Support, Scrum...',
        expertise2: 'Anwendungs- und Systementwicklerin',
        expertise2_1: 'Consorsbank by BNP Paribas, Nürnberg',
        expertise2_2: 'Java, JSP, Javascript, Angular,... Umsatzübersicht, Sparziele, Umsatzkategorisierung,...',
        expertise3: 'Webentwicklerin',
        expertise3_1: 'SSI - Scuba Schools International GmbH, Wendelstein',
        expertise3_2: 'PHP, HTML, CSS, Neugestaltung des Internetauftritts, Optimierung Newsletter,...',
        tasks: 'Aufgaben',

        knowledge: 'Kenntnisse',
        search: 'Wonach suchen Sie?',

        work: 'Arbeiten & Projekte',

        portfolio_button: 'Zum Portfolio',

        contact: 'Kontakt',
        contact_1: 'Senden Sie mir eine Nachricht oder vernetzen Sie sich mit mir auf',
        contact_2: 'oder',
        contact_3: '!',
    }
};

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'de',
    messages
});

export default i18n;