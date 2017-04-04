<template lang="html">
<div class="sub-menu">
  <div class="join-party">
    <ul>
      <li v-for="character in characters" @click="openMail(character)">{{character.name}}</li>

    </ul>
  </div>

</div>
</template>

<script>
import {eventBus} from '../../../main';
export default {
  props:['characters'],
  created(){
    this.$emit('pageLoad',{stateText:'If you\'re interested in teaming up together, drop me a line.'})
  },
  methods:{
    openMail(e){
      eventBus.$emit('toggleMailModal',e);

    }
  }
}
</script>

<style scoped>
.join-party{

}
.join-party ul{
  padding:0;
}
.join-party li{
 list-style:none;
 width:100%;
 height:100px;
 border:3px solid #f4f4f4;
 border-radius:5px;
 margin:10px 0;
 cursor:pointer;


}
@-webkit-keyframes white {
 from {  -webkit-box-shadow: 0 0 9px #fff; }
 50% {  -webkit-box-shadow: 0 0 34px #fff; }
 to {  -webkit-box-shadow: 0 0 9px #fff; }
}
.mail{
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
  -webkit-animation-name: white;
 -webkit-animation-duration: 1s;
 -webkit-animation-iteration-count: infinite;
}
</style>
