import express, { Application } from "express"
import { envVariable } from "./utils/env_Variables"
import { mainApp } from "./mainApp"
import { dbConfig } from "./utils/DB"


const port:string = envVariable.PORT 
const app:Application = express() 

mainApp(app)
const server = app.listen(port,()=>{
    console.log("")
    console.log("A server is connected on port: ", port)
    dbConfig()
})

process.on("uncaughtException",(error:Error)=>{
    console.log("")
    console.log("An error occurred due to uncaughtException", error)

    process.exit(1)
})

process.on("unhandledRejection",(reason:any)=>{
    console.log("")
    console.log("An error occurred due to unhandledRejection", reason)

    server.close(()=>{
        process.exit(1)
    })
})