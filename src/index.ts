import * as express from "express"
import * as cors from "cors"
import { AppDataSource } from "./data-source"
import * as dotenv from "dotenv"

dotenv.config()

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")

}).catch((error) => {
    console.error("Error during Data Source initialization: ", error)
})

const PORT = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
