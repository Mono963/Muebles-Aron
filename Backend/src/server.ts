import  express  from "express";
import morgan from "morgan";
import cors from "cors"
import router from "./routes/recursos";
import path from "path";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));
app.use(router);

export default app;