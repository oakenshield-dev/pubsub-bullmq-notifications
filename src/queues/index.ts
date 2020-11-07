import { Queue } from 'bullmq'

const EMAIL_QUEUE_NAME = 'send-email'
const queueConfig = {
  connection: {
    port: parseInt(process.env.REDIS_PORT || '3000'),
    host: process.env.REDIS_HOST
  }
}

const emailQueue = new Queue(EMAIL_QUEUE_NAME, queueConfig)

export {EMAIL_QUEUE_NAME,queueConfig,  emailQueue}