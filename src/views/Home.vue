<template>
  <div class="home">
  <div v-if="list.length > 0"></div>
    <div v-for="item in list" :key="item.id">
      <Singleitem :item="item" />
    </div>
  </div>
</template>

<script>
import Singleitem from "../components/Singleitem.vue";
export default {
  name: 'Home',
  components: { Singleitem },
  data() {
    return {
      list: []
    }
  },
  mounted() { 
    fetch('http://localhost:3000/list')
      .then(res => res.json())
      .then(data => this.list = data)
      .catch(err => console.log(err.message))
  }
}
</script>
