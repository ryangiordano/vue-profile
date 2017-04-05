<template lang="html">
<div>

<section class="menu">
  <div class="sky">
  </div>
  <div id="cloud-scape">


  </div>
  <div class="skyline">
  </div>



</section>


  </div>
</template>

<script>
import {
    eventBus
} from '../main';
import {
    AnimationMixin
} from '../mixins/Animations';
export default {
    data: function() {
        return {


        }
    },
    computed: {
        characters() {
            return this.$store.getters.characters;
        }
    },
    mixins: [AnimationMixin],
    components: {

    },
    methods: {
        stateChange(e) {
            this.stateText = e.stateText;
        },

        placeCloud(callback){
          let cloud = document.createElement('img');
          cloud.src="/src/assets/img/cloud.png";
          cloud.classList='cloud';
          cloud.id=`cloud-${this.cloudCount}`;

          let cloudScape = document.getElementById('cloud-scape');
          cloudScape.appendChild(cloud);
          return callback(cloud.id);
        },
        animateCloud(cloudId){
          let cloud = document.getElementById(cloudId);
          let tl = new TimelineMax();
          tl.set(cloud,{y:this.random(0,400)})
          console.log(document.body.clientWidth);
          console.log(document.body.clientWidth);
          tl.fromTo(cloud,35,{
            ease: Power0.easeNone,
            x:document.body.clientWidth-1000
          },{
            ease: Power0.easeNone,
            x:document.body.clientWidth+1000
          })
        },
        startCloudCycle(){

        },
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        changed() {}
    },
    created() {
        eventBus.$on('toggleSkillModal', (skill) => {
            this.showSkillModal = !this.showSkillModal;
            this.skill = skill;
            document.addEventListener("keydown", (e) => {
                if (this.showSkillModal && e.keyCode == 27) {
                    this.showSkillModal = false;
                }
            })
        });
        eventBus.$on('toggleMailModal', () => {
            this.showMailModal = !this.showMailModal;
            document.addEventListener("keydown", (e) => {
                if (this.showMailModal && e.keyCode == 27) {
                    this.showMailModal = false;
                }
            })
        });
        eventBus.$on('toggleImageModal', (image) => {
            this.showImageModal = !this.showImageModal;
            this.image = image;
            document.addEventListener("keydown", (e) => {
                if (this.showImageModal && e.keyCode == 27) {
                    this.showImageModal = false;
                }
            })
        });


    },
    mounted(){
              //background animations
              this.placeCloud(this.animateCloud);
    }
}
</script>

<style>
section.menu {
    display: flex;
    background-color: #252525;
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-size: cover;
    background-attachment: fixed;
    overflow-y: scroll;
    overflow-x:hidden;
    /*background-image: url('/src/assets/img/skyline.png')*/
}
.skyline{
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-size: cover;
  background-attachment: fixed;
  background-image: url('/src/assets/img/skyline.png')
}
.sky{
  background-size: cover;
  background-attachment: fixed;
  position:absolute;

  height:100vh;
  width:100vw;
  background-image: url('/src/assets/img/sky.jpg')
}
.container {
    z-index: 2;
}
#cloud-scape{
  position:absolute;
  height:100vh;
  width:100vw;
  overflow:hidden;
}
.cloud{
  opacity:.6;
  position:absolute;
  left:-50%;
}
.sub-menu {
    overflow: hidden;
    /*background-color: rgba(40, 100, 201, 0.71);*/
    background: rgba(38, 140, 209, 1);
    background: -moz-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, 1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(38, 140, 209, 1)), color-stop(100%, rgba(108, 103, 245, 1)));
    background: -webkit-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, 1) 100%);
    background: -o-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, 1) 100%);
    background: -ms-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, 1) 100%);
    background: linear-gradient(to bottom, rgba(38, 140, 209, .8) 0%, rgba(108, 103, 245, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#268cd1', endColorstr='#6c67f5', GradientType=0);
    padding: 10px 20px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
    margin-bottom: 20px;
}

.sub-menu p {
    list-style: none;
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 25px;
    /*padding: 5px;*/
    transition: .3s ease all;
}

p,
h2,
h1,
h3,
h4,
h5,
li,
a {
    color: #f4f4f4;
    font-family: 'VT323', monospace;
}

.overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 999;
    align-items: center;
    justify-content: center;
    overflow-y:scroll;
    background-color: rgba(0, 0, 0, .8);
    overflow-x:hidden;
}
</style>
