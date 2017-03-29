<template lang="html">

  <div class="overlay" @click="closeModal">
  <transition @enter="scaleYEnter" @leave="scaleYLeave">
  <div class="panel"  ref="panel" v-if="showPanel" @click.stop >
        <div class="panel-heading">
          <h3>Reach Out to Us</h3>
        </div>
        <div class="panel-body">
          <div class="row">
          <div class="col-md-12">  <form class="form-horizontal">
              <fieldset>
                <div class="form-group">
                  <label for="inputEmail" class="col-xs-2 control-label">Email</label>
                  <div class="col-xs-12">
                    <input type="text" class="form-control" id="inputEmail" placeholder="Email">
                  </div>
                </div>
                <div class="form-group">
                  <label for="textArea" class="col-xs-2 control-label">Salutation</label>
                  <div class="col-xs-12">
                    <textarea class="form-control" rows="3" id="textArea" placeholder="Enter your message"></textarea>
                    <span class="help-block"></span>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-5 ">
                    <button type="reset" class="btn" @click="closeModal">Cancel</button>

                  </div>
                  <div class="col-lg-5 col-lg-offset-2">
                    <button type="reset" class="btn">Submit</button>

                  </div>
                </div>
              </fieldset>
            </form></div>
          </div>
        </div>
    </div>
    </transition>
  </div>

</template>

<script>
import {
    eventBus
} from '../main';
export default {
    props: ['skill', 'showModal', 'show'],
    data: function() {
        return {
            showPanel: false
        }
    },
    created() {
        setTimeout(() => {
            this.showPanel = true;
        }, 100)
    },
    destroyed() {
        this.showPanel = false;
    },
    methods: {
        closeModal() {
            this.$emit('toggleMailModal');
        },
        scaleXEnter(el, done) {
            let tl = new TimelineMax;
            tl.from(el, .2, {
                scaleX: 0,
                onComplete: done
            })
        },
        scaleXLeave(el, done) {
            let tl = new TimelineMax;
            tl.to(el, .2, {
                scaleX: 0,
                onComplete: done
            })
        },
        scaleYEnter(el,done){
          let tl = new TimelineMax;
          tl.from(el,.2,{
            scaleY:0,
            onComplete:done
          })
        },
        fadeEnter(el, done) {
            let tl = new TimelineMax;
            tl.from(el, .2, {
                opacity: 0,
                onComplete: done
            })
        },
        scaleYLeave(el, done) {
            let tl = new TimelineMax;
            tl.to(el, .2, {
                scaleY: 0,
                onComplete: done
            })
        },
        fadeLeave(el, done) {
            let tl = new TimelineMax;
            tl.to(el, .2, {

                opacity: 0,
                onComplete: done
            })
        },
    },
    ready: {

    }
}
</script>

<style scoped>
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

.panel {
    overflow: hidden;
    background: rgba(203,96,179,0.9);
background: -moz-linear-gradient(top, rgba(203,96,179,0.9) 0%, rgba(219,54,164,0.9) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(203,96,179,0.9)), color-stop(100%, rgba(219,54,164,0.9)));
background: -webkit-linear-gradient(top, rgba(203,96,179,0.9) 0%, rgba(219,54,164,0.9) 100%);
background: -o-linear-gradient(top, rgba(203,96,179,0.9) 0%, rgba(219,54,164,0.9) 100%);
background: -ms-linear-gradient(top, rgba(203,96,179,0.9) 0%, rgba(219,54,164,0.9) 100%);
background: linear-gradient(to bottom, rgba(203,96,179,0.9) 0%, rgba(219,54,164,0.9) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cb60b3', endColorstr='#db36a4', GradientType=0 );
    padding: 10px 20px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
    margin-bottom: 20px;
    min-width:400px;
    max-width: 550px;
    max-height: 400px;
}

.panel p {
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 25px;
    transition: .3s ease all;
}
.panel label{
    color:#f4f4f4;
    font-size:22px;
}
.panel label,.panel textarea,.panel input{
      font-family: 'VT323', monospace;


}
.panel .btn{
  border:2px solid #f4f4f4;
  border-radius:5px;
  background-color:transparent;
  width: 100%;
  transition:background-color .3s ease;
  color:#f4f4f4;
}
.panel .btn:hover{
  background-color:#f4f4f4;
  transition:background-color .3s ease;
  color: #656565;
}
.panel span {
    font-size: 18px;
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    transition: .3s ease all;
}

.panel-heading {
  padding:0;
    border-bottom: 2px solid #f4f4f4;
}

.panel-body {
  padding:0;
}


</style>
