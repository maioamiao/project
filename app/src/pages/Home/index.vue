<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key= "floor.id" :list = "floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// import TypeNav from "./TypeNav/index.vue";
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import {mapState} from "vuex"
export default {
    components: { ListContainer,Recommend,Rank,Like,Floor,Brand},

    mounted(){
      this.$store.dispatch("getFloorList")
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }
}
</script>

<style>

</style>