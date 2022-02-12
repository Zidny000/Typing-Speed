<script setup>
import Input from './components/Input.vue'
import { ref,watchEffect,onUpdated } from 'vue'
const api = 'http://api.quotable.io/random'
const quote = ref("");
let el = ref(null)

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
 
  Array.from(el.value.children).forEach(char =>{
      char.classList.remove('correct');
      char.classList.remove('incorrect');
      
    })
  
})
function spans() {
  return Array.from(el.value.children)
}
</script>

<template>


  <div class="container">
  <div class="quote-display" id="quoteDisplay" v-if="quote" ref="el">
   <span v-for="char in quote.split('')" >{{char}}</span>
    
  </div>
  <div>  
    <Input :pro="processQuote" :arrayQuote="spans"/>
  </div>

  </div>
  
</template>