import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/PrincipalPage.vue')
  },
  {    
    path: '/pokemonList',
    component: () => import('src/pages/pokemons/indexPague.vue')
  },
  {    
    path: '/pokemon/:id',
    component: () => import('src/pages/pokemons/pokemonPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
