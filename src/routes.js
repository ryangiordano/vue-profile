import Home from './components/Home.vue';
import MenuScreen from './components/Menu/MenuScreen.vue';

export const routes = [
  {path:'/',component: Home,name:'Home'},
  {path:'/main-menu',component: MenuScreen},
  {path:'*', redirect: Home}
]
