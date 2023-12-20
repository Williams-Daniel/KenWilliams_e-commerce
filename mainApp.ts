import express, { Application, Request, Response } from "express"
import cors from "cors"

export const mainApp = (app:Application)=>{
app.use(cors())
app.use(express.json())


app.get("/",(req:Request,res:Response)=>{
    try {
        res.status(200).json({
            message:"Everything is working fine🚀🚀🚀"
        })
    } catch (error) {
        res.status(404).json({
            message:"Something is wrong🤕"
        })
    }
})
}