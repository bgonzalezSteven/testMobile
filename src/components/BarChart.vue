<template>
  <div>
    <canvas id="myChart" width="100" height="100"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';
import { pokemonStore } from '../stores/pokemonStore';

export default {
  mounted() {
    const ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Speed', 'Sp Defense', 'Sp Attack', 'Defense', 'Attack', 'HP'],
        datasets: [{
          barThickness: 20,
          axis: 'y',
          data: (pokemonStore().$state.pokemonBaseStats).reverse(),
          backgroundColor: '#072AC8',
          borderWidth: 2
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    })
    myChart;
  },
}
</script>