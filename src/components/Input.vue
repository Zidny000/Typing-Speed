<script setup>
import { ref , onBeforeMount,onUpdated} from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
let data = ref([])
let input = ref(null)
let totalChar = ref(0)
let rightChar = ref(0)
let totalCharA = ref(null)
let rightCharA = ref(null)
let time = ref(60);

let timer;
function reset(){
  time.value = 60;
  totalCharA.value = null;
  rightCharA.value = null;
  rightChar = 0;
  totalChar = 0;
  input.value = null
  props.pro();
}
function start(){
  
  timer = setInterval(()=>{
    time.value--
    if(time.value == 0){
      totalCharA.value = totalChar.value
      if(input.value != null){
        data.value.forEach((char,i)=>{     
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
const props = defineProps({
  arrayQuote:Function,
  pro:Function
})
function execute() {
  totalChar.value++
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
  console.log(correct)
  if(correct){
    rightChar.value = rightChar.value + input.value.split('').length
    input.value = null
    props.pro();
  } 
}
</script>

<template>
  
  <textarea id="quoteInput" class="quote-input" v-model="input" @input='execute' autofocus  ></textarea>
  <div class="point" id="timer"> Timer : {{time}}</div>
  <button @click="start">Start</button>
  <button @click="reset">Reset</button>
  <div class="point" id="timer"> Total Entries : {{totalCharA}}</div>
  <div class="point" id="timer"> Right Entries : {{rightCharA}}</div>
  
  
</template>