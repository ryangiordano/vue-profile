const state = {
  skills:[
    {name:'JavaScript',about:'About JavaScript',id:0},
    {name:'HTML',about:'About HTML',id:1},
    {name:'CSS',about:'About CSS',id:2},
    {name:'PHP',about:'About PHP',id:3},
    {name:'Python',about:'About Python',id:4}
  ]
}
const getters = {
    skills: state => {
        return state.skills
    },
    character:(state,payload)=>{
      return state.characters.find(character=>{
        return character.id===payload;
      })
    }

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
