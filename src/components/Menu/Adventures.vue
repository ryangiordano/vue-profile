<template lang="html">
<div class="sub-menu"><p>See how I've gained experience!</p></div>
</template>

<script>
export default {
  created(){
    this.$emit('pageLoad',{stateText:'These are some of the things I\'ve done in the past.'})
  }
}
</script>

<style scoped>

</style>
