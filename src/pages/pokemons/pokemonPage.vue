<template>
  <q-layout view="lHh LpR lFf">
    <q-toolbar style="height: 50px" class="bg-grey-3 text-black">
      <q-btn flat round color="primary" icon="arrow_back" v-if="$route.path != '/pokemonList'"
        @click="$router.go(-1)" />
    </q-toolbar>
    <q-page-container>
      <q-page>
        <section class="q-pa-md col justify-center text-center me_text bg-grey-3">
          <span class="text-bold text-capitalize">{{ pokemon.name }}</span> <span class="q-pl-md text-h5">#{{
              pokemon.id
          }}</span>
          <br />
          <q-img :src="pokemon.sprites.other.home.front_default" alt="img" />
        </section>
        <div class="q-pa-md">
          <detailsPokemonVue :pokemon="pokemon"/>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { pokemonStore } from '../../stores/pokemonStore';
import detailsPokemonVue from 'src/components/detailsPokemon.vue';

export default defineComponent({
  components: {
    detailsPokemonVue
  },
  setup() {
    return {
      pokemon: ref(pokemonStore().$state.pokemonSearch)
    }
  }

})
</script>
<style scoped>
.q-img {
  width: 50%;
  height: 50%;
}

.me_text {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #3B3B3B;
}
</style>