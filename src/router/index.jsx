import About from "../pages/About"
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const privateRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/products', component: Products, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/contacts', component: Contacts, exact: true},
]
