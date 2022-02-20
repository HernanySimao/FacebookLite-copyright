<template>
  <v-app class="cena">
    <v-main>
      <router-view/>
     
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style scoped>
.cena{
    background-color: rgb(23, 23, 34);
}
</style>