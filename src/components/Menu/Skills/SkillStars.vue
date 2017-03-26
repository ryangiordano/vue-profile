<template lang="html">
  <ul class="star">
    <li v-for="(star,index) in skill.lvl" :key="index">
      <img :src="index == skill.lvl-1 && skill.lvl % 2 == 0 || index < skill.lvl-1 ? '../../../../src/assets/img/star.svg' :  '../../../../src/assets/img/star-half.svg' " alt="">
    </li>
  </ul>
</template>

<script>
export default {
  props:['skill'],
  computed:{
    starSource(e){
      console.log();
      return
    },
    skillToStars(){
      console.log(this.skill.lvl/2);
    }
  },
  created(){
    console.log(this.skill.lvl/2);
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
}
</style>
