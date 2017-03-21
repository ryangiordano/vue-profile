<template lang="html">
  <div class="side-menu">
    <router-link :to="{name:'status'}" tag="li"exact>Status</router-link >
    <router-link :to="{name:'skills'}" tag="li">Skills</router-link >
    <router-link :to="{name:'equipment'}" tag="li">Equipment</router-link >
    <router-link :to="{name:'join-party'}" tag="li" >Join Party</router-link >
    <!-- <router-link to="/" tag="li">Journal</router-link > -->
    <router-link to="/" tag="li" exact>Title Screen</router-link >
  </div>
</template>

<script>
export default {
  data:function(){
    return{

    }
  }

}
</script>

<style scoped>
.side-menu {
    background-color: rgba(40, 100, 201, 0.71);
    padding: 40px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
}
.router-link-active{
  background-color:rgba(142, 199, 241, 0.56);
}

li {
    list-style: none;
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 35px;
    cursor: pointer;
    padding: 5px;
    transition: .3s ease all;
}

</style>
