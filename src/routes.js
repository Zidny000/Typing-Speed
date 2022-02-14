import Input from './components/Input.vue'
import NormalInput from './components/NormalInput.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/timerinput/:props',
   name: "Input",
   component: Input,
    props:true
    },
  {
    path: '/normalinput/:props',
    name: "NormalInput",
    component: NormalInput,
    props:true
    
  },
 
  
]