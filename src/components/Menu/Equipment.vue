<template lang="html">
<div class="sub-menu"><p>This is the equipment menu</p></div>
</template>

<script>
export default {
  created(){
    this.$emit('pageLoad',{stateText:'These are the technologies I\'ve picked up along the way!'})
  }
}
</script>

<style scoped>

</style>
