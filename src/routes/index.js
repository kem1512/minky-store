import Home from '../pages/Home'
import Product from '../pages/Product'
import Upload from '../pages/Upload'
import { HeaderOnly } from '../components/Layout'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/product', component: Product },
    { path: '/upload', component: Upload, layout: HeaderOnly }
]
const privateRoutes = []

export { publicRoutes, privateRoutes }