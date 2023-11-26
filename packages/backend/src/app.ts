import Koa from 'koa'
import bodyParser from "koa-bodyparser"
import router from './impl/router'
import "./impl"
import { Server } from 'http'

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(bodyParser());

const runServer = (port: number): Server => {
  console.log('Server running on port 3000')
  return app.listen(port)
};

export default runServer
