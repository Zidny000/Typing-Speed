<script setup>
import Input from './components/Input.vue'
import NormalInput from './components/NormalInput.vue'
import { ref,watchEffect,onUpdated } from 'vue'
const api = 'http://api.quotable.io/random'
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
function spans() {
  return Array.from(el.value.children)
}
console.log(con)
</script>

<template>

  
  
  <div class="container">
  <div class="quote-display" id="quoteDisplay" v-if="quote" ref="el">
   <span v-for="char in quote.split('')" >{{char}}</span>

  
   
    <router-link :to="{name:'Input',params:{prop:'ibjhbjj'}}" >
      Timer Mode
    </router-link>
     <router-link :to="{name:'NormalInput',params:{prop:'ibjhbjj'}}" >
      Normal Mode
    </router-link>
    <router-view></router-view>
  </div>

  </div>
 
  
</template>

