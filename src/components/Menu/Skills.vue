<template lang="html">
<div class="sub-menu"><p></p></div>
</template>

<script>
export default {
  created(){
    this.$emit('pageLoad',{stateText:'This is the skills menu. See where I\'ve put my points!'})
  }
}
</script>

<style>

</style>
