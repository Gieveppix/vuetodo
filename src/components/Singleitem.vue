<template>
  <div class="item">
    <div class="actions">
        <h3 @click="toggleDetails" >{{ item.title }}</h3>
        <div class="icons">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <span class="material-symbols-outlined">edit</span>
          <span @click="deleteProject" class="material-symbols-outlined">delete</span>
          <span class="material-symbols-outlined">done</span>    
        </div>
    </div>
    <div class="details" v-if="showDetails">
        <p>{{ item.details }}</p>
    </div>
  </div>
</template>

<script>
export default { 
  props: ['item'], 
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/list/' + this.item.id
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.item.id))
        .catch(err, console.log(err.message))
    }
  }
}
</script>

<style>
.item {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-symbols-outlined:hover {
    color: #777;
  }
</style>