<script setup>
import { ref , onBeforeMount,onUpdated} from 'vue'
import {data} from '../store/data'


const useData = data()

let datas = ref([])
let input = ref(null)
let totalQuote = ref(0)

if(useData.spans()){
  useData.pro();
}


function execute() {
  let correct = true
  datas.value = useData.spans()
  datas.value.forEach((characterSpan,index)=>{
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
    useData.pro();
  } 
}
</script>

<template>
  <div>
  <textarea id="quoteInput" class="quote-input" v-model="input" @input='execute' autofocus  ></textarea>  
  <div class="point" id="timer"> Total Quote : {{totalQuote}}</div>
  </div>
</template>