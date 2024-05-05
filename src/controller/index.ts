import { Context } from "koa"

export const kugouHandler = (ctx: Context, next: () => Promise<any>) => {
    console.log('kugouHandler')
    ctx.body = 'kugouHandler'
}

export const errorHandler = (ctx: Context, next: () => Promise<any>) => {
    console.log('errorHandler')
    ctx.body = 'Not Found222'
}