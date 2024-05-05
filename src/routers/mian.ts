import Router from "koa-router"
import * as controller from '../controller'

const kugouRouter = new Router({
    prefix: '/music/api'
})

kugouRouter.get('/getList', controller.kugouHandler)

export default kugouRouter;