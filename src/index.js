import koa from 'koa'
import router from './routes/routes'
import path from 'path'
import json from 'koa-json'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import statics from 'koa-static'


const app=new koa()
app.use(cors())
app.use(koaBody())
app.use(json({pretty:false,param:'pretty'}))
app.use(helmet())
app.use(statics(path.join(__dirname,'../public')))
app.use(router())


app.listen(3000,()=>{
    console.log('服务器启动成功！')
})
