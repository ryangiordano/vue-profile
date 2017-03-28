const state = {
    quests: [{
      name:"Redesign Website",
      summary:"",
      pages:[
        {pageText:"This is some text from the page.",animationComponent:'website-1'},
        {pageText:"This is some text from the page.",animationComponent:'website-2'},
        {pageText:"This is some text from the page.",animationComponent:'website-3'},
        {pageText:"This is some text from the page.",animationComponent:'website-4'},
        {pageText:"This is some text from the page.",animationComponent:'website-5'},
      ],
      xpSkills:[{name:'JavaScript',img:'js.png',val:5},{name:'jQuery',img:'jquery.png',val:5}]
      xpSkills:[{name:'HTML',img:'js.png',val:5},{name:'CSS',img:'js.png',val:5},{name:'Bootstrap',img:'js.png',val:5},]

    }],
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
