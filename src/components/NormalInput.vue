<script setup>
import { ref , onBeforeMount,onUpdated} from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
let data = ref([])
let input = ref(null)
let totalQuote = ref(0)



const props = defineProps({
  arrayQuote:Function,
  pro:Function
})
function execute() {
  let correct = true
  data.value = props.arrayQuote()
  data.value.forEach((characterSpan,index)=>{
  if(input.value[index] == null){
    characterSpan.classList.remove('correct')
    characterSpan.classList.remove('incorrect')
    correct = false
  }else if(characterSpan.innerText === input.value[index]){
    characterSpan.classList.add('correct')
    characterSpan.classList.remove('incorrect')
  }else{
    characterSpan.classList.remove('correct')
    characterSpan.classList.add('incorrect')
    correct = false
  }
  })
  
  if(correct){
    totalQuote.value++
    input.value = null
    props.pro();
  } 
}
</script>

<template>
  
  <textarea id="quoteInput" class="quote-input" v-model="input" @input='execute' autofocus  ></textarea>  
  <div class="point" id="timer"> Total Quote : {{totalQuote}}</div>
  
  
  
</template>