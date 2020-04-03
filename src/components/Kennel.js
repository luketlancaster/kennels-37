import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./Kennel.css"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("kennel_customer")) {
                return <>
                        <Route render={ NavBar } />
                        <Route render={ ApplicationViews } />
                    </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={ Login } />
        <Route path="/register" render={ Register } />
    </>
)
