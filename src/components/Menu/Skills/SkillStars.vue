<template lang="html">
  <ul class="star">
    <li v-for="(star,index) in this.skill.lvl" :key="index">
      <img :src="'../../../../src/assets/img/star.svg'" alt="">
    </li>
  </ul>
</template>
<!-- '../../../../src/assets/img/star.svg' -->
<script>
export default {
  props:['skill'],
  data:function(){
    return{
      skillLvl:0
    }
  },
  computed:{
    starSource(e){

    }
  },
  created(){

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
