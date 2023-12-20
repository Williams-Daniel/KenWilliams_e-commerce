import env from "dotenv"

env.config()

export const envVariable = {
    PORT: process.env.PORT!,
    DB_STRING: process.env.DB_STRING!
}