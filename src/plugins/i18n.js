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
        bioTxt1: 'Computer Science & Media Applications Master',
        bioTxt2: 'Gamification Geek',
        degree: 'Degree',
        birthday: 'October 2nd, 1988',
        birthday_label: 'Birthday',
        years: 'years',
        location: 'Schwaig near Nuremberg',
        location_label: 'Location',
        keywords: 'Keywords',
        currently: 'Currently',
        personal: 'Personal',
        experience: 'Experience',

        education: 'Education',
        details: 'more details',
        education1: 'Master of Science, Computer Science and Media Applications',
        education1_1: 'Technische Hochschule Luebeck',
        education1_2: 'Interactive 3D, Human-Computer-Interaction, Gamification',
        education1_3: 'Master\'s Thesis',
        education1_4: '"Conception and development of a gamified human-centered design tool to support and motivate' +
            'the development of IT projects"',
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
        top_skills: 'Top Skills',
        top_skills_text: 'JavaScript, Angular, Typescript, Java EE, Adobe Photoshop & Illustrator',
        social_skills: 'Social Skills',
        social_skills_text: 'CliftonStrengths: Empathy, Adaptability, Communication, Relator, Includer',
        current_skills: 'Current hobbies',
        current_skills_text_1: 'Solving Advent of Code 2020 puzzles.',
        current_skills_text_2: 'Building a mobile game called "Alpacas in Space".',
        search: 'What are you searching for?',
        search_button: 'Search my skills',

        work: 'Work & Projects',

        portfolio_button_show: 'Open Portfolio',
        portfolio_button_hide: 'Close Portfolio',
        game: 'Game Design & Development',
        logo: 'Logo Design',
        motion: 'Motion Graphics',
        app: 'App Development',

        weebo_title: 'Human-Centered Design Tool with Gamification (Weebo)',
        weebo_description: 'As part of my master\'s thesis, I developed a progressive web app (PWA) to motivate ' +
            'stakeholders of IT projects during development and to support them with the human-centered design approach.',
        weebo_tags: 'PWA, Vue.js, HCD',
        doit_title: 'Do or do not, there is no try',
        doit_description: 'Also during my media computer science studies, I developed a simple to-do list app.',
        doit_tags: 'Java',
        ais_title: 'Alpacas in Space',
        ais_description: 'As a pastime during the Corona pandemic, I started developing a mobile game. As a feature, ' +
            'I chose 2D graphics with traditional frame-by-frame animation and watercolor techniques. The game can be ' +
            'played with up to 8 people and is intended to promote communication and collaboration among each other.',
        ais_tags: 'Unity2D, C#, Multiplayer, Mirror',
        citw_title: 'Cats in the Woods',
        citw_description: 'I was able to develop and present a fully designed, playable level made in Unity3D for the ' +
            '"Game Design" module of my media computer science studies. I also learned how to create and maintain a ' +
            'game design document.',
        citw_tags: 'Unity3D, C#, GDD',
        logo_description: 'For various customers I designed logos in Adobe Illustrator to practise my skills in' +
            'designing, composing and marketing ideas.',
        logo_tags: 'Chancellery, Real estate, Music, Yoga trainer, Pets, Entertainment, Craftsman',
        motion_description: 'During my master\'s degree in media computer science, I was able to gain experience in ' +
            'creating videos and motion graphics. For this I used Adobe After Effects and various techniques such as ' +
            'green screen, vector graphics, cutouts, etc.',
        motion_tags: 'Moton Graphics Interfaces, Adobe After Effects',

        certs: 'Certification',
        cert6_title: 'Master of Science with distinction',
        cert6_description: 'TH Lübeck - 2020',
        cert5_title: 'Angular & Typescript Intensive Training',
        cert5_description: 'workshops.de - 2020',
        cert4_title: 'Machine Learning Hackathon - Creative Award',
        cert4_description: 'immowelt AG - 2019',
        cert3_title: 'Camunda BPM for Java Developers',
        cert3_description: 'camunda services GmbH - 2019',
        cert2_title: 'Java EE 8 Update',
        cert2_description: 'New Elements GmbH - 2019',
        cert1_title: 'AEM Sites: Advanced Developer',
        cert1_description: 'Adobe - 2015',
        cert0_title: 'Agile and Scrum Basics',
        cert0_description: 'HOOD GmbH - 2014',

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
        personal: 'Persönlich',
        experience: 'Erfahrung',

        education: 'Ausbildung',
        details: 'mehr Details',
        education1: 'Master of Science, Medieninformatik',
        education1_1: 'Technische Hochschule Lübeck',
        education1_2: 'Interactive 3D, Human-Computer-Interaction, Gamification',
        education1_3: 'Masterarbeit',
        education1_4: '"Konzeption und Entwicklung eines gamifizierten Human-Centered Design Tools zur Unterstützung' +
            'und Motivation bei der Entwicklung von IT-Projekten"',
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
        top_skills: 'Top Fähigkeiten',
        top_skills_text: 'JavaScript, Angular, Typescript, Java EE, Adobe Photoshop & Illustrator',
        social_skills: 'Soziale Fähigkeiten',
        social_skills_text: 'CliftonStrengths: Einfühlung, Anpassung, Kommunikation, Bindung, Integration',
        current_skills: 'Momentane Hobbys',
        current_skills_text_1: 'Advent of Code 2020 Rätsel lösen.',
        current_skills_text_2: 'Mobiles Game "Alpacas in Space" entwickeln.',
        search_button: 'Durchsuchen Sie meine Fähigkeiten',
        search: 'Wonach suchen Sie?',

        work: 'Arbeiten & Projekte',

        portfolio_button_show: 'Portfolio öffnen',
        portfolio_button_hide: 'Portfolio schließen',
        game: 'Game Design & Development',
        logo: 'Logo Design',
        motion: 'Motion Graphics',
        app: 'App Development',

        weebo_title: 'Human-Centered Design Tool mit Gamification (Weebo)',
        weebo_description: 'Im Rahmen meiner Masterarbeit habe ich eine progressive Webapp (PWA) entwickelt, um ' +
            'Stakeholder von IT-Projekten während der Entwicklung zu motivieren und in Bezug auf den nutzerzentrierten ' +
            'Designansatz zu unterstützen.',
        weebo_tags: 'PWA, Vue.js, HCD',
        doit_title: 'Do or do not, there is no try',
        doit_description: 'Ebenfalls während meines Medieninformatik-Studiums habe ich im Modul "Mobile App Development" ' +
            'eine einfache ToDo-Listen-App entwickelt.',
        doit_tags: 'Java',
        ais_title: 'Alpacas in Space',
        ais_description: 'Als Zeitvertreib während der Corona-Pandemie habe ich begonnen, ein mobiles Spiel für ' +
            'Smartphones zu entwickeln. Als Merkmal habe ich mich für eine 2D-Grafik mit traditioneller Frame-by-Frame-' +
            'Animation und Aquarelltechnik entschieden. Das Spiel kann mit bis zu 8 Personen gespielt werden und soll ' +
            'Kommunikation und Zusammenarbeit untereinander fördern.',
        ais_tags: 'Unity2D, C#, Multiplayer, Mirror',
        citw_title: 'Cats in the Woods',
        citw_description: 'Ein fertig designtes, spielbares Level konnte ich im Modul "Game Design" meines ' +
            'Medieninformatik-Studiums in Unity3D entwickeln und präsentieren. Außerdem habe ich dabei gelernt, wie ' +
            'ein Game-Design-Dokument erstellt und gepflegt wird.',
        citw_tags: 'Unity3D, C#, GDD',
        logo_description: 'Für verschiedene Kunden habe ich Logos in Adobe Illustrator entworfen, um meine Fähigkeiten' +
            'in Design, Komposition und Ideenvermarktung zu erweitern.',
        logo_tags: 'Kanzlei, Immobilienmakler, Musik, Yoga-Trainer, Tiere, Unterhaltung, Handwerk',
        motion_description: 'Während meines Masterstudiums in Medieninformatik konnte ich Erfahrung in der Erstellung ' +
            'von Videos, bzw. Motion Graphics sammeln. Hierfür benutzte ich das Programm Adobe After Effects und ' +
            'verwendete verschiedene Techniken, wie Greenscreen, Vektorgrafiken, Cutouts usw.',
        motion_tags: 'Motion Graphics Interfaces, Adobe After Effects',

        certs: 'Auszeichnungen',
        cert6_title: 'Master of Science mit Auszeichnung',
        cert6_description: 'TH Lübeck - 2020',
        cert5_title: 'Angular & Typescript Intensivschulung',
        cert5_description: 'workshops.de - 2020',
        cert4_title: 'Machine Learning Hackathon - Kreativpreis',
        cert4_description: 'immowelt AG - 2019',
        cert3_title: 'Camunda BPM für Java-Entwickler',
        cert3_description: 'camunda services GmbH - 2019',
        cert2_title: 'Java EE 8 Update',
        cert2_description: 'New Elements GmbH - 2019',
        cert1_title: 'AEM Sites: Advanced Developer',
        cert1_description: 'Adobe - 2015',
        cert0_title: 'Agile und Scrum Basistraining',
        cert0_description: 'HOOD GmbH - 2014',

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