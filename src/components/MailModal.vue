<template lang="html">

  <div class="overlay" @click="closeModal">
  <transition @enter="scaleXEnter" @leave="scaleYLeave">
  <div class="panel"  ref="panel" v-if="showPanel" @click.stop >
        <div class="panel-heading">
<div class="row">
  <form class="form-horizontal">
    <fieldset>
      <legend>Legend</legend>
      <div class="form-group">
        <label for="inputEmail" class="col-lg-2 control-label">Email</label>
        <div class="col-lg-10">
          <input type="text" class="form-control" id="inputEmail" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="col-lg-2 control-label">Password</label>
        <div class="col-lg-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Checkbox
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="textArea" class="col-lg-2 control-label">Textarea</label>
        <div class="col-lg-10">
          <textarea class="form-control" rows="3" id="textArea"></textarea>
          <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
        </div>
      </div>
      <div class="form-group">
        <label class="col-lg-2 control-label">Radios</label>
        <div class="col-lg-10">
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              Option one is this
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
              Option two can be something else
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="select" class="col-lg-2 control-label">Selects</label>
        <div class="col-lg-10">
          <select class="form-control" id="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <br>
          <select multiple="" class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-10 col-lg-offset-2">
          <button type="reset" class="btn btn-default">Cancel</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
        </div>
        <div class="panel-body">
        <p>{{skill.about}}</p>
        </div>
    </div>
    </transition>
  </div>

</template>

<script>
import {eventBus} from '../main';
export default {
props:['skill','showModal','show'],
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
    this.$emit('toggleSkillModal');
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
    max-width:550px;
    max-height:400px;
}
.panel p {
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 25px;
    transition: .3s ease all;
}
.panel span{
  font-size:18px;
  color: #f4f4f4;
  font-family: 'VT323', monospace;
  transition: .3s ease all;
}
.panel-heading{
  border-bottom:2px solid #f4f4f4;
}
.panel-body{
  max-height:250px;
  overflow-y:scroll;
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
