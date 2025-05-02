import IFormDto from "../dto/Form.Dto";
import { Form } from "../entities/Form";
import { formRepositoryAron } from "../repositories/form.repositories";

export const servicesPostForm = async (ForDto: IFormDto ): Promise<void> => {
    const createForm = formRepositoryAron.create({
        name: ForDto.name,
        lastname: ForDto.lastName,
        email: ForDto.email,
        phoneNumber: ForDto.phoneNumber,
        details: ForDto.details
    });
    const saveForm: Form = await formRepositoryAron.save(createForm); 
}