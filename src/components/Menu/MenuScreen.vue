<template lang="html">
<section class="menu">
  <div class="container">
  <div class="row">
<div class="col-sm-4 hidden-xs">

<side-bar></side-bar>
</div>
<div class="col-sm-8 col-xs-121">
<transition @leave="scaleYLeave" @enter="scaleYEnter":css="false" mode="out-in"><router-view></router-view></transition>
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
export default {
    data: function() {
        return {
            duration: .2
        }
    },
    mixins: [AnimationMixin],
    components: {
        sideBar: SideBar,

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
  overflow:hidden;
    background-color: rgba(40, 100, 201, 0.71);
    padding: 40px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
}
.sub-menu p{
  list-style: none;
  color: #f4f4f4;
  font-family: 'VT323', monospace;
  font-size: 35px;
  cursor: pointer;
  padding: 5px;
  transition: .3s ease all;
}
</style>
