import { client } from "./connect"

async function Initialize() {

    await client.connect()

    const user = client.db('user')
    
    const col = user.collection('login')

    await col.insertOne({ name: 'test', age: 10 })

    await client.close()

}

Initialize()