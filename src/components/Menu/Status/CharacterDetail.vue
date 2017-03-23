<template lang="html">

    <div class="sub-menu">
      <div class="col-xs-12">
        <div class="back" @click="navigateBack">
            <span class="back-carat"><</span>
          <img src="../../../assets/img/esc.gif"class="back-esc" alt="">

        </div>
        <div class="details">
            <img :src="imgLoc" alt="" class="char-portrait">
            <p>{{character.about}}</p>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  props:['id'],
  data:function(){
    return{
      character:null
    }
  },
  created(){
    let characters = this.$store.getters.characters;
    this.character = characters.find(character=>{
      return character.id==this.$route.params.id;
    });
    window.addEventListener('keyup', (e)=>{
      if(e.keyCode==27){
        this.navigateBack();
      }
    });
      this.$emit('pageLoad',{stateText:this.character.blurb})
  },
  computed:{
    character(){
      return this.$store.getters.character(this.$route.params.id);
    },
    imgLoc(){
      return `../../src/${this.character.img}`
    },
  },
  methods:{
    navigateBack(){
      return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.back{
  position:absolute;
  display:flex;
  right:15px;
  top:10px;
}
.back .back-esc{
  margin-top:-15px;
  cursor:pointer;
}
.back-carat{
  color: #f4f4f4;
  font-family: 'VT323', monospace;
  font-size:25px;

}
p{
  
}
.details img{

  display:inline;
  height:200px;
}
</style>
