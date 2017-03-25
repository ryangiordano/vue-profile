const state = {
    characters: [
      {
        name:"Ryan Giordano",
        class:"Web Developer",
        startDate:[2014,6,10,0,0],
        weapon: "Ecma Saber",
        skills:[
          {name:'JavaScript',about:'About JavaScript',id:0,img:'js-icon.svg',lvl:5},
          {name:'HTML',about:'About HTML',id:1,img:'html-icon.svg',lvl:5},
          {name:'CSS',about:'About CSS',id:2,img:'css-icon.svg',lvl:5},
          {name:'PHP',about:'About PHP',id:3,img:'php-icon.svg',lvl:5},

        ],
        img:{
          main:"portrait.jpg",
          alt:"ryan-alt.jpg"
        },
        about:"A web developer and designer with a passion for making new and intesting ways for people to interact with data.  Proficient in the arts of HTML, CSS, and JavaScript yet still finding something new to learn every day.  Has knowledge of several frameworks for making applications, such as: AngularJS, Angular 2, Vue JS, and Laravel. A believer in constant and never-ending improvement, he splits his time between the computer and the gym.",
        id:0,
        blurb:'Kind of an okay guy.',
        education:['Bachelors'],
        stats:{
          currentHP:800,
          maxHP:800,
          currentMP:200,
          maxMP:200,
          limit: 0,
          spd:6,
          str:15,
          sta:12,
          cha:4
        },
        links:[
          {site:'Github',link:'https://github.com/thedaruma', img:'assets/img/github.png'},
          {site:'LinkedIn',link:'https://www.linkedin.com/in/ryan-giordano-a9b11488/', img:'assets/img/linkedin.png'}
        ]
      },
      {
        name:"Zhejing Luo",
        class:"Data Analyst",
        startDate:[2012,2,10,0,0],
        weapon: "Python Blade",

        img:{
          main:"lo.jpg",
          alt:"lo-alt.jpg"
        },
        skills:[
          {name:'Python',about:'About Python',id:4,img:'py-icon.svg',lvl:5}

        ],
        about:"A lifelong and avid learner, Zhejing 'Lo' Luo is a datamancer who finds beauty in patterns and trends in complex systems. She creates enterprise-level applications to help analysts better spot trends in big data. Perpetually curious with an insatiable appetite for books, Lo can almost always be found with her fingertips to the keyboard.  When she isn't eyes-deep in code, she's enjoying a good movie or making some of the most delicious Sichuanese food you can imagine.",
        blurb:"She's also kind of cute.",
        education:['BA Pharmacy', 'BA Psychology','MS Complex System'],
        id:1,
        stats:{
          currentHP:800,
          maxHP:800,
          currentMP:200,
          maxMP:200,
          limit: 0,
          spd:6,
          str:15,
          sta:12,
          cha:4
        },
        links:[
          {site:'Github',link:'https://github.com/loxgio', img:'assets/img/github.png'},
          {site:'LinkedIn',link:'https://www.linkedin.com/in/logiordano/', img:'assets/img/linkedin.png'}
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
