const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Login prompt page, if you can read this, you manually accessed port 3000 after logging in'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const app1 = express()
const port1 = 3001

app1.get('/', (req, res) => res.send('Hello Adriana!'))

app1.listen(port1, () => console.log(`Example app listening at http://localhost:${port1}`))


const app2 = express()
const port2 = 3002

app2.listen(port2, () => console.log(`Example app listening at http://localhost:${port2}`))

app2.get('/', (req, res) => res.send('Hello Cristi!'))