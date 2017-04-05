import Home from './components/Home.vue';

//lazy loading syntax for webpack:
const MenuScreen = resolve => {
    require.ensure(['./components/Menu/MenuScreen.vue'], () => {
        resolve(require('./components/Menu/MenuScreen.vue'));
    })
};
const Status = resolve => {
    require.ensure(['./components/Menu/Status/Status.vue'], () => {
        resolve(require('./components/Menu/Status/Status.vue'));
    })
};
const Skills = resolve => {
    require.ensure(['./components/Menu/Skills/Skills.vue'], () => {
        resolve(require('./components/Menu/Skills/Skills.vue'));
    })
};
const Equipment = resolve => {
    require.ensure(['./components/Menu/Equipment/Equipment.vue'], () => {
        resolve(require('./components/Menu/Equipment/Equipment.vue'));
    })
};

const JoinParty = resolve => {
    require.ensure(['./components/Menu/Party/JoinParty.vue'], () => {
        resolve(require('./components/Menu/Party/JoinParty.vue'));
    })
};

const Adventures = resolve => {
    require.ensure(['./components/Menu/Quests/Adventures.vue'], () => {
        resolve(require('./components/Menu/Quests/Adventures.vue'));
    })
};

const CharacterDetail = resolve => {
    require.ensure(['./components/Menu/Status/CharacterDetail.vue'], () => {
        resolve(require('./components/Menu/Status/CharacterDetail.vue'));
    })
};

const CharacterQuests = resolve => {
    require.ensure(['./components/Menu/Quests/CharacterQuests.vue'], () => {
        resolve(require('./components/Menu/Quests/CharacterQuests.vue'));
    })
};

const QuestDetail = resolve => {
    require.ensure(['./components/Menu/Quests/AdventureDetail.vue'], () => {
        resolve(require('./components/Menu/Quests/AdventureDetail.vue'));
    })
};

const CityView = resolve => {
    require.ensure(['./components/CityView.vue'], () => {
        resolve(require('./components/CityView.vue'));
    })
};

// import MenuScreen from './components/Menu/MenuScreen.vue';
// import Status from './components/Menu/Status/Status.vue';
// import Skills from './components/Menu/Skills/Skills.vue';
// import Equipment from './components/Menu/Equipment/Equipment.vue';
// import JoinParty from './components/Menu/Party/JoinParty.vue';
// import Adventures from './components/Menu/Quests/Adventures.vue';
// import CharacterDetail from './components/Menu/Status/CharacterDetail.vue';

export const routes = [{
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
            path: '/city-view',
            component: CityView,
            name: 'city-view'
        },
    {
        path: '/main-menu',
        component: MenuScreen,
        children: [{
                path: '',
                redirect: 'status'
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
                component: Adventures,
                children:[
                  {
                      path: '/adventures/:charId',
                      name: 'character-quests',
                      component: CharacterQuests
                  },
                  {
                      path: '/adventures/:charId/:id',
                      name: 'adventure-detail',
                      component: QuestDetail
                  },
                  {
                      path: '',
                      name: 'adventure-detail',
                      component: CharacterQuests
                  },
                ]
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
