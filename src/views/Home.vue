<template>
  <div class="home">
  <div v-if="list.length > 0"></div>
    <div v-for="i in list" :key="i.id">
    <p>{{ i.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
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
