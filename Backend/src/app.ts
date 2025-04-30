import app from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";



const initializeApp = async () => {
    try {
    await AppDataSource.initialize();
    console.info("DATABASE connection established");
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });   
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error establishing database connection:", error.message);
            console.error("Stack trace:", error.stack);
        } else {
            console.error("Unknown error:", error);
        }
    }
}


initializeApp();

