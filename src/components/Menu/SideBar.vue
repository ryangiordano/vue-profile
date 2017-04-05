<template lang="html">
  <div class="side-menu xs-hidden">
    <router-link :to="{name:'status'}" :class="active" tag="li"exact>Status</router-link >
    <router-link :to="{name:'skills'}" tag="li">Skills</router-link >
    <!-- <router-link :to="{name:'equipment'}" tag="li">Equipment</router-link > -->

    <router-link :to="{name:'adventures'}" tag="li" :class="questActive">Quest Journal</router-link >
    <!-- <router-link :to="{name:'join-party'}" tag="li" >Invite to Party</router-link > -->
    <router-link to="/" tag="li" exact>Title Screen</router-link >
    <!-- <router-link :to="{name:'city-view'}" tag="li">Close</router-link > -->
  </div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    },
    computed: {
        active() {
            let active;
            //When the sub page is loaded, maintain active class on router link.
            if (this.$route.fullPath.indexOf('/status/detail/') >= 0) {
                active = 'router-link-active';
            } else {
                active = '';
            }
            return active;
        },
        questActive() {
            let active;
            if (this.$route.fullPath.indexOf('/adventures/') >= 0) {
                active = 'router-link-active';
            } else {
                active = '';
            }
            return active;
        }
    },
    created() {}

}
</script>

<style scoped>
.side-menu {
    background-color: rgba(40, 100, 201, 0.71);
    background: rgba(38, 140, 209, 1);
    background: -moz-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, .9) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(38, 140, 209, .9)), color-stop(100%, rgba(108, 103, 245, .9)));
    background: -webkit-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, .9) 100%);
    background: -o-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, .9) 100%);
    background: -ms-linear-gradient(top, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, .9) 100%);
    background: linear-gradient(to bottom, rgba(38, 140, 209, .9) 0%, rgba(108, 103, 245, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#268cd1', endColorstr='#6c67f5', GradientType=0);
    padding: 10px 10px;
    border-radius: 5px;
    border: 3px solid #f4f4f4;
    margin-bottom:20px;
}

.router-link-active {
    background-color: rgba(142, 199, 241, 0.56);
}

li {
    list-style: none;
    color: #f4f4f4;
    font-family: 'VT323', monospace;
    font-size: 25px;
    cursor: pointer;
    padding: 5px;
    transition: .3s ease all;
}
</style>
