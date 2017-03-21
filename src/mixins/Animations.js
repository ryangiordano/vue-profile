export const AnimationMixin ={
  data () {
    return {
      duration:.5
    }
  },
  methods:{
    fadeEnter(el,done){
      let tl = new TimelineMax;
      tl.from(el,this.duration,{
        opacity:0,
        onComplete:done
      })
    },
    fadeLeave(el,done){
      let tl = new TimelineMax;
      tl.to(el,this.duration,{
        opacity:0,
        onComplete:done
      })
    },
  }
}
