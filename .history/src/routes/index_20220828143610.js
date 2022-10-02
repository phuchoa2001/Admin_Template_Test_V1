import Home from '../page/Home';
import Order from '../page/Order';
import Link404 from '../page/Link404';

import { AppRouter } from './app';
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    ...AppRouter , 
    {
        path: "/order",
        exact: false,
        mani: () => <Order />,
    },
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default router;