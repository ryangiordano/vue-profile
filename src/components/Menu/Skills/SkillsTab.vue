<template lang="html">
<div class="">
  <div class="" v-for="(skill, index) in character.skills">
    {{skill}}
  </div>
</div>
</template>

<script>
export default {
  props:['character'],
  created(){
    let characters = this.$store.getters.characters;
    this.character = characters.find(character => {
        return character.id == this.$route.params.id;
    });
  }
}
</script>

<style lang="css">
</style>
