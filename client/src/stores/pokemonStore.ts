import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const pokemonStore = defineStore('pokemon', {

  state: () => ({
    pokemons: [],
    pokemonSearch: {},
    pokemonBaseStats: [],
    pokemosMovesAll: [],
    pokemosExperienceAll: [],
    pokemosTypes: []
  }),
  actions: {
    async getPokemon() {
      await api.get('/pokemon?limit=20').then(res => {
        const data = res.results
        for (const i in data) {
          api.get(`/pokemon/${parseInt(i) + 1}`).then(res => {
            this.pokemosMovesAll.push(res.moves.length) //Movimientos
            this.pokemosExperienceAll.push(res.base_experience) //Experiencia
            // Tipos
            const temp = res.types
            for (const i in temp) {
              if (this.pokemosTypes.indexOf(temp[i].type.name) < 0) {                
                this.pokemosTypes.push(temp[i].type.name)
              }
            }
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
            this.pokemonBaseStats.push(info.stats[i].base_stat) // Datos para las estadisticas de la grafica
          }
          return info
        }
      })))]
    }    
  },
  getters: {
    getPokemonList: (state) => state.pokemons,
    getPokemosMoves: (state) => state.pokemosMovesAll,
    getPokemosExperience: (state) => state.pokemosExperienceAll,
    getPokemosType: (state) => state.pokemosTypes
  }
})