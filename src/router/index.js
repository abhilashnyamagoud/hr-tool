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
import Projects from '../views/Projects.vue'
import Tasks from '../views/Tasks.vue'
import AddTasks from '../components/Tasks/AddTasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path: '/emp',
    name: 'Employees',
    component: Employees,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/employeeForm',
    name:"Employee form",
    component:AddEmployee,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/leaveManagement',
    name:'leaveManagement',
    component:LeaveManagement,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/projects',
    name:'Projects',
    component:Projects,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/tasks',
    name:'Tasks',
    component:Tasks,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/addtasks',
    name:'AddTasks',
    component:AddTasks,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/addLeave',
    name:"addLeave",
    component:AddLeave,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/holiday',
    name:"Holiday",
    component:Holidays,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/holidayForm',
    name:"holidayForm",
    component:AddHoliday,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  },
  {
    path:'/event',
    name:"Event",
    component:EventsCalender,
    beforeRouteEnter: (to, from, next) => {
      let user = sessionStorage.getItem("token")
      if(user){
        from="/"
        next()
      }else{
        to="/"
      }
    },
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





export default router
