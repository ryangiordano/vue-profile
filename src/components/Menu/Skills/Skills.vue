<template lang="html">
<div class="sub-menu">
<ul class="tabs">
  <li  v-for="(character,index) in characters" @click="switchCharacter(character)" :key="character.id" :class="character.id==chosenCharacter ? 'active':'' ">
  <p><img class="portrait" :src="`../../src/assets/img/${character.img.alt}`" alt="">{{character.name}}</p>
</li>
</ul>
  <div class="row skills-box" >
    <div class="col-xs-12 ">
<transition @enter="fadeEnter" @leave="fadeLeave" mode="out-in" >      <div class="character-skills" v-for="character in characters" v-if="chosenCharacter===character.id" :key="character.id" :ref="character.id">
        <div class="" class="skill-row" v-for="skill in character.skills">
          <div class="col-xs-6">
            <img class="skill-icon" :src="`../../../src/assets/img/${skill.img}`" alt="">
            <p>{{skill.name}}</p>

          </div>
        </div>
      </div>
</transition>
    </div>
  </div>
</div>
</template>

<script>
import {
    AnimationMixin
} from '../../../mixins/Animations';
import CharacterSelect from '../Status/CharacterSelect.vue';
export default {
    mixins: [AnimationMixin],
    props: ['characters'],
    data: function() {
        return {
          duration:.2,
            selectedCharacter: null,
            chosenCharacter: 0
        }
    },
    created() {
        this.$emit('pageLoad', {
            stateText: 'See where I\'ve put my skill points!'
        });
        // this.$router.push('/main-menu/skills/0')
    },
    methods: {
        switchCharacter(character) {
            this.chosenCharacter = character.id;

        }
    },
    computed: {
        isActive(e) {
          e.chosenCharacter
          console.log( e);
          return 'active'

        }
    }
}
</script>

<style scoped>
.portrait{
  height:100px;
  margin:0 10px 0 0;
}
.skill-row {
    margin: 10px 0 10px;
}

.skill-icon {
    height: 30px;
}
.character-skills{
  position:relative;
}

.skills-box {
    border-top: 3px solid #f4f4f4;
}

.tabs {
    margin: 0;
    padding: 0;
}

.tabs li {
    list-style: none;
    border: 3px solid #f4f4f4;
    border-radius:5px;
    margin: 5px 5px 15px;
    display: inline-block;
    min-width: 20%;
    padding: 0 10px 0 0;
    white-space: no-wrap;
  background-color:transparent;
    transition: ease .2s all;
    cursor: pointer;
    color:#747474;
}
.tabs li.active{
      background-color: rgba(71, 199, 137,.5);
  z-index:10;
}
</style>
