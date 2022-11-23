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
              <q-input @keydown="changeList(state.filter)" dark bottom-slots v-model="state.filter"
                placeholder="Search pokemon" class="q-pl-sm">
                <template v-slot:append>
                  <q-icon v-if="state.filter !== ''" name="close" @click="state.filter = ''" class="cursor-pointer" />
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn flat round color="white" icon="tune" class="q-pl-md" @click="state.icon = true" />
            </div>
          </section>
        </div>
        <ListPokemonVue :pokemons="state.pokemons" :columns="state.columns" />
        <q-dialog v-model="state.icon">
          <q-card style="width: 100%;">
            <q-card-section class="q-pb-none">
              <q-btn class="text-primary" icon="close" flat round dense v-close-popup />
              <q-space />
            </q-card-section>
            <div class="text-left q-pa-md text-bold text-h6">
              Filtrer pokemon list
            </div>

            <q-card-section class="col items-center justify-center">
              <q-select class="q-pa-md" rounded filled v-model="state.number" :options="state.optionsNumber"
                label="Select movement number" />
              <q-select class="q-pa-md" rounded filled v-model="state.level" :options="state.optionsLevel"
                label="Select experience level" />
              <q-select class="q-pa-md text-capitalize" rounded filled v-model="state.type" :options="state.optionsType"
                label="Pokemon type" use-chips stack-label multiple />
            </q-card-section>
            <q-card-actions class="justify-between text-white q-pb-md">
              <q-btn v-close-popup class="bg-blue-4 m_btn" label="Cancel" />
              <q-btn  class="bg-primary m_btn"  label="Filter" />
            </q-card-actions>
          </q-card>
        </q-dialog>
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
      optionsNumber: pokemonStore().getPokemosMoves,
      optionsLevel: pokemonStore().getPokemosExperience,
      optionsType: pokemonStore().getPokemosType,
      type: [],
      number: '',
      level: '',
      icon: false,
      filter: '',
      pokemons: pokemonStore().getPokemonList,
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
    const changeList = (value: string) => {
      console.log(value)
    }
    return {
      state, changeList
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
.m_btn {
  text-transform: none;
  width: 7em
}
</style>