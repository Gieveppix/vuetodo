<template>
  <div class="home">
  <FilterNav @filterChange="currentFilter = $event" :currentFilter="currentFilter" />
  <div v-if="list.length > 0"></div>
    <div v-for="item in filteredItems" :key="item.id">
      <Singleitem :item="item" @delete="handleDelete" @done="handleDone" />
    </div>
  </div>
</template>

<script>
import Singleitem from "../components/Singleitem.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: 'Home',
  components: { Singleitem, FilterNav, FilterNav },
  data() {
    return {
      list: [],
      currentFilter: 'all'
    }
  },
  mounted() { 
    fetch('http://localhost:3000/list')
      .then(res => res.json())
      .then(data => this.list = data)
      .catch((err) => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.list = this.list.filter((item) => {
        return item.id !== id
      })
    },
    handleDone(id) {
      let l = this.list.find(item => {
        return item.id === id
      })
      l.done = !l.done
    }
  },
  computed: {
    filteredItems() {
      if (this.currentFilter === 'done'){
        return this.list.filter(list => list.done)
      }
      if (this.currentFilter === 'inProgres'){
        return this.list.filter(list => !list.done)
      }
      return this.list
    }
  }
}
</script>
