<template lang="html">
  <div class="menu-back">
    <router-link to="/" tag="li">Status</router-link >
    <router-link to="/" tag="li">Skills</router-link >
    <router-link to="/" tag="li">Equipment</router-link >
    <router-link to="/" tag="li">Join Party</router-link >
    <!-- <router-link to="/" tag="li">Journal</router-link > -->
    <router-link to="/" tag="li">Title Screen</router-link >
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.menu-back {
    background-color: rgba(40, 100, 201, 0.71);
    padding: 40px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
}


/**
   Coded by /u/j0be in scss.
   See scss source here -> http://codepen.io/j0be/pen/MKRVyN
*/


li {
    list-style: none;
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 35px;
    cursor: pointer;
    padding: 5px;
    transition: .3s ease all;
}

li:before {
    opacity: 0;
}

li:hover:before {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7db9e8+0,ffffff+100&1+0,0+100 */
    background: -moz-linear-gradient(45deg, rgba(125, 185, 232, 1) 0%, rgba(255, 255, 255, 0) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(125, 185, 232, 1) 0%, rgba(255, 255, 255, 0) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg, rgba(125, 185, 232, 1) 0%, rgba(255, 255, 255, 0) 100%);
    /* W3C, */
    transition: .3s ease all;
    opacity: 1
}
</style>
