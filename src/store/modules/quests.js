const state = {
    quests: [{
            name: "Relaunch Jobseeker Website",
            complete: true,
            id: 0,
            images: [{
                    alt: 'name',
                    file: 'interesse/2.jpg'
                },
                {
                    alt: 'name',
                    file: 'interesse/3.jpg'
                },
                {
                    alt: 'name',
                    file: 'interesse/4.jpg'
                }
            ],
            links: [{
                url: "https://www.iiicareer.com",
                text: 'Interesse Website'
            }],
            copy: "Reimagined the website of a Japanese Bilingual Recruiting Agency.  I self-studied HTML5, CSS3 and JavaScript, picking up the Bootstrap framework to create a more user-friendly website that resulted in a 30% increase in registered accounts.  I redesigned/recreated the existing site allowing it to be responsively displayed on tablet and mobile devices.  Also developed an interactive job-search map that displayed jobs by selected region, as well as an improved search function.  I picked up PHP on the fly to make RESTful calls to the database to display this information.  The site was developed in both English and Japanese.",
            skills: [{
                name: 'JavaScript',
                img: 'js.png',
                xp: 5,
                type: 0
            }, {
                name: 'PHP',
                img: 'php.png',
                xp: 30,
                type: 1
            }, {
                name: 'HTML5',
                img: 'html.png',
                xp: 20,
                type: 0
            }, {
                name: 'CSS3',
                img: 'css.png',
                xp: 20,
                type: 0
            }],
            charId: 0
        },
        {
            name: "Account System for Job Seekers",
            complete: true,
            id: 1,
            images: [{
                alt: 'name',
                file: 'interesse/1.jpg'
            }],
            links: [{
                url: "http://www.iiicareer.com/applicant/members/jp/",
                text: 'Account Portal'
            }],
            copy: "In addition to redesigning the company website, I made an account system with PHP and Filemaker for the backend and JavaScript/HTML/CSS for the interface that enabled job seekers to register with their resumes and 'favorite' jobs that they had an interest in.  This was important not only to the job seeker, but to the consultants and recruiters who were able to view this data on the backend and make meaningful decisions on how to proceed with certain qualified candidates. Among the tools I made to visualize this data was a mapping system that drew a route from the jobsite to the candidate's listed address to see how feasible it would be to place them.  It also compared salary and industry preferences to the job they 'favorited', giving a broader picture of the data at hand to company employees.",
            skills: [{
                name: 'PHP',
                img: 'php.png',
                xp: 15,
                type: 1
            }, {
                name: 'JavaScript',
                img: 'js.png',
                xp: 5,
                type: 0
            }, {
                name: 'Filemaker',
                img: 'js.png',
                xp: 5,
                type: 1
            }],
            charId: 0
        },
        {
            name: "Digital Magazine Site",
            complete: true,
            id: 2,
            images: [{
                    alt: 'name',
                    file: 'interesse/5.jpg'
                },
                {
                    alt: 'name',
                    file: 'interesse/6.jpg'
                }
            ],
            links: [{
                url: "http://www.iii-media.net/SAKURA",
                text: 'Sakura Japanese Language Digital Newspaper'
            }],
            copy: "I was tasked with updating a static HTML Japanese language Community Newspaper website, which required biweekly updates that took roughly three to four hours of time, from updating the HTML elements individually, to creating digital magazine issues.  I saw that this process could be streamlined, and completely redesigned/recreated the website using AngularJS and Filemaker.  I created a database and catelogged the data, then created a single page aplication that pulled the data from the database.  I also added search and filter functionality by release month and year so that new visitors were able to keep up with events in the Japanese community.",
            skills: [{
                name: 'AngularJS',
                img: 'angular.png',
                xp: 30,
                type: 2
            }, {
                name: 'HTML5',
                img: 'html.png',
                xp: 10,
                type: 0
            }, {
                name: 'CSS3',
                img: 'css.png',
                xp: 10,
                type: 0
            }, {
                name: 'PHP',
                img: 'php.png',
                xp: 10,
                type: 1
            }],
            charId: 0
        },
        {
            name: "Dynamic Modules for Digital Signage",
            complete: true,
            id: 3,
            links: [{
                url: "https://codigo.gocodigo.net/Preview/Content/413969/?handle=billnye",
                text: 'Bill Nye Twitter'
            },
            {
                url: "https://codigo.gocodigo.net/Preview/Content/421089/",
                text: 'Word of the Day'
            }],
            copy: "Developed 'smart content' for a digital design agency's digital signage product.  Created reusable modules using JavaScript(ES6) and jQuery that could be added to digital signage to display dynamic data from Twitter, AP News, the National Weather Service, Google Docs, Youtube, Vimeo and other services.  Users can customize the output by passing parameters into the digital signage editor.",
            skills: [{
                name: 'JavaScript',
                img: 'js.png',
                xp: 5,
                type: 0
            }, {
                name: 'ES6',
                img: 'es6.png',
                xp: 5,
                type: 0
            }, {
                name: 'jQuery',
                img: 'jquery.png',
                xp: 5,
                type: 0
            }],
            charId: 0
        },
        {
            name: "Develop Kiosks for Credit Unions",
            complete: true,
            id: 4,
            images: [{
                    alt: 'name',
                    file: 'codigo/1.jpg'
                },
                {
                    alt: 'name',
                    file: 'codigo/2.jpg'
                },
                {
                    alt: 'name',
                    file: 'codigo/3.jpg'
                },
                {
                    alt: 'name',
                    file: 'codigo/4.jpg'
                }
            ],
            links: [{
                    url: "http://www.gocodigo.com/customers/mitfcu/kiosk/",
                    text: 'MIT Kiosk'
                },
                {
                    url: "http://www.gocodigo.com/customers/firstmidwest/kiosk/",
                    text: 'First Midwest Kiosk'
                },
                {
                    url: "http://www.gocodigo.com/customers/champion/kiosk/",
                    text: 'Champion CCU Kiosk'
                },
                {
                    url: "http://www.gocodigo.com/customers/ardent/kiosk/",
                    text: 'Ardent CU Kiosk'
                },
                {
                    url: "http://www.gocodigo.com/customers/elga/kiosk/",
                    text: 'ELGA CU Kiosk'
                }
            ],
            copy: "Created a series of interactive and informative displays for credit unions and large retailers and institutions. Kiosks were developed for iPads, iPad Pro, and large-format touch-panel devices.  Using GSAP, a JavaScript animation library, I transformed ordinary web-pages into a fluid experience.  Users were able to peruse data about the institution, mail themselves brochures and documents, and enter into branch-specific queues from the kiosk devices.<br><br> I also developed interactive maps and layouts of the institutions the kiosks were housed in.",
            skills: [{
                name: 'JavaScript',
                img: 'js.png',
                xp: 20,
                type: 0
            }, {
                name: 'jQuery',
                img: 'jquery.png',
                xp: 5,
                type: 0
            }, {
                name: 'HTML5',
                img: 'html.png',
                xp: 10,
                type: 0
            }, {
                name: 'CSS3',
                img: 'css.png',
                xp: 10,
                type: 0
            }],
            charId: 0
        },
        {
            name: "Web Feeds Parser with NodeJS",
            complete: true,
            id: 5,
            links: 0,
            copy: "Using NodeJS, I wrote a small application that received information about webfeeds, photos, and video files downloaded from the AP News Service, then created and served up a json file with news story summaries and links to associated media for display on digital signage products.",
            skills: [{
                name: 'JavaScript',
                img: 'js.png',
                xp: 10,
                type: 0
            }, {
                name: 'NodeJS',
                img: 'nodejs.png',
                xp: 20,
                type: 1
            }],
            charId: 0
        },
        {
            name: "Interactive Map Module",
            complete: false,
            id: 6,
            links: [{
                url: "http://www.gocodigo.com",
                text: 'Codigo'
            }],
            copy: "Created a module for use with kiosks that allows users to view and interact with a blueprint map of an area, revealing information about various points of interest.  Users can also see, depending on the location of the kiosk, where they are in the building.",
            skills: [{
                name: 'JavaScript',
                img: 'js.png',
                xp: 15,
                type: 0
            }, {
                name: 'jQuery',
                img: 'jquery.png',
                xp: 5,
                type: 0
            }, {
                name: 'HTML5',
                img: 'html.png',
                xp: 5,
                type: 0
            }],
            charId: 0
        },
        // {
        //     name: "Pharmacy App",
        //     complete: true,
        //     id: 7,
        //     copy: "Made a kickass pharmacy app using sass and stuff.  I don't know the specifics but apparently it was pretty badass.",
        //     skills: [{
        //         name: 'sass',
        //         img: 'js.png',
        //         xp: 5,
        //         type: 0
        //     }, {
        //         name: 'clickview',
        //         img: 'jquery.png',
        //         xp: 5,
        //         type: 0
        //     }],
        //     charId: 1
        // },
    ],
}
const getters = {
    quests: state => {
        return state.quests
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
