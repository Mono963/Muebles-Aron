export const validateFormulario = (values) => {
  const errors = {};
  
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  } else if (values.name.length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  } else if (values.name.length > 100) {
    errors.name = 'El nombre no puede exceder 100 caracteres';
  }

  if (!values.lastName) {
    errors.lastName = 'El apellido es requerido';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'El apellido debe tener al menos 2 caracteres';
  } else if (values.lastName.length > 100) {
    errors.lastName = 'El apellido no puede exceder 100 caracteres';
  }

  if (!values.email) {
    errors.email = 'El email es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email inválido';
  } else if (values.email.length > 100) {
    errors.email = 'El email no puede exceder 100 caracteres';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'El teléfono es requerido';
  } else if (!/^[0-9]{8,15}$/.test(values.phoneNumber)) {
    errors.phoneNumber = 'Teléfono inválido (8-15 números)';
  }

  if (!values.details) {
    errors.details = 'Por favor ingresa los detalles';
  } else if (values.details.length < 10) {
    errors.details = 'Los detalles deben tener al menos 10 caracteres';
  } else if (values.details.length > 1000) {
    errors.details = 'Los detalles no pueden exceder 1000 caracteres';
  }

  return errors;
};