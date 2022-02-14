import Input from './components/Input.vue'
import NormalInput from './components/NormalInput.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/timerinput/:prop',
   name: "Input",
   component: Input,
    
    },
  {
    path: '/normalinput/:prop',
    name: "NormalInput",
    component: NormalInput,
    
    
  },
 
  
]