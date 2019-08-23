<template>
  <ion-app>
    <ion-header>
      <ion-toolbar :color=toolbarcolor>
        <ion-title id="pagetitle">{{ pagetitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list v-if="todos.length > 0">
        <ion-item v-for="todo in todos" :key="todo.id">
          <ion-label>{{todo.title}}</ion-label>
        </ion-item>
      </ion-list>
      <ion-list v-else>
        <ion-item v-for="i in 20" :key="i">
          <ion-label>
            <ion-skeleton-text animated>
            </ion-skeleton-text>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-app>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      pagetitle: 'S A R A V T O D O S S S',
      todos: [],
      toolbarcolor: 'primary'
    }
  },
  created() {
    setTimeout(
      () => (
        this.getDataFromAPI()
        ), 3000)
  },
  methods: {
    async getDataFromAPI() {
      try {
        const req = await fetch('https://jsonplaceholder.typicode.com/todos')
        this.todos = await req.json()
      }
      catch(e) {
        console.error(`Error: ${e}`)
      }
    }
  }
}
</script>
