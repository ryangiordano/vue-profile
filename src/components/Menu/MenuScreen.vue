<template lang="html">
<section class="menu">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <state-bar :stateText="stateText" @change="changed"></state-bar>
      </div>
    </div>
<div class="row">
<div class="col-sm-3 hidden-xs">
<transition @beforeEnter="test" @enter="scaleYEnter" @afterEnter="test" @enterCancel="test"
@beforeLeave="test" @leave="test" @afterLeave="test" @leaveCanceled="test" :css="false" appear>  <side-bar></side-bar></transition>
</div>
  <div class="col-sm-9 col-xs-121">
    <transition @leave="scaleYLeave" @enter="scaleYEnter":css="false" appear mode="out-in"><router-view @pageLoad="stateChange"></router-view></transition>
  </div>
</div>

</div>
</section>

</template>

<script>
import {
    AnimationMixin
} from '../../mixins/Animations';
import SideBar from './SideBar.vue';
import StateBar from './StateBar.vue';
export default {
    data: function() {
        return {
            duration: .2,
            stateText:''
        }
    },
    computed:{
    },
    mixins: [AnimationMixin],
    components: {
        sideBar: SideBar,
        stateBar: StateBar
    },
    methods:{
      stateChange(e){
        this.stateText = e.stateText;
      },
      changed(){
        console.log("changed");
      }
    }
}
</script>

<style>
section.menu {
    display: flex;
    background-color: #252525;
    height: 100vh;
    width: 100vw;
    position: absolute;
}

.sub-menu {
    overflow: hidden;
    /*background-color: rgba(40, 100, 201, 0.71);*/background: rgba(38,140,209,1);
background: -moz-linear-gradient(top, rgba(38,140,209,1) 0%, rgba(108,103,245,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(38,140,209,1)), color-stop(100%, rgba(108,103,245,1)));
background: -webkit-linear-gradient(top, rgba(38,140,209,1) 0%, rgba(108,103,245,1) 100%);
background: -o-linear-gradient(top, rgba(38,140,209,1) 0%, rgba(108,103,245,1) 100%);
background: -ms-linear-gradient(top, rgba(38,140,209,1) 0%, rgba(108,103,245,1) 100%);
background: linear-gradient(to bottom, rgba(38,140,209,1) 0%, rgba(108,103,245,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#268cd1', endColorstr='#6c67f5', GradientType=0 );
    padding: 10px 20px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
    margin-bottom: 20px;
}

.sub-menu p {
    list-style: none;
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 25px;
    cursor: pointer;
    /*padding: 5px;*/
    transition: .3s ease all;
}
</style>
