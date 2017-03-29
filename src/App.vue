<template>
<div style="position:relative">

<transition @leave="fadeLeave" @enter="fadeEnter":css="false" mode="out-in"><router-view></router-view></transition>

</div>

</template>

<script>
import {AnimationMixin} from './mixins/Animations';
// import '../styles/stylesheet.css';

export default {
  mixins:[AnimationMixin],
  data () {
    return {
      showModal:false,
      duration:.2
    }
  },
  components:{
  },

  methods:{

  }
}
</script>

<style>

</style>
