<template lang="html">
<section class="menu">
  <div class="container">
  <div class="row">
<div class="col-md-4">

<side-bar></side-bar>
</div>
<div class="col-md-8">
<router-view></router-view>
</div>
  </div>

</div>
</section>

</template>

<script>
import SideBar from './SideBar.vue';
export default {
    components: {
        sideBar: SideBar,

    }
}
</script>

<style>
section.menu{
    display: flex;
    background-color: #252525;
    height: 100vh;
    width: 100vw;
    position: absolute;
}
</style>
