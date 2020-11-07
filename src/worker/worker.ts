import * as dotenv from 'dotenv'
dotenv.config({})
import { EMAIL_QUEUE_NAME, queueConfig } from '../queues'
import { Worker } from 'bullmq'



const worker = new Worker(
  EMAIL_QUEUE_NAME,
  async (job) => {
    console.log(`El mensaje enviado es:${job.data.message}`)
  },
  queueConfig
)

export default worker

// npm 