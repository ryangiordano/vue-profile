<template lang="html">
<div>
<section class="menu">

  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <state-bar :stateText="stateText" @change="changed"></state-bar>
      </div>
    </div>
<div class="row">
<div class="col-sm-3 hidden-xs">
<transition @beforeEnter="test" @enter="scaleYEnter" @afterEnter="test" @enterCancel="test"
@beforeLeave="test" @leave="test" @afterLeave="test" @leaveCanceled="test" :css="false" appear>  <side-bar></side-bar></transition>
</div>
  <div class="col-sm-9 col-xs-12">
    <transition @leave="scaleYLeave" @enter="scaleYEnter":css="false" appear mode="out-in"><router-view @pageLoad="stateChange" :characters="characters"></router-view></transition>
  </div>
</div>

</div>
<transition @enter="fadeEnter" @leave="fadeLeave">
  <skill-modal :skill="skill" :show="showSkillModal" v-if="showSkillModal" @toggleSkillModal="showSkillModal=false" ></skill-modal>
</transition>
<transition @enter="fadeEnter" @leave="fadeLeave">
  <mail-modal :show="showMailModal" v-if="showMailModal" @toggleMailModal="showMailModal=false" ></mail-modal>
</transition>

</section></div>

</template>

<script>
import {
    eventBus
} from '../../main';
import SkillModal from '../SkillModal.vue';
import MailModal from '../MailModal.vue';
import {
    AnimationMixin
} from '../../mixins/Animations';
import SideBar from './SideBar.vue';
import StateBar from './StateBar.vue';
export default {
    data: function() {
        return {
            showModal: false,
            duration: .2,
            stateText: '',
            showSkillModal: false,
            showMailModal: false,
            skill: null,

        }
    },
    computed: {
        characters() {
            return this.$store.getters.characters;
        }
    },
    mixins: [AnimationMixin],
    components: {
        sideBar: SideBar,
        stateBar: StateBar,
        skillModal: SkillModal,
        mailModal:MailModal
    },
    methods: {
        stateChange(e) {
            this.stateText = e.stateText;
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
    },
}
</script>

<style>
section.menu {
    display: flex;
    background-color: #252525;
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-size:cover;
    background-attachment:fixed;
    overflow-y:scroll;
}

.overlay{
  height:100%;
  width:100%;
  background-color:rgba('0,0,0,.5');
  position:fixed;
  top:0;
  left:0;
  z-index:1;
}
.container{
  z-index:2;
}
.sub-menu {
    overflow: hidden;
    /*background-color: rgba(40, 100, 201, 0.71);*/
    background: rgba(38, 140, 209, 1);
    background: -moz-linear-gradient(top, rgba(38, 140, 209, 1) 0%, rgba(108, 103, 245, 1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(38, 140, 209, 1)), color-stop(100%, rgba(108, 103, 245, 1)));
    background: -webkit-linear-gradient(top, rgba(38, 140, 209, 1) 0%, rgba(108, 103, 245, 1) 100%);
    background: -o-linear-gradient(top, rgba(38, 140, 209, 1) 0%, rgba(108, 103, 245, 1) 100%);
    background: -ms-linear-gradient(top, rgba(38, 140, 209, 1) 0%, rgba(108, 103, 245, 1) 100%);
    background: linear-gradient(to bottom, rgba(38, 140, 209, 1) 0%, rgba(108, 103, 245, 1) 100%);
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
    display: flex;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 999;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5)
}
</style>
