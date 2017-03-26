<template lang="html">
  <ul class="star">
    <li v-for="(star,index) in skill.lvl":key="index"><img :src="starSource" alt="">
    </li>
  </ul>
</template>

<script>
export default {
  props:['skill'],
  computed:{
    starSource(e){
      return '../../../../src/assets/img/star.svg'
    }
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
