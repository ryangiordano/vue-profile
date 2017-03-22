<template lang="html">
<div class="sub-menu">
<p>This is the status menu</p>
    <character-select @click.native="selectCharacter({name:'Ryan'})"></character-select>
    <transition @enter="scaleYEnter"><app-bio :name="selectedCharacter" v-if="selectedCharacter" :character="selectedCharacter"></app-bio></transition>
</div>
</template>

<script>
import CharacterSelect from './Status/CharacterSelect.vue';
import Bio from './status/Bio.vue';
import {AnimationMixin} from '../../mixins/Animations';
export default {
  mixins:[AnimationMixin],
  data:function(){
    return{
      selectedCharacter:null
    }
  },
  components:{
    characterSelect:CharacterSelect,
    appBio:Bio
  },
  created(){
    this.$emit('pageLoad',{stateText:'A general overview of myself.'})
  },
  methods:{
    selectCharacter(e){
      console.log(e);
      this.selectedCharacter=e;
    }
  }
}
</script>

<style scoped>

</style>
