import {createRouter , createWebHistory} from "vue-router";

import pageOne from "../pages/pageOne.vue";
import pageTwo from "../pages/pageTwo.vue";
import pageThree from "../pages/pageThree.vue";

  import pageFour from "../pages/pageFour.vue";
const routes =  [
    {
        path : '/',
        name:"pageOne",
        component: pageOne,
    },
    {
        path : '/page2',
        name:"pageTwo",
        component: pageTwo,
    },
    {
        path : '/page4',
        name:"pageFour",
        component: pageFour,
    },
    {
        path : '/page3',
        name:"pageThree",
        component: pageThree,
    },
    
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});
export default router;