<script setup>
import { ref , onBeforeMount,onUpdated} from 'vue'
import {data} from '../store/data'

const useData = data();

let datas = ref([])
let input = ref(null)
let totalChar = ref(0)
let rightChar = ref(0)
let totalCharA = ref(0)
let rightCharA = ref(0)
let time = ref(60);
let timer;

if(useData.spans()){
  useData.pro();
}

function reset(){
  time.value = 60;
  totalCharA.value = 0;
  rightCharA.value = 0;
  rightChar.value = 0;
  totalChar.value = 0;
  input.value = null
  clearInterval(timer) 
  useData.pro();
}

function start(){
  clearInterval(timer)
  timer = setInterval(()=>{
    time.value--
    if(time.value == 0){
      totalCharA.value = totalChar.value
      if(input.value != null){
        datas.value.forEach((char,i)=>{     
        if(char.innerText == input.value[i]){
          rightChar.value++
        }
        })
      }
     
      rightCharA.value = rightChar.value
      clearInterval(timer)   
    }
  
  },1000);
}

function execute() {
  totalChar.value++

  let correct = true
  datas.value = [...useData.spans()];
  console.log(datas.value)
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
    rightChar.value = rightChar.value + input.value.split('').length
    input.value = null
    useData.pro();
  } 
}
</script>

<template>
  <div>
  <textarea id="quoteInput" class="quote-input" v-model="input" @input='execute' autofocus  ></textarea>
  <div class="point" id="timer"> Timer : {{time}}</div>
  <button @click="start">Start</button>
  <button @click="reset">Reset</button>
  <div class="point" id="timer"> Total Entries : {{totalCharA}}</div>
  <div class="point" id="timer"> Right Entries : {{rightCharA}}</div>
  </div>
</template>