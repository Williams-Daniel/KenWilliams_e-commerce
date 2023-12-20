import mongoose from "mongoose"
import { envVariable } from "./env_Variables"

const URL:string = envVariable.DB_STRING

export const dbConfig = ()=>{
    mongoose.connect(URL).then(()=>{
        console.log("")
        console.log("Database successfully connected")
    })
}