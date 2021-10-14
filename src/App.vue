<template>
  <v-app id="app">
    <v-container class="px-0 pl-5 pt-0" fluid style="max-width: 1020px;">
      <v-card color="rgba(255, 255, 255, 0.2)">
        <v-app-bar color="rgba(255, 255, 255, 0.2)" dense elevation="5" flat>
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
        </v-app-bar>
      </v-card>
    </v-container>
    <router-view/>

  </v-app>
</template>


<style>
#app {
  font-family: 'Oldenburg', cursive;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(39, 183, 105, 0.4);
}

</style>
