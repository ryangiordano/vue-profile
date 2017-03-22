<template lang="html">
<div class="sub-menu"><p>Join my party</p></div>
</template>

<script>
export default {
  created(){
    this.$emit('pageLoad',{stateText:'If you\'re interested in teaming up together, drop me a line.'})
  }
}
</script>

<style scoped>

</style>
