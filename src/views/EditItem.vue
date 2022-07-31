<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Item</button>
  </form>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            uri: 'http://localhost:3000/list/' + this.id,
            title: '',
            details: ''
        }
    },
    mounted() {
        fetch(this.uri)
            .then(res => res.json())
            .then(data => {
                this.title = data.title
                this.details = data.details
        }).catch(err => console.log(err))
    }
}
</script>

<style>

</style>