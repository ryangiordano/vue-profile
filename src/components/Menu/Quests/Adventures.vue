<template lang="html">
<div class="sub-menu">
  <ul class="tabs">
    <li  v-for="(character,index) in characters" style="width:45%" @click="switchCharacter(character)" :key="character.id" :class="character.id==chosenCharacter ? 'active':'inactive' ">
    <transition @enter="fadeInScale" appear ><img class="char-portrait":src="`/src/assets/img/${character.img.main}`" alt=""></transition>
  <div class="side-info">
  <div>  <p>{{character.name}}</p>
    <p>{{character.class}}</p></div>
  </div>
  </li>
  </ul>

  <p>See how I've gained experience!</p>
  <div class="row quest-box" >
    <div class="col-xs-12 ">
        <transition @enter="fadeEnter" @leave="fadeLeave" mode="out-in" >
          <div class="character-quests" v-for="character in characters" v-if="chosenCharacter===character.id" :key="character.id" :ref="character.id">
                <transition-group @enter="fadeEnterUp"  appear>
                  <div class="" v-if="quest.charId==character.id"class="skill-row col-xs-12" v-for="(quest,index) in quests"  :key="index" :data-index="index">
                    {{quest.name}}
                </div>
              </transition-group>
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
export default {

  props:['characters'],
  data:function(){
    return {
        duration: .2,
        selectedCharacter: null,
        chosenCharacter: 0,
        showModal: false,
        skill:null
    }
  },
  mixins:[
    AnimationMixin
  ],
  created(){
    this.$emit('pageLoad',{stateText:'These are some of the things I\'ve done in the past.'});

  },
  computed:{
    isActive(e) {

        return 'active'

    },
    isInactive(e) {
        return 'inactive'
    },
    quests(){
      return this.$store.getters.quests;
    }
  },
  methods:{
        switchCharacter(character) {
            this.chosenCharacter = character.id;

        },
        fadeEnterUp(el,done){
          let tl = new TimelineMax;
          let delay= el.dataset.index*.05;
          tl.from(el,1,{
            opacity:0,
            delay:delay,
            y:20,
                        ease: Elastic.easeOut.config(1, 0.3),
            onComplete:done
          })
        },
        fadeInScale(el,done){
          let tl = new TimelineMax;
          tl.from(el,.5,{
            scale:.5,
            opacity:0,
            delay:.2,
            ease: Elastic.easeOut.config(1, 0.75),
            onComplete:done
          })
        },
        toggleSkillModal(skill) {
          eventBus.$emit('toggleSkillModal',skill);
        }
  }
}
</script>

<style scoped>
.char-portrait {
    height: 80px;
}
.side-info{
  display:flex;
  align-items:center;
  /*justify-content:center;*/
}
.tabs {
    margin: 0;
    padding: 0;
}

ul {
    padding: 0;
}

.tabs li {
    list-style: none;
    border: 3px solid #f4f4f4;
    border-radius: 5px;
    margin: 5px 5px 15px;
    min-width: 20%;
    padding: 10px;
    /*text-align:center;*/
    white-space: no-wrap;
    background-color: transparent;
    transition: ease .2s background-color;
    cursor: pointer;
    color: #747474;
    display: flex;
}

.tabs li.inactive {
    opacity: .5
}

.tabs li.active {
    background-color: rgba(71, 199, 137, .5);
    z-index: 10;
}

.tabs {
    display: flex;
    align-items: center;
    justify-content: center;
}

.tabs li p {
    margin: 0;
}
</style>
