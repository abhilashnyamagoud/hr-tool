import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Employees from '../views/Employees.vue'
import Register from '../components/Register/Register.vue'
import AddEmployee from '../components/Employee/AddEmployee.vue';
import LeaveManagement from '../views/LeaveManagement.vue'
import AddLeave from '../components/Leave/AddLeave.vue'
import Holidays from '../views/Holidays.vue'
import AddHoliday from '../components/Holiday/AddHoliday.vue'
import EventsCalender from '../components/Events/EventsCalender.vue'

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
  },
  {
    path:'/holiday',
    name:"Holiday",
    component:Holidays
  },
  {
    path:'/holidayForm',
    name:"holidayForm",
    component:AddHoliday
  },
  {
    path:'/event',
    name:"Event",
    component:EventsCalender
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





export default router
