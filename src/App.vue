<script setup>
import Input from './components/Input.vue'
import NormalInput from './components/NormalInput.vue'
import {data} from './store/data'
import { ref,watchEffect,onUpdated } from 'vue'
const api = 'http://api.quotable.io/random'
const useData = data();

const quote = ref("");
let el = ref(null)
let con = ref(true);
function getRandomQuote() {
  return fetch(api)
    .then(response => response.json())
    .then(data => data.content)
}
const processQuote = async (ex)=>{
  quote.value = await getRandomQuote()
  
}
watchEffect(async () => {
  await processQuote()
  
  })
onUpdated(() => {
  if(el.value.children){
    Array.from(el.value.children).forEach(char =>{
      char.classList.remove('correct');
      char.classList.remove('incorrect');
      
    })
  }

  
})


useData.pro = processQuote;
useData.el = el
</script>

<template>
  <div class="container">
  <div class="quote-display" id="quoteDisplay" v-if="quote" ref="el">
   <span v-for="char in quote.split('')" >{{char}}</span>
  </div>
  <router-view></router-view>
   <router-link to="/timerinput" >
      Timer Mode
   </router-link>
   <router-link to="/" >
      Normal Mode
   </router-link>
    
  </div>
 
  
</template>

