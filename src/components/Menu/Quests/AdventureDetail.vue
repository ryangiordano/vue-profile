<template lang="html">
  <div class="quest-details">
    <!-- <div class="reward">
      <div class="" v-for="skillup in quest.skills">
        <p class="skill-up">{{skillup.name}} + {{skillup.xp}}</p>
      </div>
    </div> -->
    <div class="body">
      <h3 class="name">{{quest.name}}</h3>
        <div class="links">
          <ul>
            <li v-for="link in quest.links" class="subscript"><a :href='link.url'>{{link.text}}</a></li>
          </ul>
        </div>
        <hr class="hr">
        <p class="copy">{{quest.copy}}</p>
    </div>
    <div class="footer">
      <div class="gallery">
                <hr class="hr">
        <ul>
          <li v-for="image in quest.images"><img @click="toggleImageModal(image)" :src="`/src/assets/img/${image.file}`" alt=""></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {eventBus} from '../../../main.js';
export default {

  data:function(){
    return{
      quest:null,
      linkArray:false
    }
  },
  created(){
     let quests = this.$store.getters.quests,
     id = this.$route.params.id;
    this.quest = quests.find(quest=>quest.id==id);
/////

  },
  computed:{

  },
  methods:{
    toggleImageModal(image){
      eventBus.$emit('toggleImageModal',image);
    }
  },
  mounted(){
    //animate all pieces into place
    let $ = function(e){return document.querySelectorAll(e) },
     name = $('.name'), line = $('.hr'), copy = $('.copy'), skillup = $('.skill-up'),images =$('.gallery li img'),links=$('.links li'),tl = new TimelineMax;
    tl.from(line,.2,{
      opacity:0,
      delay:.2,
      width:0,
    })
    .from(name,.3,{
      opacity:0
    })
    .from(copy,.3,{
      opacity:0
    },'init')
    .staggerFrom(links,.5,{
      opacity:0
    },.1,'init')
    .staggerFrom(images,.5,{
      opacity:0,
      y:10
    },.1)
    //animateskillups
    // let tl2 = new TimelineMax;
    // tl2.staggerFrom(skillup,.5,{
    //   y:50,
    //   delay:1,
    //   opacity:0
    // },1,'init')
    // .staggerTo(skillup,.5,{
    //   opacity:0,
    //   delay:2,
    //   y:-10
    // },1,'init')
  }
}
</script>

<style scoped>
.links{
  text-align:center;
}
.reward{
  position:absolute;
  top:0;
  right:0;
  width:200px;
}
.skill-up{
position:absolute;
transition:0s all ease;
}
.links a:hover{
  color:#f4f4f4;
}
.subscript{
  text-align:center;
}
.name{
  text-align:center;
  font-size:30px;
}
.hr{
  width:50%;
}
.copy,.name,.hr{
transition:all 0s ease;
}
ul{
  padding:0;
}
li{
  display:inline;
  margin:5px;
  box-shadow:
}
img{
  height:100px;
    cursor:pointer;
}
img:hover{
  -webkit-box-shadow: 0px 2px 10px 4px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 2px 10px 4px rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 4px rgba(255, 255, 255, 1);
  transition: -webkit-box-shadow .3s ease;

}
</style>
