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
  padding: '20px',
  position: 'relative',
});

// User Management Card
export const UserManagementCard = styled(Paper)({
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  margin: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  flex: 1,
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
});

// Custom Table
export const StyledTable = styled(Table)({
  '& .MuiTableHead-root': {
    '& .MuiTableCell-root': {
      fontWeight: 600,
      fontSize: '14px',
      color: '#6b7280',
      borderBottom: '1px solid #e5e7eb',
      padding: '12px 16px',
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
      padding: '16px',
    },
  },
});

// Role Badge
export const RoleBadge = styled(Box)<{ role: string }>(({ role }) => ({
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: 500,
  textAlign: 'center',
  backgroundColor: role === 'Admin' ? '#dbeafe' : '#f3e8ff',
  color: role === 'Admin' ? '#1d4ed8' : '#7c3aed',
}));

// Action Buttons
export const ActionButton = styled(IconButton)({
  padding: '4px',
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
  gap: '16px',
});

export const SidebarIcon = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
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
  bottom: '20px',
  left: '20px',
});

export const StyledAvatar = styled(Avatar)({
  width: '48px',
  height: '48px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
});

// Right Panel (Signup)
export const RightPanel = styled(Box)({
  width: '480px',
  backgroundColor: '#f8fafc',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
});

// Signup Card
export const SignupCard = styled(Paper)({
  width: '100%',
  maxWidth: '400px',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
});

// Logo Section
export const LogoSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '32px',
});

export const LogoIcon = styled(Box)({
  width: '32px',
  height: '32px',
  backgroundColor: '#2d8287',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
});

// Form Section
export const FormSection = styled(Box)({
  marginBottom: '32px',
});

export const FormRow = styled(Box)({
  display: 'flex',
  gap: '16px',
  marginBottom: '20px',
});

// Custom Input Fields
export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
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
    '&.Mui-focused': {
      color: '#2d8287',
    },
  },
});

export const StyledSelect = styled(Select)({
  borderRadius: '8px',
  backgroundColor: '#f8fafc',
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
  height: '48px',
  borderRadius: '8px',
  backgroundColor: '#2d8287',
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#1f5f63',
    boxShadow: '0 4px 12px rgba(45, 130, 135, 0.3)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
});

// Typography Styles
export const PageTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 600,
  color: '#1e293b',
});

export const PageSubtitle = styled(Typography)({
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '24px',
});

export const SectionTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1e293b',
  marginBottom: '8px',
});

export const SectionSubtitle = styled(Typography)({
  fontSize: '14px',
  color: '#64748b',
});

export const BrandText = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1e293b',
});

export const LoginLink = styled(Typography)({
  textAlign: 'center',
  fontSize: '14px',
  color: '#64748b',
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
  borderRadius: '8px',
  backgroundColor: '#2d8287',
  color: 'white',
  textTransform: 'none',
  fontWeight: 500,
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#1f5f63',
  },
});

// Search Field
export const SearchField = styled(StyledTextField)({
  width: '300px',
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
});

// Role Filter
export const RoleFilter = styled(FormControl)({
  minWidth: '120px',
  '& .MuiSelect-select': {
    padding: '12px 14px',
  },
});

// Bottom Description
export const BottomDescription = styled(Box)({
  textAlign: 'center',
  marginTop: '40px',
  padding: '0 20px',
});

export const DescriptionTitle = styled(Typography)({
  fontSize: '32px',
  fontWeight: 600,
  color: 'white',
  marginBottom: '16px',
});

export const DescriptionText = styled(Typography)({
  fontSize: '16px',
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: 1.6,
});

// Dots Indicator
export const DotsIndicator = styled(Box)({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  marginTop: '24px',
});

export const Dot = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: active ? 'white' : 'rgba(255, 255, 255, 0.4)',
  transition: 'all 0.2s ease',
}));