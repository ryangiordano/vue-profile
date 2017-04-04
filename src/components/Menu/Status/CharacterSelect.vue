<template lang="html">
<div class="inner-menu row" style="cursor:pointer">
  <transition @enter="fadeInScale" appear><div class="portrait col-xs-2">
<img :src="`../../../src/assets/img/${character.img.main}`" alt="" class="char-portrait">
  </div></transition>
  <div class="status ">
    <h3>{{character.name}}</h3>
    <h4>LVL {{yearsOfExperience}} {{character.class}}</h4>
    <!-- <h4>Wpn: {{character.weapon}}</h4> -->
    <a :href="`mailto:${character.contact.email}?Subject=Hail, ${character.name}`"@click.stop><h4 style="margin:0; " :alt="`Email ${character.name.split(' ')[0]}`">{{character.contact.email}}</h4></a>
    <h4 style="margin:0;">{{character.contact.phone}}</h4>
  </div>
  <div class="links">
    <ul>
      <li v-for="link in character.links" class="link"@click.stop><a :href="link.link"><img :src="`/src/assets/img/${link.img}`" :alt="link.site"></a></li>
    </ul>

  </div>
  <div class="exp" >
      <div class="exp-bar">
        <div class="exp-fill" :style="dayOfTheYear">
          <!-- TODO: write script to tie xp bar with years/days -->
        </div>
        <div class="sub-text">
          To Next Lvl: {{day}}/365
        </div>
      </div>

      <div class="">

      </div>
  </div>
</div>
</template>

<script>
import {AnimationMixin} from '../../../mixins/Animations';
export default {
  props:['character'],
  mixins:[AnimationMixin],
  data:function(){
    return{
      day:0,
      duration:1,

    }
  },
  mounted(){
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    this.day = Math.floor(diff / oneDay);
  },
  created(){

  },
  computed:{
    dayOfTheYear(){
      let xpFill = (this.day/365) *100;

      return {width:xpFill+"%"};
    },
    imgLoc(){
      return `../src/${this.character.img.main}`
    },
    yearsOfExperience(){
      let startTime =new Date(...this.character.startDate);
      let currentTime= new Date();
      let diff = currentTime.getTime() - startTime.getTime();
      return Math.round((diff/(1000*60*60*24*365 )));
    }
  },
  methods:{

  }
}
</script>

<style lang="css">
.inner-menu{
  font-family: 'VT323', monospace;
  color: #f2f2f2;
  margin:5px 5px 10px;
  border-radius:5px;
  border:3px solid #f4f4f4;
  display:flex;
  transition:all 1s ease;
  top:0;
}
.inner-menu:hover{
  -webkit-box-shadow: 0px 2px 10px 4px rgba(255,255,255,1);
-moz-box-shadow: 0px 2px 10px 4px rgba(255,255,255,1);
box-shadow: 0px 2px 10px 4px rgba(255,255,255,1);
transition:all .5s ease;
}
.status{
  flex-basis:30%;
}
.links{
  flex-basis:30%;
  align-self:center;
}
h3{
  font-family: 'VT323', monospace;
  color: #f2f2f2;
  font-size: 30px;
  margin:5px 0px;
}
h4{
  font-family: 'VT323', monospace;
  margin:5px 0px;
}
.char-portrait{
  border:2px solid #ededed;
  height:100px;
  margin:10px;
  -webkit-box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.36);
  box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.36);
}
.exp-bar{
  -webkit-box-shadow: inset 0px 17px 15px -14px rgba(0,0,0,0.36);
-moz-box-shadow: inset 0px 17px 15px -14px rgba(0,0,0,0.36);
box-shadow: inset 0px 17px 15px -14px rgba(0,0,0,0.36);
  border:2px solid #ededed;
  margin:10px;
  height:30px;
  background: rgba(199,199,199,1);
background: -moz-linear-gradient(top, rgba(199,199,199,1) 0%, rgba(219,219,219,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(199,199,199,1)), color-stop(100%, rgba(219,219,219,1)));
background: -webkit-linear-gradient(top, rgba(199,199,199,1) 0%, rgba(219,219,219,1) 100%);
background: -o-linear-gradient(top, rgba(199,199,199,1) 0%, rgba(219,219,219,1) 100%);
background: -ms-linear-gradient(top, rgba(199,199,199,1) 0%, rgba(219,219,219,1) 100%);
background: linear-gradient(to bottom, rgba(199,199,199,1) 0%, rgba(219,219,219,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c7c7c7', endColorstr='#dbdbdb', GradientType=0 );
}

.exp-fill{

  height:100%;
  width:30%;
  background: rgba(241,231,103,1);
background: -moz-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(254,182,69,1)));
background: -webkit-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -o-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -ms-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: linear-gradient(to right, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#feb645', GradientType=1 );
transition:.5s ease all .2s;
}

li.link{
    list-style:none;
    display:inline;
    margin:0 5px;

}
.link img{
  height:30px;
}
</style>
