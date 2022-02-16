import { defineStore } from 'pinia'

export const data = defineStore('data',{
    state:()=>{
        return{
            pro:null,
            el:null,
        }
    },
    actions:{
        spans(){
            
            return Array.from(this.el.children)

        }
    }
})