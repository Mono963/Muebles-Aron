import { Request, Response } from "express";
import { servicesPostForm } from "../services/service.form";
const formPage = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, phoneNumber, details  } = req.body;
    const createForm = await servicesPostForm({
      name,
      lastName,
      email,
      phoneNumber,
      details
    });

    createForm;

    res.status(201).json({ boolean: true });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Faltan datos, por favor ingrese los datos restantes",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Error desconocido, inténtelo más tarde",
      });
    }
  }
};

export default formPage;
