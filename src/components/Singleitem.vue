<template>
  <div class="item" :class="{ done: item.done}">
    <div class="actions">
        <h3 @click="toggleDetails" >{{ item.title }}</h3>
        <div class="icons">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <span class="material-symbols-outlined">edit</span>
          <span @click="deleteItem" class="material-symbols-outlined">delete</span>
          
          <span @click="toggleDone" v-show="item.done" class="material-symbols-outlined tick">done</span>
          <span @click="toggleDone" v-show="!item.done" class="material-symbols-outlined tick">exclamation</span>    
        
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
    deleteItem() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => {
          this.$emit('delete', this.item.id)
        })
        .catch(err, console.log(err.message))
    },
    toggleDone() {
      fetch(this.uri, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({ done: !this.item.done })
      }).then(() => {
          this.$emit('done', this.item.id)
          }).catch((err) => console.log(err.message))
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
    border-left: 5px solid #e90074;
  }
  .item .tick {
    color: #e90074;
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
  .item.done {
    border-left: 5px solid #00ce89;
  }
  .item.done .tick {
    color: #00ce89;
  }
</style>