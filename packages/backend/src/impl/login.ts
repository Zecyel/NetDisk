import { LoginRequest, LoginResponse } from '@netdisk/api'
import router from "./router"
import { client } from './connect'

router.post('/api/router', async (ctx) => {
    const req = await ctx.request.body as LoginRequest
    const col = client.db('user').collection("login")

    let ret: LoginResponse = {
        status: 200,
        message: '登陆成功'
    }

    col.findOne({
        req
    }).then((val) => {
        if (val === null) {
            ret.status = 400
            ret.message = '用户名或密码错误'
        }
    }).finally(() => {
        ctx.body = ret
    })
})
