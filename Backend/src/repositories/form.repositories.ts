import { AppDataSource } from "../config/data-source";
import { Form } from "../entities/Form";


export const formRepositoryAron = AppDataSource.getRepository<Form>(Form);