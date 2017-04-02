<template lang="html">
  <div class="quest-details">
    <h3 class="name">    {{quest.name}}</h3>
    <hr class="hr">
    <p class="copy">{{quest.copy}}</p>
  </div>
</template>

<script>

export default {
  data:function(){
    return{
      quest:null
    }
  },
  created(){

     let quests = this.$store.getters.quests,
     id = this.$route.params.id;
    this.quest = quests.find(quest=>quest.id==id);
/////

  },
  computed:{
    // quest(){
    //   let quests = this.$store.getters.quests;
    //   let id = this.$route.params.id;
    //   console.log(id);
    // return quests.find(quest=>quest.id===id);
    // }
  },
  mounted(){
        let $ = function(e){return document.querySelectorAll(e) },
     name = $('.name'), line = $('.hr'), copy = $('.copy');
    console.log(name);
    let tl = new TimelineMax;
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
    })
  }
}
</script>

<style scoped>

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
</style>
