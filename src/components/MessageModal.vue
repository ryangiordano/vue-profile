<template lang="html">

  <div class="overlay" @click="closeModal">
  <transition @enter="scaleXEnter" @leave="scaleYLeave">
  <div class="panel"  ref="panel" v-if="showPanel" @click.stop >
  <div class="panel-body">
    <h3>{{message}}</h3>
  </div>
    </div>
    </transition>
  </div>

</template>

<script>
import {eventBus} from '../main';
export default {
props:['message','showModal','show'],
data:function(){
  return{
    showPanel:false
  }
},
created(){
  setTimeout(()=>{
    this.showPanel=true;
  },100)
},
destroyed(){
  this.showPanel=false;
},
methods:{
  closeModal(){
    this.$emit('toggleMessageModal');
  },
  scaleXEnter(el,done){
    let tl = new TimelineMax;
    tl.from(el,.2,{
      scaleX:0,
      onComplete:done
    })
  },
  scaleXLeave(el,done){
    let tl = new TimelineMax;
    tl.to(el,.2,{
      scaleX:0,
      onComplete:done
    })
  },
  fadeEnter(el,done){
    let tl = new TimelineMax;
    tl.from(el,.2,{
      opacity:0,
      onComplete:done
    })
  },
  scaleYLeave(el,done){
    let tl = new TimelineMax;
    tl.to(el,.2,{
      scaleY:0,
      onComplete:done
    })
  },
  fadeLeave(el,done){
    let tl = new TimelineMax;
    tl.to(el,.2,{

      opacity:0,
      onComplete:done
    })
  },
},
ready:{

}
}
</script>

<style scoped>
.overlay{
  height:100%;
  width:100%;
  display:flex;
  top:0;
  left:0;
  position:fixed;
  z-index:999;
  align-items:center;
  justify-content:center;
  background-color:rgba(0,0,0,.5)
}
.image{
  width:50vw;
}
h3{
  color: #f4f4f4;
  font-family: 'VT323', monospace;
  font-size:34px;
}
.panel {
    overflow: hidden;
    background: rgba(107,194,101,0.9);
    background: -moz-linear-gradient(top, rgba(107,194,101,0.9) 0%, rgba(83,163,70,0.75) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(107,194,101,0.9)), color-stop(100%, rgba(83,163,70,0.75)));
    background: -webkit-linear-gradient(top, rgba(107,194,101,0.9) 0%, rgba(83,163,70,0.75) 100%);
    background: -o-linear-gradient(top, rgba(107,194,101,0.9) 0%, rgba(83,163,70,0.75) 100%);
    background: -ms-linear-gradient(top, rgba(107,194,101,0.9) 0%, rgba(83,163,70,0.75) 100%);
    background: linear-gradient(to bottom, rgba(107,194,101,0.9) 0%, rgba(83,163,70,0.75) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6bc265', endColorstr='#53a346', GradientType=0 );
    padding: 10px 20px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
    margin-bottom: 20px;
    /*max-width:550px;
    max-height:400px;*/
}
.panel-body{
  /*max-height:250px;*/
}
.panel-body::-webkit-scrollbar              { /* 1 */  background-color:transparent}
.panel-body::-webkit-scrollbar-button       { /* 2 */ }
.panel-body::-webkit-scrollbar-track        { /* 3 */     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.0);
    border-radius: 10px;}
.panel-body::-webkit-scrollbar-track-piece  { /* 4 */ }
.panel-body::-webkit-scrollbar-thumb        { /* 5 */     border-radius: 10px;opacity:0;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  background-color:rgb(151, 228, 163)}
.panel-body::-webkit-scrollbar-corner       { /* 6 */ }
.panel-body::-webkit-resizer                { /* 7 */ }
</style>
