import Home from './components/Home.vue';
import MenuScreen from './components/Menu/MenuScreen.vue';
import Status from './components/Menu/Status/Status.vue';
import Skills from './components/Menu/Skills/Skills.vue';
import Equipment from './components/Menu/Equipment/Equipment.vue';
import JoinParty from './components/Menu/Party/JoinParty.vue';
import Adventures from './components/Menu/Quests/Adventures.vue';
import CharacterDetail from './components/Menu/Status/CharacterDetail.vue';

export const routes = [{
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/main-menu',
        component: MenuScreen,
        children: [{
                path: '',
                redirect:'status'
            },
            {
                    path: '/status/detail/:id',
                    name: 'detail',
                    component: CharacterDetail
                },
            {
                path: 'status',
                name: 'status',
                component: Status
            },
            {
                path: 'equipment',
                name: 'equipment',
                component: Equipment
            },
            {
                path: 'adventures',
                name: 'adventures',
                component: Adventures
            },
            {
                path: 'join-party',
                name: 'join-party',
                component: JoinParty
            },
            {
                path: 'skills',
                name: 'skills',
                component: Skills,
            },
            {
                path: '*',
                redirect: 'status'
            }

        ]
    },
    {
        path: '*',
        redirect: {
            name: 'Home'
        }
    }
]
