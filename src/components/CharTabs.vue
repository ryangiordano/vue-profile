<template lang="html">
  <ul class="tabs">
    <li  v-for="(character,index) in characters" style="width:45%" @click="switchCharacter(character)" :key="character.id" :class="character.id==chosenCharacter ? 'active':'inactive' ">
    <transition @enter="fadeInScale" appear ><img class="char-portrait":src="`/src/assets/img/${character.img.main}`" alt=""></transition>
  <div class="side-info">
  <div>  <p>{{character.name}}</p>
    <p>{{character.class}}</p></div>
  </div>
  </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
