import Vue from 'vue';
import Vuex from 'vuex';
import characters from './modules/characters';
import skills from './modules/skills';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    value:'f'
  },
  getters:{
    value:state=>{
      return state.value;
    }
  },
  //mutations always have to be synchronous;  It is better practice to have actions commit your mutations.  Consider using only actions to mutate your components.
  mutations:{
    updateValue:(state,payload)=>{
      state.value = payload;
    }
  },
  //actions solve mutation's synchronous limitations.
  actions:{
    updateValue:({commit},payload)=>{
      console.log(payload);
      commit('updateValue',payload)
    }
  },
  modules:{
    characters,
    skills
  }
})
