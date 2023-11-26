import { client } from "./connect"

import "./login"

(async () => {
    await client.connect()
})().then(() => {
    console.log("Connected successfully.")
}).catch((err) => {
    console.error("Connect failed. ", err)
})
