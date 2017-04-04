<template lang="html">
<div class="sub-menu">
  <div class="join-party">
    <ul>
      <li class="party-li" v-for="character in characters" @click="openMail(character)">
        <div class="character-box" >

            <img class="portrait":src="`/src/assets/img/${character.img.alt}`" alt="">

          <div class="info" @click.stop>
            <p>{{character.name}}</p>
            <p style="margin:0; font-size:15px;">{{character.class}}</p>
            <a :href="`mailto:${character.contact.email}?Subject=Hail, ${character.name}`"@click.stop><p style="margin:0; ">{{character.contact.email}}</p></a>
            <p style="margin:0;">{{character.contact.phone}}</p>

          </div>
          <div class="links" >
            <ul>
              <li v-for="link in character.links" class="link"@click.stop><a :href="link.link"><img :src="`/src/assets/img/${link.img}`" alt=""></a></li>
            </ul>
          </div>
        </div>


      </li>
      <!-- <li class="mail" @click="openMail">Send Invite Request</li> -->
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
    openMail(){
      eventBus.$emit('toggleMailModal');

    }
  }
}
</script>

<style scoped>
p{
  margin:0;
  padding:0;
  line-height:26px;
}
.info{
  flex-basis:50%;
}
li.link{
    list-style:none;
    display:inline;
    margin:0 5px;

}
.link img{
  height:30px;
}
.character-box{
  display:flex;
  align-items:flex-start;
  width:100%;
  border:3px solid #f4f4f4;
  border-radius:5px;
  margin:10px 0;
padding:10px;
height:150px;
width:100%;
position:relative;
transition:all .5s ease;
}
img.portrait{
  height:100%;
  margin-right:10px;
}
 ul{
  padding:0;
}
.party-li{
  list-style:none;
  cursor:pointer;
}
.character-box:hover{
  -webkit-box-shadow: 0px 2px 10px 4px rgba(255,255,255,1);
-moz-box-shadow: 0px 2px 10px 4px rgba(255,255,255,1);
box-shadow: 0px 2px 10px 4px rgba(255,255,255,1);
transition:all .5s ease;
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
