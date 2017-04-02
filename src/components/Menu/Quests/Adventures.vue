<template lang="html">
<div class="sub-menu">
  <ul class="tabs">
    <li  v-for="(character,index) in characters" style="width:45%" @click="switchCharacter(character)" :key="character.id" :class="character.id==characterRoute ? 'active':'inactive' ">
    <transition @enter="fadeInScale" appear >
      <img class="char-portrait":src="`/src/assets/img/${character.img.main}`" alt="">
    </transition>
  <div class="side-info">
  <div>  <p>{{character.name}}</p>
    <p>{{character.class}}</p></div>
  </div>
  </li>
  </ul>


  <div class="row " >
    <div class="col-xs-12 ">
          <router-view :initId="initId"></router-view>
    </div>
  </div>

</div>
</template>

<script>
import {
    AnimationMixin
} from '../../../mixins/Animations';
export default {

    props: ['characters'],
    data: function() {
        return {
            duration: .2,
            selectedCharacter: null,
            chosenCharacter: 0,
            showModal: false,
            skill: null

        }
    },
    mixins: [
        AnimationMixin
    ],
    created() {
        this.$emit('pageLoad', {
            stateText: 'These are some of the things I\'ve done in the past.'
        });



    },
    computed: {
        initId(){
          if(this.$route.params.charId){
            return null
          }else{
                  this.$router.push({path:`/adventures/0`})
          }

        },
        characterRoute() {
          return this.$route.params.charId;
        },
        quests() {
          let quests = this.$store.getters.quests;
          quests.reverse();
            return quests;
        }
    },

    methods: {
        navigateToQuest(e) {

        },
        switchCharacter(e) {
          this.$router.push({path:`/adventures/${e.id}`})

        },
        fadeEnterUp(el, done) {
            let tl = new TimelineMax;
            let delay = el.dataset.index * .05;
            tl.from(el, 1, {
                opacity: 0,
                delay: delay,
                y: 20,
                ease: Elastic.easeOut.config(1, 0.3),
                onComplete: done
            })
        },
        fadeInScale(el, done) {
            let tl = new TimelineMax;
            tl.from(el, .5, {
                scale: .5,
                opacity: 0,
                delay: .2,
                ease: Elastic.easeOut.config(1, 0.75),
                onComplete: done
            })
        },
        fadeLeave(el,done){
          console.log("???");
          let tl = new TimelineMax;
          tl.to(el,.3,{
            opacity:0,
            onComplete:done
          })
        },
    }
}
</script>

<style scoped>
.char-portrait {
    height: 80px;
    margin-right: 10px;
}

.mark {
    opacity: 1;
    /*transform:scale(1.5);
  transform-origin:'center center';*/
}

.check {
    height: 25px;
    width: auto;
    margin-bottom: -5px;
    margin-right: 10px;
}

.check-area {
    /*flex-grow:0;*/
}

.quest-row {
    padding: 0 20px;
    border: 2px solid #f4f4f4;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    cursor: pointer;
    align-items: center;
    transition: -webkit-box-shadow .5s ease;
}

.quest-row:hover {
    -webkit-box-shadow: 0px 2px 10px 4px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 2px 10px 4px rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 10px 4px rgba(255, 255, 255, 1);
    transition: -webkit-box-shadow .5s ease;
}

.quest-name {
    flex-basis: 65%;
}

.side-info {
    display: flex;
    align-items: center;
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

.skills li {
    text-decoration: none;
    display: inline;
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
}
</style>
