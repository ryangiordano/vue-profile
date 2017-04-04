<template lang="html">
  <div class="sub-menu" style="margin-top:30px;">
    <transition @enter="textEnter" appear><p ref=stateElement>{{stateText}}</p></transition>
  </div>
</template>

<script>
import {AnimationMixin} from '../../mixins/Animations';
export default {
  props:['stateText'],
  mixins:[AnimationMixin],
  watch:{
    stateText(e){


    }
  }
}
</script>

<style scoped>
p{
  font-size:24px;
  padding:0;
  margin:0;
}
</style>
