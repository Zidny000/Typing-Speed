<script setup>
import { ref,data } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup


let datas =([])


let input = ref(null)
const props = defineProps({
  
  pro:Function
})

data(){
  return data
}



console.log(data.value)

function execute() {
  let correct = true
  data.value.forEach((characterSpan,index)=>{
  if(input.value[index] == null){
    characterSpan.classList.remove('correct')
    characterSpan.classList.remove('incorrect')
    correct = false
    console.log("z")
  }else if(characterSpan.innerText === input.value[index]){
    characterSpan.classList.add('correct')
    characterSpan.classList.remove('incorrect')
    console.log("y")
  }else{
    characterSpan.classList.remove('correct')
    characterSpan.classList.add('incorrect')
    correct = false
    console.log("z")
  }

  })
console.log(correct)

if(correct){
  
  input.value = null
  props.pro()
  data.value = []
  

} 
}


</script>

<template>
  
  <textarea id="quoteInput" class="quote-input" v-model="input" @input='execute' autofocus></textarea>
  
</template>

