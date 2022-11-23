<template>
  <div class="q-gutter-y-md">
    <q-tabs v-model="state.tab" dense align="left" class="bg-white text-primary" :breakpoint="0">
      <q-tab name="about" label="About" />
      <q-tab name="moves" label="Moves" />
    </q-tabs>
    <q-tab-panels v-model="state.tab" animated>
      <q-tab-panel name="about">
        <q-list>
          <q-item dense>
            <q-item-section>
              <q-item-label>Species:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold text-black text-capitalize">{{ pokemon.species.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Height:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold text-black">{{ pokemon.height / 10 }}cm</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Weight:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold text-black">{{ pokemon.weight / 10 }} kg</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Abilities:</q-item-label>
            </q-item-section>
            <q-item-section v-for="index in pokemon.abilities" :key="index.ability">
              <q-item-label class="text-bold text-black text-capitalize">{{ (index.ability.name).replace('-', ' ') }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Experience:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold text-black">{{ pokemon.base_experience }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Type:</q-item-label>
            </q-item-section>
            <q-item-section v-for="index in pokemon.types" :key="index.type">
              <q-item-label class="text-bold text-black text-capitalize">
                <q-chip square :color="state.color[Math.floor(Math.random(state.color) * 7)]" text-color="white">{{
                    index.type.name
                }}</q-chip>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div>
          <div class="q-pt-lg text-bold me_text">
            Base stats
          </div>

          <BarChart />
        </div>
      </q-tab-panel>

      <q-tab-panel name="moves">
        <p class="me_text">{{ pokemon.moves.length }} Moves</p>
        <section class="row q-pa-sm justify-center text-center">
          <div v-for="index in pokemon.moves" :key="index" class="col-4 q-pa-sm">
            <q-card v-bind:class="{
              'bg-indigo-14': (pokemon.moves.indexOf(index) + 1) % 3 === 2, 'bg-green-14': (pokemon.moves.indexOf(index) + 1) % 3 !== 2
            }" class="text-white">
              <q-icon :name="`${(pokemon.moves.indexOf(index) + 1) % 3 !== 2 ? 'mdi-arm-flex' : 'mdi-bomb'}`" size="sm"/>
              <div>
                <div class="text-capitalize">
                  <br />
                  {{ (index.move.name).replace('-', ' ') }}
                </div>
              </div>
            </q-card>
          </div>
        </section>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import BarChart from './BarChart.vue'
export default defineComponent({
  components: {
    BarChart
  },
  props: {
    pokemon: {}
  },
  setup(props) {
    console.log(props)
    const state = reactive({
      tab: 'about',
      color: [
        'red',
        'blue',
        'cyan',
        'indigo',
        'purple',
        'teal',
        'green',
        'orange'
      ]
    })
    return {
      state, props
    }
  }
})
</script>
<style scoped>
.q-tab {
  text-transform: none
}

.q-list {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #8D91A5;
}

.me_text {
  width: 100px;
  height: 30px;
  font-family: 'Readex Pro';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #55596D;
}
</style>