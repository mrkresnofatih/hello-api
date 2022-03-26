import express from 'express'

const app = express()

const responder = (data: string, err: string) => {
    return { data, err }
}

app.use(express.json())

app.listen(5000, () => {
    console.log("AppTier: ", process.env.HelloApiTier)
    console.log("AppTier: ", process.env.HelloApiCode)
})

app.get('/api/hi', (_, res) => {
    const data = "hello"
    res.send(responder(data, ""));
})

app.get('/api/yo', (_, res) => {
    const data = "wassup"
    res.send(responder(data, ""))
})

app.use((_, res) => {
    const data = "";
    res.send(responder(data, "ERROR"))
})
