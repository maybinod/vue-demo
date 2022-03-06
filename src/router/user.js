import User from '../views/modules/user/Index.vue'
import Home from "../views/Home";
import Login from "../views/modules/auth/Login";
import Contact from "../views/Contact";
import ShowUser from "../views/modules/user/Show";
import CreateUser from "../views/modules/user/Create";

const user = [
  {
    component: User,
    name: 'users',
    path: '/users'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/user/:id',
    name: 'user',
    component: ShowUser
  },
  {
    path: '/user/create',
    name: 'user-create',
    component: CreateUser
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default user
