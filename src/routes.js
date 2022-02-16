import Input from './components/Input.vue'
import NormalInput from './components/NormalInput.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/timerinput',
   name: "Input",
   component: Input,
   props:true
    
    },
  {
    path: '/',
    name: "NormalInput",
    component: NormalInput,
    
    
  },
 
  
]