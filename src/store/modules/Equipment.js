const state = {
    equipment: [
      {name:'PhotoShop',about:'About PhotoShop',id:2,img:'css-icon.svg',lvl:4},
      {name:'Illustrator',about:'About Illustrator',id:2,img:'css-icon.svg',lvl:4},
      {name:'Filemaker',about:'About Filemaker',id:1,img:'html-icon.svg',lvl:5},
      {name:'Atom',about:'About Filemaker',id:1,img:'html-icon.svg',lvl:5},
      {name:'Github',about:'About Filemaker',id:1,img:'html-icon.svg',lvl:5},
      {name:'Atom',about:'About Filemaker',id:1,img:'html-icon.svg',lvl:5},
    ],
}
const getters = {
    equipment: state => {
        return state.equipment
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
