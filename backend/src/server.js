import app from './routes/index'

const port = 3000

app.get('/', (req, res) => {
  res.send('Running')
})


app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
})

