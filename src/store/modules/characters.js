const state = {
    characters: [
      {
            name: "Ryan Giordano",
            class: "Web Developer",
            startDate: [2014, 6, 10, 0, 0],
            weapon: "Ecma Saber",
            skills: [{
                    name: 'JavaScript',
                    type: ['front-end', 'back-end'],
                    about: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.  Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. ',
                    id: 0,
                    img: 'js.png',
                    lvl: 4
                },
                {
                    name: 'ES6',
                    type: ['front-end', 'back-end'],
                    about: 'ES6 is a significant update to the JavaScript language, and the first update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now. See the ES6 standard for full specification of the ECMAScript 6 language. ES6 includes the following new features: arrows.',
                    id: 0,
                    img: 'es6.jpg',
                    lvl: 4
                },
                {
                    name: 'RxJS',
                    type: ['front-end', 'back-end', 'library'],
                    about: 'RxJS or Reactive Extensions for JavaScript is a library for transforming, composing, and querying streams of data. We mean all kinds of data too, from simple arrays of values, to series of events (unfortunate or otherwise), to complex flows of data.',
                    id: 0,
                    img: 'rxjs.png',
                    lvl: 1
                },
                {
                    name: 'Typescript',
                    type: ['front-end', 'back-end'],
                    about: 'TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.',
                    id: 0,
                    img: 'ts.png',
                    lvl: 2
                },
                {
                    name: 'AngularJS',
                    type: ['front-end', 'framework'],
                    about: 'AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
                    id: 3,
                    img: 'angular.png',
                    lvl: 3
                },
                {
                    name: 'Angular 2',
                    type: ['front-end', 'framework'],
                    about: 'Angular2 is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations to address all of the parts of the developer\'s workflow while building complex web applications.',
                    id: 3,
                    img: 'angular.png',
                    lvl: 4
                },
                {
                    name: 'Vue JS',
                    type: ['front-end', 'framework'],
                    about: 'is an open-source progressive JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is made easy with Vue because it is designed to be incrementally adoptable.',
                    id: 3,
                    img: 'vue.png',
                    lvl: 4
                },
                {
                    name: 'GSAP',
                    type: ['front-end', 'library', 'JavaScript'],
                    about: 'GSAP (Green Sock Animation Platform) is a very fast JavaScript library for animating elements and SVGs on the web.',
                    id: 0,
                    img: 'gsap.png',
                    lvl: 5
                },
                {
                    name: 'jQuery',
                    type: ['front-end', 'library', 'JavaScript'],
                    about: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
                    id: 0,
                    img: 'jquery.png',
                    lvl: 5
                },
                {
                    name: 'HTML 5',
                    type: ['front-end'],
                    about: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.',
                    id: 1,
                    img: 'html5.png',
                    lvl: 5
                },
                {
                    name: 'CSS 3',
                    type: ['front-end'],
                    about: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.',
                    id: 2,
                    img: 'css3.png',
                    lvl: 4
                },
                {
                    name: 'Bootstrap',
                    type: ['front-end', 'framework', 'CSS'],
                    about: 'Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites.',
                    id: 3,
                    img: 'bootstrap.png',
                    lvl: 5
                },
                {
                    name: 'Sass',
                    type: ['front-end', 'CSS'],
                    about: 'The indented syntax is a metalanguage. SCSS is a nested metalanguage, as valid CSS is valid SCSS with the same semantics. Sass supports integration with the Firefox extension Firebug. SassScript provides the following mechanisms: variables, nesting, mixins, and selector inheritance.',
                    id: 3,
                    img: 'sass.png',
                    lvl: 3
                },
                {
                    name: 'PHP',
                    type: ['back-end'],
                    about: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
                    id: 3,
                    img: 'php.png',
                    lvl: 2
                },
                {
                    name: 'NodeJS',
                    type: ['back-end'],
                    about: 'Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of server tools and applications.',
                    id: 0,
                    img: 'node.png',
                    lvl: 3
                },
                {
                    name: 'MongoDB',
                    type: ['back-end', 'database'],
                    about: 'MongoDB is an open source database that uses a document-oriented data model. It is one of several database types to arise in the mid-2000s under the NoSQL banner. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents.',
                    id: 0,
                    img: 'mongo.png',
                    lvl: 2
                },
                {
                    name: 'SQL',
                    type: ['back-end', 'database'],
                    about: 'SQL is used to communicate with a database. It is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.',
                    id: 0,
                    img: 'sql.png',
                    lvl: 1
                },
                {
                    name: 'Firebase',
                    type: ['back-end', 'database'],
                    about: 'Realtime Database. Firebase provides a realtime database and backend as a service. The service provides application developers an API that allows application data to be synchronized across clients and stored on Firebase\'s cloud.',
                    id: 0,
                    img: 'firebase.png',
                    lvl: 2
                },


            ],
            img: {
                main: "portrait.jpg",
                alt: "ryan-alt.jpg"
            },
            contact:{
              email:'rgiorda1@gmail.com',
              phone:'404-234-3366',

            },
            about: "A web developer and designer with a passion for making new and intesting ways for people to interact with data.  Proficient in the arts of HTML, CSS, and JavaScript yet still finding something new to learn every day.  Has knowledge of several frameworks for making applications, such as: AngularJS, Angular 2, Vue JS, and Laravel. A believer in constant and never-ending improvement, he splits his time between the computer and the gym.",
            id: 0,
            blurb: 'Kind of an okay guy.',
            education: ['Bachelors'],
            stats: {
                currentHP: 800,
                maxHP: 800,
                currentMP: 200,
                maxMP: 200,
                limit: 0,
                design: 13,
                backend: 8,
                frontend: 15,
                grit: 20
            },
            links: [{
                    site: 'Github',
                    link: 'https://github.com/thedaruma',
                    img: 'github.png'
                },
                {
                    site: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/ryan-giordano-a9b11488/',
                    img: 'linkedin.png'
                },
                {
                  site:'Resume',
                  link:'https://s3.us-east-2.amazonaws.com/rgiordano.com/src/resume/Resume2017.pdf',
                  img:'resume.svg'
                }
            ]
        },
        {
            name: "Lo Giordano",
            class: "Analytics Consultant",
            startDate: [2012, 2, 10, 0, 0],
            weapon: "Python Blade",

            img: {
                main: "lo.jpg",
                alt: "lo-alt.jpg"
            },
            contact:{
              email:'loxgio@gmail.com',
              phone:'404-234-3366',

            },
            skills: [{
                    name: 'Python',
                    about: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.',
                    id: 4,
                    img: 'python.png',
                    lvl: 5
                },
                {
                    name: 'JavaScript',
                    about: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.  Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.',
                    id: 0,
                    img: 'js.png',
                    lvl: 4
                },
                {
                    name: 'SQL',
                    type: ['back-end', 'database'],
                    about: 'SQL is used to communicate with a database. It is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.',
                    id: 0,
                    img: 'sql.png',
                    lvl: 4
                },
                {
                    name: 'Qlikview',
                    about: 'QlikView is a business discovery platform that provides self-service BI for all business users in organizations. With QlikView you can analyze data and use your data discoveries to support decision making.',
                    id: 1,
                    img: 'qlikview.png',
                    lvl: 5
                },
                {
                    name: 'SAS',
                    about: 'SAS is an integrated software suite for advanced analytics, business intelligence, data management, and predictive analytics. You can use SAS software through both a graphical interface and the SAS programming language, or Base SAS.',
                    id: 2,
                    img: 'sas.png',
                    lvl: 4
                },
                {
                    name: 'Tableau',
                    about: 'Tableau is a business intelligence (BI) tool that can help you create beautiful and visually-appealing reports, charts, graphs and dashboards using your data. These reports are interactive and can easily be shared with anyone.',
                    id: 3,
                    img: 'tableau.png',
                    lvl: 3
                },
                {
                    name: 'Java',
                    about: 'Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable.',
                    id: 3,
                    img: 'java.png',
                    lvl: 3
                },
                {
                    name: 'Hadoop',
                    about: 'Hadoop is an open source, Java-based programming framework that supports the processing and storage of extremely large data sets in a distributed computing environment. It is part of the Apache project sponsored by the Apache Software Foundation.',
                    id: 3,
                    img: 'hadoop.png',
                    lvl: 3
                },
                {
                    name: 'R',
                    about: 'R is an open source programming language and software environment for statistical computing and graphics that is supported by the R Foundation for Statistical Computing.',
                    id: 3,
                    img: 'r.svg',
                    lvl: 3
                },

            ],
            about: "A lifelong and avid learner, Lo Giordano is a datamancer who finds beauty in patterns and trends in complex systems. She creates enterprise-level applications to help analysts better spot trends in big data. Perpetually curious with an insatiable appetite for books, Lo can almost always be found with her fingertips to the keyboard.  When she isn't eyes-deep in code, she's enjoying a good movie or making some of the most delicious Sichuanese food you can imagine.",
            blurb: "She's also kind of cute.",
            education: ['BA Pharmacy', 'BA Psychology', 'MS Complex System'],
            id: 1,
            stats: {
                currentHP: 800,
                maxHP: 800,
                currentMP: 200,
                maxMP: 200,
                limit: 0,
                design: 6,
                backend: 15,
                frontend: 12,
                grit: 20
            },
            links: [
                {
                    site: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/logiordano/',
                    img: 'linkedin.png'
                }
            ]
        }
    ],
}
const getters = {
    characters: state => {
        return state.characters
    },


}
const mutations = {
    // increment: (state, payload) => {
    //     state.counter += payload
    // },
    // decrement: (state, payload) => {
    //     state.counter -= payload;
    // },
}
const actions = {
    // increment: (context,payload) => {
    //     context.commit('increment',payload.by);
    // },
    //object destructuring syntax:
    //takes a property from an object, throws away all other pieces of it and only uses the method/property you choose
    // increment2: ({
    //     commit
    // }, payload) => {
    //     commit('increment', payload.by);
    // },
    // asyncIncrement: ({
    //     commit
    // }, payload) => {
    //     setTimeout(() => {
    //         commit('increment', payload.by)
    //     }, payload.duration);
    // },
    // asyncDecrement: ({
    //     commit
    // }, payload) => {
    //     setTimeout(() => {
    //         commit('decrement', payload.by)
    //     }, payload.duration);
    // },
}



export default {
    state,
    mutations,
    actions,
    getters
}
