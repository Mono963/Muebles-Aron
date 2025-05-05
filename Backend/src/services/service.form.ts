import IFormDto from "../dto/Form.Dto";
import { Form } from "../entities/Form";
import { formRepositoryAron } from "../repositories/form.repositories";
import { sendFormEmail } from "../utils/Email";

export const servicesPostForm = async (ForDto: IFormDto ): Promise<void> => {
    const createForm: Form = formRepositoryAron.create({
        name: ForDto.name,
        lastName: ForDto.lastName,
        email: ForDto.email,
        phoneNumber: ForDto.phoneNumber,
        details: ForDto.details
    });
    await formRepositoryAron.save(createForm); 
    await sendFormEmail(ForDto);
}