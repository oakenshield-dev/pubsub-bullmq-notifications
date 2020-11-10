import { Queue } from 'bullmq'
import Redis from 'ioredis'

const redis = new Redis({
  port: parseInt(process.env.REDIS_PORT || '3000'),
  host: process.env.REDIS_HOST
})

const EMAIL_QUEUE_NAME = 'send-email'

const emailQueue = new Queue(EMAIL_QUEUE_NAME, { connection:redis })

export { EMAIL_QUEUE_NAME, redis, emailQueue }
