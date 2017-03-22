<template lang="html">
<div class="inner-menu row">
  <div class="portrait col-xs-2">
<img src="../../../assets/logo.png" alt="" style="height:100px;margin:10px">
  </div>
  <div class="status col-xs-7">
    <h3>Ryan Giordano</h3>
    <h4>LVL 3 Web Developer</h4>
  </div>
  <div class="exp col-xs-3">
      <div class="exp-bar">
        <div class="exp-fill" :style="xpFill">
          <!-- TODO: write script to tie xp bar with years/days -->
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  data:function(){
    return{
      xpFill:{width: '0%'}
    }
  },
  mounted(){

        this.xpFill.width = '30%';

  }
}
</script>

<style lang="css">
.inner-menu{
  font-family: 'VT323', monospace;
  color: #f2f2f2;
  margin:5px;
  border-radius:5px;
  border:3px solid #f4f4f4;
  display:flex;
}
h3{
  font-family: 'VT323', monospace;
  color: #f2f2f2;
  font-size: 30px;
  margin:5px 0px;
}
h4{
  font-family: 'VT323', monospace;
  margin:5px 0px;
}
.exp-bar{
  border:2px solid #ededed;
  margin:10px;
  height:30px;

}
.exp-fill{
  height:100%;
  width:30%;
  background: rgba(241,231,103,1);
background: -moz-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(254,182,69,1)));
background: -webkit-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -o-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -ms-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: linear-gradient(to right, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#feb645', GradientType=1 );
transition:.5s ease all .2s;
}
</style>
