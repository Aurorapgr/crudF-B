import express from "express"
import cors from "cors"
import useRoutes from "./routes/user.js"

const app = express()

app.use(express.json());
app.use(cors());

app.use("/", useRoutes)

app.listen(8800)