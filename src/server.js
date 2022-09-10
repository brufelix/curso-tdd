import express from 'express'

const PORT = 9000
const app = express()

app.get('/', (req, res) => {
  res.status(200).send()
})

app.listen(PORT, () => console.log('Listen on port 9000'))