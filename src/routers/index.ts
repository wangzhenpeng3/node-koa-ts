import Router from "koa-router"
import * as controller from '../controller'
import combineRouters from "koa-combine-routers"
import kugouRouter from "./kugou-music"
const router = new Router()

router.get('/404', controller.errorHandler)

const routers = combineRouters(router, kugouRouter)
export default routers;