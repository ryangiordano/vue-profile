<template lang="html">
  <ul class="star">
    <transition-group @enter="fadeEnterNew" appear><li v-for="(star,index) in this.skill.lvl" :key="index" v-if="showStars">
      <img :src="'../../../../src/assets/img/star.svg'" class="star"alt="">
    </li></transition-group>
  </ul>
</template>
<!-- '../../../../src/assets/img/star.svg' -->
<script>
import {AnimationMixin} from '../../../mixins/Animations';
export default {
  mixins:[AnimationMixin],
  props:['skill'],
  data:function(){
    return{
      skillLvl:0,
      duration:.5,
      showStars:true
    }
  },
  computed:{
  },
  created(){
    // setTimeout(()=>{
    //   this.showStars=true;
    // },1000)
  },
  methods:{
    fadeEnterNew(el,done){
      let img = document.querySelectorAll('star');
      let tl = new TimelineMax;
      tl.staggerFrom(img,.5,{
        opacity:0,
        onComplete:done
      },.2)
    },
  }
}
</script>

<style lang="css">
.star{
  padding:0;
  
}
.star li{
  list-style:none;
  display:inline;
  margin:0 5px;
}
.star img{
  height:20px;
  transition:all .3s ease;
}
.star img:hover{
  height:25px;
  transition:all .3s ease;
}
</style>
