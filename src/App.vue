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
   <router-link to="/" >
      Normal Mode
   </router-link>
   <router-link to="/timerinput">
      Timer Mode
   </router-link>
  </div>
</template>

<style scope>

button {
  display: inline-block;
  margin:10px 15px 5px 0px;
  padding: 5px 10px;
  font-size: 17px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px #000000;
}

button:hover {background-color: #3e8e41}

button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

a, a:visited {
  margin:10px 15px 5px 0px;
  background-color: #1E0555;
  color: #F0DB4F;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
 
}

a:hover, a:active {
  background-color: #F0DB4F;
  color :blue;
  border:1px solid blue;
}


</style>

