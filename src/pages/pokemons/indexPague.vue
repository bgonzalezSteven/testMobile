<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="bg-grey-4">
        <div class="mi_banner">
          <section class="q-pt-xl row text-white">
            <p class="text-left q-pt-xl q-pl-lg q-pb-md">
              What pokemon are you looking for?
            </p>
            <div class="q-pt-lg q-pl-lg row">
              <q-input dark bottom-slots v-model="state.filter" placeholder="Search pokemon" class="q-pl-sm">
                <template v-slot:append>
                  <q-icon  v-if="state.filter !== ''" name="close" @click="state.filter = ''" class="cursor-pointer" />
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn flat round color="white" icon="tune" class="q-pl-md" />
            </div>
          </section>
        </div>
        <ListPokemonVue :pokemons="state.pokemons" :columns="state.columns"/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { pokemonStore } from 'src/stores/pokemonStore';
import { defineComponent, reactive } from 'vue'
import ListPokemonVue from 'src/components/ListPokemon.vue';
export default defineComponent({
  components: {
    ListPokemonVue
  },
  setup() {
    const state = reactive({
      filter: '',
      pokemons: pokemonStore().$state.pokemons,
      options: pokemonStore().$state.pokemonSearchList,
      columns: [
        {
          name: 'name',
          requiered: true,
          align: 'center',
          label: 'Name',
          field: 'name',
        }
      ],
    })
    return {
      state
    }
  },
})
</script>
<style scoped>
.mi_banner {
  word-wrap: break-word;
  width: 100% !important;
  left: 0px;
  top: 0px;
  background: #072AC8;
  background-image: linear-gradient(rgb(7 42 200 / 65%), rgb(7 42 200 / 65%)), url('/src/assets/pokebola.png');
  background-repeat: no-repeat;
  background-position: 265px 5px;
  background-size: 13em;
}

div section {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  color: #FCFCFC;
}

div section p {
  width: 275px;
  height: 56px;
}
</style>