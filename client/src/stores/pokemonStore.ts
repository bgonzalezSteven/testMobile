import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const pokemonStore = defineStore('pokemon', {

  state: () => ({
    pokemons: [],
    pokemonSearch: {},
    pokemonBaseStats: []
  }),
  actions: {
    async getPokemon() {
      await api.get('/pokemon?limit=20').then(res => {
        const data = res.results
        for (const i in data) {
          api.get(`/pokemon/${parseInt(i) + 1}`).then(res => {
            this.pokemons.push(res)
          })
        }
      })
    },
    async getPokemonId(id: number) {
      this.pokemonBaseStats = []
      this.pokemonSearch = this.pokemons[((this.pokemons.findIndex((info, index) => {
        if (info.id == id) {
          for (const i in info.stats) {
            this.pokemonBaseStats.push(info.stats[i].base_stat)
          }
          return info
        }
      })))]
    }
    
  }
})