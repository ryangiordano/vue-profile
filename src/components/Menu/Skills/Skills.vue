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
  <div class="row skills-box" >
    <div class="col-xs-12 ">
        <transition @enter="fadeEnter" @leave="fadeLeave" mode="out-in" >
          <div class="character-skills" v-for="character in characters" v-if="chosenCharacter===character.id" :key="character.id" :ref="character.id">
                <transition-group @enter="fadeEnterUp"  appear>
                  <div class="" class="skill-row col-xs-12 col-md-6" v-for="(skill,index) in character.skills" @click="toggleSkillModal(skill)" :key="index" :data-index="index">
                    <div class="col-sm-6 col-xs-6">
                      <p><img class="skill-icon" :src="`/src/assets/img/${skill.img}`" alt="">{{skill.name}}</p>
                    </div>
                    <div class="col-sm-6 col-xs-6">
                      <skill-stars :skill="skill"></skill-stars>
                    </div>
                </div>
              </transition-group>
              </div>
        </transition>
    </div>
  </div>


</div>
</template>

<script>
import {AnimationMixin} from '../../../mixins/Animations';
import {eventBus} from '../../../main';

import SkillStars from '../Skills/SkillStars.vue';
export default {
    mixins: [AnimationMixin],
    props: ['characters'],
    components: {
        skillStars: SkillStars,
        duration:.5
    },
    data: function() {
        return {
            duration: .2,
            selectedCharacter: null,
            chosenCharacter: 0,
            showModal: false,
            skill:null
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
    },
    computed: {
        isActive(e) {

            return 'active'

        },
        isInactive(e) {
            return 'inactive'
        },
        Modal() {
            return "Modal"
        }

    }
}
</script>

<style scoped>
.char-portrait{
  border:2px solid #ededed;
  height:100px;
  margin:10px;
  -webkit-box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.36);
  box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.36);
}
.char-portrait {
    height: 80px;
}

.side-info{
  display:flex;
  align-items:center;
  /*justify-content:center;*/
}
.skill-row {
    margin: 10px 0 10px;
    min-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    transition: .3s ease background-color;
    cursor: pointer;
    padding: 5px;
}

.skill-row:hover {
    background-color: rgba(71, 199, 137, .5);
    transition: .3s ease background-color;
}

.skill-icon {
    height: 40px;
    margin-right: 10px;
}

.character-skills {
    position: relative;
}

.skills-box {
    background-color:rgba(0,0,0,.3);
    padding:15px;
    max-height:5000px;
    border-radius:5px;
    -webkit-box-shadow: inset 0px 0px 35px -5px rgba(0,0,0,0.75);
-moz-box-shadow: inset 0px 0px 35px -5px rgba(0,0,0,0.75);
box-shadow: inset 0px 0px 35px -5px rgba(0,0,0,0.75);
transition:max-height 1s ease;

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
