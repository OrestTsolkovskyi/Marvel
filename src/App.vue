<template>
  <v-app id="app">
    <v-card color="rgba(255, 255, 255, 0.2)">
      <v-app-bar
          clipped-left
          color="rgba(255, 255, 255, 0.2)"
          dense
          elevation="5"
          flat>
        <v-container class="d-flex" style="max-width: 1020px">
          <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn
              class="mr-3 text-none"
              color="#27B769"
              dark
              elevation="5"
              to="/"
          >
            Home
          </v-btn>
          <v-btn
              class="text-none"
              color="#27B769"
              dark
              elevation="5"
              to="/todos"
          >
            Todos
          </v-btn>
        </v-container>
      </v-app-bar>
    </v-card>

    <router-view/>

  </v-app>
</template>


<style>
#app {
  font-family: 'Lato', cursive;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(39, 183, 105, 0.4);
}

</style>
