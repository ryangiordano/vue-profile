<template lang="html">

    <div class="sub-menu">
      <div class="row"><div class="col-xs-4">
        <img :src="imgLoc" alt="" class="char-portrait">
      </div>
        <div class="col-xs-4">
          <h3>{{character.name}}</h3>
          <p>LVL {{yearsOfExperience}} {{character.class}}</p>
          <ul>
            <li v-for="link in character.links"><a :href="link.link"><img :src="'../../src/'+link.img" /></a></li>
          </ul>

        </div>
        <div class="col-xs-4">
          <h4>STR: {{character.stats.str}}</h4>
          <h4>STA: {{character.stats.sta}}</h4>
          <h4>SPD: {{character.stats.spd}}</h4>
          <h4>CHA: {{character.stats.cha}}</h4>
          <div class="row">
            <div class="col-xs-1">
              <p class="bar-label">HP</p>
            </div>
            <div class="col-xs-10">
              <div class="hp">
                  <div></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-1">
              <p class="bar-label">MP</p>
            </div>
            <div class="col-xs-10">
              <div class="mp">
                  <div></div>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-xs-3">
              <p class="bar-label">Limit</p>
            </div>
            <div class="col-xs-8">
              <div class="limit">
                  <div></div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="back" @click="navigateBack">
            <span class="back-carat"><</span>
          <img src="../../../assets/img/esc.gif"class="back-esc" alt="">

        </div>

      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="details">

              <p>{{character.about}}</p>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
export default {
    props: ['id'],
    data: function() {
        return {
            character: null
        }
    },
    created() {
        let characters = this.$store.getters.characters;
        this.character = characters.find(character => {
            return character.id == this.$route.params.id;
        });
        window.addEventListener('keyup', this.navigateBack);
        let firstName = this.character.name.split(" ")[0];
        this.$emit('pageLoad', {
            stateText: "Details about " + firstName + "."
        })
    },
    computed: {
        character() {
            return this.$store.getters.character(this.$route.params.id);
        },
        imgLoc() {
            return `../../src/${this.character.img.alt}`
        },
        yearsOfExperience() {
            let startTime = new Date(...this.character.startDate);
            let currentTime = new Date();
            let diff = currentTime.getTime() - startTime.getTime();
            return Math.round((diff / (1000 * 60 * 60 * 24 * 365)));
        }
    },
    methods: {
        navigateBack(e) {
          console.log(e.keyCode);
            if (e.keyCode == 27) {
                return this.$router.go(-1)
            } else if (e.type === 'click') {
                return this.$router.go(-1)
            }
        }
    },
    destroyed() {
        window.removeEventListener('keyup', this.navigateBack, false);
    }
}
</script>

<style scoped>
.back {
    position: absolute;
    display: flex;
    right: 15px;
    top: 10px;
}

.back .back-esc {
    margin-top: -15px;
    cursor: pointer;
}

.back-carat {
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 25px;
}

p {}
  ul{
    padding:0;
  }
li{
  display:inline;
  list-style:none;

}
li img{
  height:40px;
  margin:10px;
}
.bar {
    position: relative;
}

.bar-label{
  margin:0;
}

.hp,
.mp {
    height: 5px;
    background-color: rgb(139, 139, 139);
    margin-top: 15px;
    border: 1px solid #ededed;
}
.limit{
  height: 10px;
  background-color: rgb(242, 255, 96);
  margin-top: 15px;
  border: 1px solid #ededed;
}
h4{
  color: #f4f4f4;
  font-family: 'VT323', monospace;
}
.hp div {
    background-color: #d55555;
    width: 100%;
    height: 5px;
}

.mp div {
    background-color: #4e5de4;
    width: 100%;
    height: 5px;
    position: relative;
}

.char-portrait {
    height: 200px;
}
</style>
