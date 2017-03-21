<template>
<div>
<transition @leave="fadeLeave" @enter="fadeEnter":css="false" mode="out-in"><router-view></router-view></transition>
</div>
</template>

<script>
import {AnimationMixin} from './mixins/Animations';
export default {
  mixins:[AnimationMixin],
  data () {
    return {
      duration:.2
    }
  }
}
</script>

<style>

</style>
