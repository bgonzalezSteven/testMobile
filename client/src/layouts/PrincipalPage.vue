<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center column">
        <section>
        <q-avatar size="300px">
          <q-img src="../assets/pokemon.svg" />
        </q-avatar>
        </section>
        <section>
          <q-spinner-orbit color="white" size="3.5em" />
        </section>
          <p class="q-pt-md text-subtitle2">Please wait a moment</p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { pokemonStore } from '../stores/pokemonStore';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const storePokemon = pokemonStore()
    return {
      storePokemon
    }
  },
  mounted() {
    setTimeout(() => {
      this.storePokemon.getPokemon()
      this.$router.push('pokemonList')
    }, 1500)
  },
});
</script>
