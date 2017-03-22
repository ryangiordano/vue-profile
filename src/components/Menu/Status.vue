<template lang="html">
<div class="sub-menu">
  <div><p>This is the status menu</p>
  </div>
</div>
</template>

<script>
export default {
  created(){
    this.$emit('pageLoad',{stateText:'A general overview of myself.'})
  }
}
</script>

<style scoped>

</style>
