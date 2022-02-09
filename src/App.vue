<script setup>
import Input from './components/Input.vue'
import { ref,watchEffect } from 'vue'
const api = 'http://api.quotable.io/random'
const quote = ref("");
let spans = []




function getRandomQuote() {
  return fetch(api)
    .then(response => response.json())
    .then(data => data.content)
}

const processQuote = async (ex)=>{
  quote.value = await getRandomQuote()
  spans = []
}

watchEffect(async () => await processQuote())






</script>

<template>
<div class="timer" id="timer"></div>
  <div class="container">
  <div class="quote-display" id="quoteDisplay" v-if="quote">
    
    <span v-for="(char,i) in quote.split('')" :ref="el => { if (el)spans[i] = el   }">{{char}}</span>
    {{ spans.forEach(char =>{
      char.classList.remove('correct');
      char.classList.remove('incorrect');
      
    })}}

    
    
    
    <Input :pro="processQuote" :arrayQuote="spans"/>
    
    
    
  </div>
  </div>
  
</template>
