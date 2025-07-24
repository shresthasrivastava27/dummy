export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Clinician';
  contactNumber: string;
}

export interface SignupFormData {
  practiceName: string;
  specialty: string;
  country: string;
  city: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  [key: string]: string;
}