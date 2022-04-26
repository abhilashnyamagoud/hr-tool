import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Employees from '../views/Employees.vue'
import Register from '../components/Register/Register.vue'
import AddEmployee from '../components/Employee/AddEmployee.vue';
import LeaveManagement from '../views/LeaveManagement.vue'
import AddLeave from '../components/Leave/AddLeave.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    
  },
  {
    path: '/emp',
    name: 'Employees',
    component: Employees
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path:'/employeeForm',
    name:"Employee form",
    component:AddEmployee
  },
  {
    path:'/leaveManagement',
    name:'leaveManagement',
    component:LeaveManagement
  },
  {
    path:'/addLeave',
    name:"addLeave",
    component:AddLeave
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
