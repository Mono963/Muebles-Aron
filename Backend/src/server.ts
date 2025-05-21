import  express  from "express";
import morgan from "morgan";
import cors from "cors"
import router from "./routes/recursos";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

export default app;