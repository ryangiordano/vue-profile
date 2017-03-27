<template lang="html">
<div class="sub-menu">
<ul class="tabs">
  <li  v-for="(character,index) in characters" style="width:45%" @click="switchCharacter(character)" :key="character.id" :class="character.id==chosenCharacter ? 'active':'inactive' ">
  <img class="char-portrait":src="`../../../src/assets/img/${character.img.main}`" alt="">
<div class="side-info">
  <p>{{character.name}}</p>
  <p>{{character.class}}</p></div>
</li>
</ul>
  <div class="row skills-box" >
    <div class="col-xs-12 ">
<transition @enter="fadeEnter" @leave="fadeLeave" mode="out-in" >
  <div class="character-skills" v-for="character in characters" v-if="chosenCharacter===character.id" :key="character.id" :ref="character.id">
        <div class="" class="skill-row col-xs-12 col-sm-6" v-for="skill in character.skills" @click="toggleModal(skill)">
            <p><img class="skill-icon" :src="`../../../src/assets/img/${skill.img}`" alt="">{{skill.name}}</p>
            <skill-stars :skill="skill"></skill-stars>
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
import {eventBus} from '../../../main';

import SkillStars from '../Skills/SkillStars.vue';
export default {
    mixins: [AnimationMixin],
    props: ['characters'],
    components: {
      skillStars: SkillStars,
    },
    data: function() {
        return {
          duration:.2,
            selectedCharacter: null,
            chosenCharacter: 0,
            showModal:false
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

        },
        toggleModal(skill){
          eventBus.$emit('openModal',skill);
        }
    },
    computed: {
        isActive(e) {

          return 'active'

        },
        isInactive(e){
          return 'inactive'
        },
        Modal(){
          return "Modal"
        }

    }
}
</script>

<style scoped>
.char-portrait{
  height:80px;
}
.skill-row {
    margin: 10px 0 10px;
    min-height:50px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-radius:5px;
    transition:.3s ease all;
    cursor:pointer;
    padding:5px;
}
.skill-row:hover{
      background-color: rgba(71, 199, 137,.5);
transition:.3s ease all;
}

.skill-icon {
    height: 40px;
    margin-right:10px;
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
ul{
  padding:0;
}
.tabs li {
    list-style: none;
    border: 3px solid #f4f4f4;
    border-radius:5px;
    margin: 5px 5px 15px;
    min-width: 20%;
    padding: 10px;
    /*text-align:center;*/
    white-space: no-wrap;
    background-color:transparent;
    transition: ease .2s all;
    cursor: pointer;
    color:#747474;
      display:flex;

}
.tabs li.inactive{
  opacity:.5
}
.tabs li.active{
      background-color: rgba(71, 199, 137,.5);
  z-index:10;
}
.tabs{
  display:flex;
  align-items:center;
  justify-content:center;
}
.tabs li p{
  margin:0;
}
</style>
