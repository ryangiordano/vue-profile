const state = {
    quests: [{
      name:"Redesign Website",
      link:"https://www.iiicareer.com",
      copy:"About the quest",
      xpSkills:[{name:'JavaScript',img:'js.png',val:5},{name:'jQuery',img:'jquery.png',val:5}],
      charId:0

    },
    {
      name:"Magazine Site",
      link:"https://www.sakura.com",
      copy:"About the quest",
      xpSkills:[{name:'JavaScript',img:'js.png',val:5},{name:'jQuery',img:'jquery.png',val:5}],
      charId:0

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
