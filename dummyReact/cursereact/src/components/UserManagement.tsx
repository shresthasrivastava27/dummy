import React, { useState } from 'react';
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import {
  UserManagementCard,
  HeaderSection,
  SearchFilterSection,
  TableContainer,
  StyledTable,
  RoleBadge,
  ActionButton,
  PageTitle,
  AddUserButton,
  SearchField,
  RoleFilter,
  StyledSelect,
} from '../styles/styles';
import { User } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Arlene McCoy',
    email: 'arlene.mccoy@email.com',
    role: 'Clinician',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '2',
    name: 'Ronald Richards',
    email: 'ronald.richards@email.com',
    role: 'Admin',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '3',
    name: 'Kristin Watson',
    email: 'kristin.watson@email.com',
    role: 'Clinician',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '4',
    name: 'Darlene Robertson',
    email: 'darlene.robertson@email.com',
    role: 'Admin',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '5',
    name: 'Jerome Bell',
    email: 'jerome.bell@email.com',
    role: 'Clinician',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '6',
    name: 'Darrell Steward',
    email: 'darrell.steward@email.com',
    role: 'Clinician',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '7',
    name: 'Ralph Edwards',
    email: 'ralph.edwards@email.com',
    role: 'Clinician',
    contactNumber: '+44 12 3456 7890',
  },
  {
    id: '8',
    name: 'Arlene McCoy',
    email: 'arlene.mccoy@email.com',
    role: 'Admin',
    contactNumber: '+44 12 3456 7890',
  },
];

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('Role');

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'Role' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <UserManagementCard>
      <HeaderSection>
        <PageTitle>User management</PageTitle>
        <AddUserButton startIcon={<AddIcon />}>
          Add User
        </AddUserButton>
      </HeaderSection>

      <SearchFilterSection>
        <SearchField
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#64748b' }} />
              </InputAdornment>
            ),
          }}
        />
        <RoleFilter>
          <StyledSelect
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value as string)}
            displayEmpty
          >
            <MenuItem value="Role">Role</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Clinician">Clinician</MenuItem>
          </StyledSelect>
        </RoleFilter>
      </SearchFilterSection>

      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Name ↓</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Contact number</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: '2px' }}>
                      {user.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {user.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <RoleBadge role={user.role}>
                    {user.role}
                  </RoleBadge>
                </TableCell>
                <TableCell>{user.contactNumber}</TableCell>
                <TableCell>
                  <ActionButton>
                    <EditIcon sx={{ fontSize: 16, color: '#64748b' }} />
                  </ActionButton>
                  <ActionButton>
                    <DeleteIcon sx={{ fontSize: 16, color: '#ef4444' }} />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </UserManagementCard>
  );
};

export default UserManagement;