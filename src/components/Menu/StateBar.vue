<template lang="html">
  <div class="sub-menu" >
    <transition @enter="textEnter" appear><p ref=stateElement>{{stateText}}</p></transition>
    <transition><side-bar v-if="showSidebar"></side-bar></transition>
  </div>
</template>

<script>
import SideBar from
'./SideBar.vue';
import {AnimationMixin} from '../../mixins/Animations';
export default {
  props:['stateText'],
  data:function(){
    return{
      showSidebar:false
    }
  },
  mixins:[AnimationMixin],
  components:{
    sideBar:SideBar
  },
  watch:{
    stateText(e){


    }
  }
}
</script>

<style scoped>
p{
  font-size:24px;
  padding:0;
  margin:0;
}

  .sub-menu{
    margin-top:30px;
  }


</style>
