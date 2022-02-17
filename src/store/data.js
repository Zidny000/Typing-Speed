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
            if(this.el == null){
                return 0
            }else{
                return Array.from(this.el.children)
            }
            

        }
    }
})