
import combineRouters from 'koa-combine-routers'
import aRouter from './aRouter'

const router=combineRouters(
    aRouter
)


export default router 
