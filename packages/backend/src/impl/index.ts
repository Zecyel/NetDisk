import KoaRouter from 'koa-router'

const router = new KoaRouter()

router.post('/api/user', async (ctx) => {
    ctx.body = {
        code: 200,
        data: {
            name: '张三',
            age: 18
        }
    }
})

router.get('/api', async (ctx) => {
    ctx.body = '123'
})

export default router
