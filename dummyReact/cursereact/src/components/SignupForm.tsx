import React, { useState } from 'react';
import {
  MenuItem,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  LocalHospital as MedicalIcon,
} from '@mui/icons-material';
import {
  SignupCard,
  LogoSection,
  LogoIcon,
  BrandText,
  SectionTitle,
  SectionSubtitle,
  FormSection,
  FormRow,
  StyledTextField,
  StyledSelect,
  RoleFilter,
  PasswordField,
  SubmitButton,
  LoginLink,
} from '../styles/styles';
import { SignupFormData, FormErrors } from '../types';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    practiceName: '',
    specialty: '',
    country: '',
    city: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: keyof SignupFormData) => (
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value as string,
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.practiceName.trim()) {
      newErrors.practiceName = 'Practice name is required';
    }
    if (!formData.specialty) {
      newErrors.specialty = 'Specialty is required';
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  return (
    <SignupCard>
      <LogoSection>
        <LogoIcon>
          <MedicalIcon />
        </LogoIcon>
        <BrandText>Health OS</BrandText>
      </LogoSection>

      <SectionTitle>Signup</SectionTitle>
      <SectionSubtitle>
        Please enter your details and we will set you up in no time.
      </SectionSubtitle>

      <form onSubmit={handleSubmit}>
        <FormSection>
          <FormRow>
            <StyledTextField
              fullWidth
              label="Practice name"
              value={formData.practiceName}
              onChange={handleInputChange('practiceName')}
              error={!!errors.practiceName}
              helperText={errors.practiceName}
            />
          </FormRow>

          <FormRow>
            <StyledTextField
              fullWidth
              label="Speciality"
              select
              value={formData.specialty}
              onChange={handleInputChange('specialty')}
              error={!!errors.specialty}
              helperText={errors.specialty}
            >
              <MenuItem value="Cardiology">Cardiology</MenuItem>
              <MenuItem value="Neurology">Neurology</MenuItem>
              <MenuItem value="Orthopedics">Orthopedics</MenuItem>
              <MenuItem value="Pediatrics">Pediatrics</MenuItem>
              <MenuItem value="General Practice">General Practice</MenuItem>
            </StyledTextField>
          </FormRow>

          <FormRow>
            <StyledTextField
              fullWidth
              label="Country"
              select
              value={formData.country}
              onChange={handleInputChange('country')}
              error={!!errors.country}
              helperText={errors.country}
            >
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
            </StyledTextField>
            <StyledTextField
              fullWidth
              label="City"
              value={formData.city}
              onChange={handleInputChange('city')}
              error={!!errors.city}
              helperText={errors.city}
            />
          </FormRow>
        </FormSection>

        <SectionTitle>Admin</SectionTitle>

        <FormSection>
          <FormRow>
            <StyledTextField
              fullWidth
              label="First name"
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <StyledTextField
              fullWidth
              label="Last name"
              value={formData.lastName}
              onChange={handleInputChange('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </FormRow>

          <FormRow>
            <StyledTextField
              fullWidth
              label="Email address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
              helperText={errors.email}
            />
          </FormRow>

          <FormRow>
            <PasswordField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange('password')}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormRow>

          <FormRow>
            <PasswordField
              fullWidth
              label="Confirm password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormRow>
        </FormSection>

        <SubmitButton type="submit">
          Create account
        </SubmitButton>
      </form>

      <LoginLink>
        Already have an account? <a href="/login">Login</a>
      </LoginLink>
    </SignupCard>
  );
};

export default SignupForm;