// server.mjs
import express, { response } from 'express'

import { createTask } from './routes/tasks/create.mjs'
import { loadTask } from './routes/tasks/load.mjs'

const app = express()
// app.use(express.json)

app.post('/tasks', async (req, resp, next) => {

  console.log(resp)
  
  await createTask({
    title: resp.body.title
  })
  
  resp.status(201).end()
})

app.get('/load', async (req, resp, next) => {
  const tasks =  await loadTask()
  
  resp.json(tasks)
})

app.get('/', (req, resp) => {
  resp.send('Hello World')        
})

app.listen(3000, () => {
  console.log('Noe, com express, em execução na porta 3000')
})

