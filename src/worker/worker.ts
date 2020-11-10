import * as dotenv from 'dotenv'
dotenv.config({})
import { EMAIL_QUEUE_NAME, redis } from '../queues'
import { Worker } from 'bullmq'

const worker = new Worker(
  EMAIL_QUEUE_NAME,
  async (job) => {
    console.log(`El mensaje enviado es:${job.data.message}`)
  },
  { connection: redis }
)

export default worker

