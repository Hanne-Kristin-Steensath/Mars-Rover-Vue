import { createRouter, createWebHashHistory } from 'vue-router';
import RoverView from './views/RoverView.vue';
import HomeView from './views/HomeView.vue';
import SubscribeView from './views/SubscribeView.vue';

const routes = [
  {
    component: HomeView,
    path: '/',
  },
  {
    component: RoverView,
    path: '/curiosity',
    props: { roverName: 'Curiosity' },
  },
  {
    component: RoverView,
    path: '/opportunity',
    props: { roverName: 'Opportunity' },
  },
  {
    component: RoverView,
    path: '/spirit',
    props: { roverName: 'Spirit' },
  },
  {
    component: SubscribeView,
    path: '/subscribeview/:parameter',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
