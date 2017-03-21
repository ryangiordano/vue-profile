import Home from './components/Home.vue';
import MenuScreen from './components/Menu/MenuScreen.vue';
import Status from './components/Menu/Status.vue';
import Skills from './components/Menu/Skills.vue';
import Equipment from './components/Menu/Equipment.vue';
import JoinParty from './components/Menu/JoinParty.vue';

export const routes = [{
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/main-menu',
        component: MenuScreen,
        children: [
          {
            path:'',
            name:'status',
            component:Status
          },
            {
                path: 'status',
                              name:'status',
                component: Status
            },
            {
                path: 'equipment',
                              name:'equipment',
                component: Equipment
            },
            {
                path: 'join-party',
                              name:'join-party',
                component: JoinParty
            },
            {
                path: 'skills',
                              name:'skills',
                component: Skills
            },
            {
              path:'*',
              redirect:'status'
            }

        ]
    },
    {
        path: '*',
        redirect: Home
    }
]
