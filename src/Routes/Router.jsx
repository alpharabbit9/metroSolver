import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import WhiteLabel from '../pages/WhiteLabel'
import ContactUs from '../components/ContactUs'
import Services from '../pages/Services'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/whiteLabel',
                element:<WhiteLabel/>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },
        ]
    }
])


export default Router
