import * as dotenv from 'dotenv'
dotenv.config({})

import { emailQueue } from "./queues";


const start=()=>{
    let  counter=1;
    setInterval(()=>{
        counter=counter+1;
         emailQueue.add('msg',{message:`Mensaje No. #${counter}`})
        console.log(`Contador ${counter}`);
    },1000)
}

start()