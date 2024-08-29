import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router  from './router';


const app = express();

app.use(express.json());

if(process.env.NODE_ENV = 'development') {
  app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

dotenv.config({ path: ".env" });


// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/v1", router);

export const PORT = process.env.PORT || 8000;
// export const JWT_SECRET = process.env.JWT_SECRET!

// Conection MongoDB
const MONGOURL = process.env.MONGO_URL;
// Mongose
mongoose.connect(MONGOURL).then(()=>{
    console.log("Database conected successful.")
    app.listen(PORT, ()=>{
        console.log(`Server is ruuning on port ${PORT}`)
    })
}).catch((error) =>console.log(error))