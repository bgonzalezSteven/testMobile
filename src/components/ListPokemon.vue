<template>
  <div class="q-pa-md">
    <q-table grid :rows="pokemons" :columns="columns" row-key="name" v-model:pagination="state.pagination"
      hide-pagination class="q-pb-xl">
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card clickable @click="search(props.row.id), $router.push(`pokemon/${props.row.id}`)">
            <q-card-section class="text-left bg-grey-3">
              <q-img :src="props.row.sprites.other.home.front_default" alt="img" />
              <br>
            </q-card-section>
            <q-card-section>
              <strong class="text-capitalize font-prototype">{{ props.row.name }}</strong>
              <br />
              <p class="text-subtitle1 subtitle_me"># {{ props.row.id }}</p>
              <p class="subtitle_me">Moves <span class="text-bold text-black">{{ props.row.moves.length }}</span><span
                  style="padding-left: 2em;" />Experiencia <span class="text-bold text-black">{{
                      props.row.base_experience
                  }}</span></p>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <span v-for="index in props.row.types" :key="index.name">
                <q-chip class="text-capitalize" :icon="`mdi-${index.type.name}`">{{ index.type.name }}</q-chip>
              </span>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
  <div class="row justify-center q-mt-md full-width bg-white q-pt-md q-pb-md fixed-bottom">
    <q-pagination gutter="30px" direction-links v-model="state.pagination.page" color="primary" :max="pagesNumber"
      size="md" />
  </div>
</template>
<script lang="ts">
import { pokemonStore } from 'src/stores/pokemonStore'
import { defineComponent, computed, reactive } from 'vue'
export default defineComponent({
  props: {
    pokemons: Array,
    columns: Array
  },
  setup(props) {
    const state = reactive({
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 4
        // rowsNumber: xx if getting data from a server
      },
    })
    const search = (id) => {
      pokemonStore().getPokemonId(id)
    }
    return {
      state,
      pagesNumber: computed(() => Math.ceil(props.pokemons.length / 4)),
      search
    }
  }

})
</script>
<style scoped>
.q-card,
.q-img {
  border-radius: 2em;
}

.font-prototype {
  width: 296px;
  height: 28px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #3B3B3B;
}

.subtitle_me {
  width: 200px;
  height: 22px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #8D91A5;
}
</style>

