import { styled } from '@mui/material/styles';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Select, 
  Avatar, 
  IconButton,
  InputAdornment,
  FormControl,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';

// Main Container
export const MainContainer = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  backgroundColor: '#2d8287',
  fontFamily: 'Inter, system-ui, sans-serif',
});

// Left Panel (User Management)
export const LeftPanel = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#2d8287',
  padding: '80px 40px 40px 80px',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
});

// User Management Card
export const UserManagementCard = styled(Paper)({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  maxHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
});

// Header Section
export const HeaderSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
});

// Search and Filter Section
export const SearchFilterSection = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginBottom: '24px',
  alignItems: 'center',
});

// Table Container
export const TableContainer = styled(Box)({
  flex: 1,
  overflow: 'auto',
  maxHeight: '300px',
});

// Custom Table
export const StyledTable = styled(Table)({
  '& .MuiTableHead-root': {
    '& .MuiTableCell-root': {
      fontWeight: 600,
      fontSize: '12px',
      color: '#6b7280',
      borderBottom: '1px solid #e5e7eb',
      padding: '8px 12px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  },
  '& .MuiTableBody-root': {
    '& .MuiTableRow-root': {
      '&:hover': {
        backgroundColor: '#f9fafb',
      },
    },
    '& .MuiTableCell-root': {
      borderBottom: '1px solid #f3f4f6',
      padding: '12px',
      fontSize: '14px',
    },
  },
});

// Role Badge
export const RoleBadge = styled(Box)<{ role: string }>(({ role }) => ({
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 500,
  textAlign: 'center',
  backgroundColor: role === 'Admin' ? '#dbeafe' : '#f3e8ff',
  color: role === 'Admin' ? '#1d4ed8' : '#7c3aed',
  display: 'inline-block',
}));

// Action Buttons
export const ActionButton = styled(IconButton)({
  padding: '6px',
  margin: '0 2px',
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
});

// Sidebar
export const Sidebar = styled(Box)({
  position: 'absolute',
  left: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const SidebarIcon = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: '44px',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

// User Avatar at Bottom Left
export const UserAvatarContainer = styled(Box)({
  position: 'absolute',
  bottom: '30px',
  left: '20px',
});

export const StyledAvatar = styled(Avatar)({
  width: '44px',
  height: '44px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
});

// Right Panel (Signup)
export const RightPanel = styled(Box)({
  width: '500px',
  backgroundColor: '#f8fafc',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 50px',
});

// Signup Card
export const SignupCard = styled(Paper)({
  width: '100%',
  maxWidth: '400px',
  padding: '32px',
  borderRadius: '20px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
  backgroundColor: 'white',
});

// Logo Section
export const LogoSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '32px',
  justifyContent: 'center',
});

export const LogoIcon = styled(Box)({
  width: '36px',
  height: '36px',
  backgroundColor: '#2d8287',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
});

// Form Section
export const FormSection = styled(Box)({
  marginBottom: '24px',
});

export const FormRow = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginBottom: '16px',
  '&:last-child': {
    marginBottom: 0,
  },
});

// Custom Input Fields
export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: '#f8fafc',
    fontSize: '14px',
    '& fieldset': {
      borderColor: '#e2e8f0',
    },
    '&:hover fieldset': {
      borderColor: '#cbd5e1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2d8287',
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748b',
    fontSize: '14px',
    '&.Mui-focused': {
      color: '#2d8287',
    },
  },
});

export const StyledSelect = styled(Select)({
  borderRadius: '10px',
  backgroundColor: '#f8fafc',
  fontSize: '14px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e2e8f0',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#cbd5e1',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#2d8287',
    borderWidth: '2px',
  },
});

// Password Field
export const PasswordField = styled(StyledTextField)({
  '& .MuiInputAdornment-root': {
    '& .MuiIconButton-root': {
      color: '#64748b',
      '&:hover': {
        backgroundColor: 'rgba(100, 116, 139, 0.04)',
      },
    },
  },
});

// Submit Button
export const SubmitButton = styled(Button)({
  width: '100%',
  height: '50px',
  borderRadius: '12px',
  backgroundColor: '#2d8287',
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 'none',
  marginTop: '8px',
  '&:hover': {
    backgroundColor: '#1f5f63',
    boxShadow: '0 8px 20px rgba(45, 130, 135, 0.3)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
});

// Typography Styles
export const PageTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1e293b',
});

export const PageSubtitle = styled(Typography)({
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '24px',
});

export const SectionTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 600,
  color: '#1e293b',
  marginBottom: '6px',
});

export const SectionSubtitle = styled(Typography)({
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '20px',
});

export const BrandText = styled(Typography)({
  fontSize: '22px',
  fontWeight: 600,
  color: '#1e293b',
});

export const LoginLink = styled(Typography)({
  textAlign: 'center',
  fontSize: '14px',
  color: '#64748b',
  marginTop: '24px',
  '& a': {
    color: '#2d8287',
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

// Add User Button
export const AddUserButton = styled(Button)({
  borderRadius: '10px',
  backgroundColor: '#2d8287',
  color: 'white',
  textTransform: 'none',
  fontWeight: 500,
  padding: '8px 20px',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#1f5f63',
  },
});

// Search Field
export const SearchField = styled(StyledTextField)({
  width: '250px',
  '& .MuiInputBase-input': {
    padding: '10px 14px',
    fontSize: '14px',
  },
});

// Role Filter
export const RoleFilter = styled(FormControl)({
  minWidth: '100px',
  '& .MuiSelect-select': {
    padding: '10px 14px',
    fontSize: '14px',
  },
});

// Bottom Description
export const BottomDescription = styled(Box)({
  textAlign: 'center',
  marginTop: '60px',
  padding: '0 20px',
  maxWidth: '500px',
});

export const DescriptionTitle = styled(Typography)({
  fontSize: '28px',
  fontWeight: 600,
  color: 'white',
  marginBottom: '12px',
});

export const DescriptionText = styled(Typography)({
  fontSize: '16px',
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: 1.5,
  marginBottom: '20px',
});

// Dots Indicator
export const DotsIndicator = styled(Box)({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  marginTop: '16px',
});

export const Dot = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: active ? 'white' : 'rgba(255, 255, 255, 0.4)',
  transition: 'all 0.2s ease',
}));