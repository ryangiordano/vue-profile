<template lang="html">
  <section >

    <div class="splash"v-on:keyup="startPressed">
          <h1>Bank Name</h1>
      <h4 class="menu-start" @click="startPressed">Press Any Key</h4>
    </div>

    <div class="copyright">
      <h4>&copy;1986 <a href="https://github.com/thedaruma">KaizenDaruma</a></h4>
    </div>
  </section>
</template>

<script>
import {AnimationMixin} from '../mixins/Animations';
export default {
  mixins:[AnimationMixin],
methods:{
  startPressed(){
    this.$router.push({path:'/main-menu'})
  }
},
created(){
  window.addEventListener('keyup',this.startPressed);
}
}
</script>

<style scoped>
section{
display:flex;
justify-content:center;
text-align:center;
  background-color: #252525;
  height:100vh;
  width:100vw;
  position:absolute;
}
h1{  font-family: 'VT323', monospace;
  color: #f2f2f2;
  font-size:80px
}
.splash{
align-self:center;
}
.copyright{
  position:fixed;
  bottom:2%;
  right:2%
}
.copyright h4{
  font-family: 'VT323', monospace;
  color:#f2f2f2;
}
.copyright a{
  color:#f2f2f2;
}


.menu-start{
  font-family: 'VT323', monospace;
  font-size:40px;
  margin-top:150px;
  color:#f2f2f2;
  animation:fadeInOut 3s infinite;
  cursor:pointer;
}
@keyframes fadeInOut {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}

</style>
