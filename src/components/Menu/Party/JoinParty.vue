<template lang="html">
<div class="sub-menu">
  <div class="join-party">
    <ul>
      <li v-for="character in characters">{{character.name}}</li>
      <li class="mail" @click="openMail">Send Invite Request</li>
    </ul>
  </div>

</div>
</template>

<script>
export default {
  props:['characters'],
  created(){
    this.$emit('pageLoad',{stateText:'If you\'re interested in teaming up together, drop me a line.'})
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
}
.mail{
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
}
</style>
