<template lang="html">
  <div class="character-quests">
        <transition-group @enter="fadeEnterUp" @leave="fadeLeave" appear mode="out-in">
          <div v-if="quest.charId==character.id"class="quest-row col-xs-12" v-for="(quest,index) in quests"  :key="index" :data-index="index" @click="navigateToQuest(character.id,quest.id)">

              <div class="quest-name">
                <h3>
                  <svg version="1.1" class="check" x="0px" y="0px"
                                         width="153.85px" height="154.598px" viewBox="0 0 153.85 154.598" enable-background="new 0 0 153.85 154.598"
                                         xml:space="preserve">
                                        <g>
                                          <rect x="14.442" y="25.064" fill="#FFFFFF" width="14.207" height="93.53"/>
                                          <rect x="28.354" y="10.562" fill="#FFFFFF" width="93.529" height="14.207"/>
                                          <rect x="121.884" y="24.768" fill="#FFFFFF" width="14.207" height="93.53"/>
                                          <rect x="28.649" y="118.594" fill="#FFFFFF" width="93.529" height="14.208"/>
                                        </g>
                                        <g class="mark">
                                          <rect x="16.35" y="69.865" fill="#ff3737" width="17.127" height="17.125"/>
                                          <rect x="33.059" y="86.574" fill="#ff3737" width="17.127" height="17.128"/>
                                          <rect x="50.186" y="103.283" fill="#ff3737" width="17.127" height="17.128"/>
                                          <rect x="66.896" y="86.574" fill="#ff3737" width="17.128" height="17.128"/>
                                          <rect x="83.604" y="69.03" fill="#ff3737" width="17.126" height="17.127"/>
                                          <rect x="101.149" y="51.067" fill="#ff3737" width="17.126" height="17.127"/>
                                          <rect x="118.275" y="33.94" fill="#ff3737" width="17.128" height="17.127"/>
                                        </g>
                                      </svg>{{quest.name}}</h3>
              </div>
              <div class="quest-details">
                 <h4>Skills Increased:</h4>
                 <ul class="skills">
                   <li v-for="skill in quest.skills" :style="skill.type<1 ? {backgroundColor:'rgba(71, 199, 137, .5)'}:{backgroundColor:'rgba(150, 65, 201,.5)'}">{{skill.name}}</li>
                 </ul>
               </div>
        </div>
      </transition-group>
      </div>
</template>

<script>
export default {
  methods:{
    navigateToQuest(charId,id){
    return this.$router.push({path:`/adventures/${charId}/${id}`})
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
      let tl = new TimelineMax;
      tl.to(el,.03,{
        opacity:0,
        onComplete:done
      })
    },
  },
  computed:{
    quests() {
        return this.$store.getters.quests;
    },
    character(){
      let characters = this.$store.getters.characters;
      return characters.find(character=>character.id == this.$route.params.charId)
    }
  },
  mounted() {
      let $ = function(el) {
          return document.querySelectorAll(el);
      }
      let delay = .5;
      let marks = $('.mark');
      let marksArray = Array.from(marks);
      marksArray.map(mark => {
          delay += .1;
          TweenMax.set(mark, {
              scale: 1.5,
              transformOrigin: 'center center',
          })
          TweenMax.from(mark, 1, {
              opacity: 0,
              ease: Elastic.easeOut.config(1, 0.75),
              transformOrigin: 'center center',
              scale: 3,
              delay: delay
          })
      })
  },
}
</script>

<style scoped>
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
.skills li {
    text-decoration: none;
    display: inline;
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
}
</style>
