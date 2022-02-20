<template>
  <v-app class="cena">
    <v-main>
       <v-container fluid>
           <inicio/> 
          
        </v-container>
    </v-main>
  </v-app>
</template>


<script>
import inicio from '../components/inicio.vue';
export default {
  name: 'Home',
  
  components: {
    inicio
  },
};
</script>

<style scoped>

 .cena{
    background-color: rgb(23, 23, 34);
}
</style>
