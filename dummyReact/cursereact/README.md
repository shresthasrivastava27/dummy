# Health OS - User Management Dashboard

A modern, responsive healthcare management system built with React, TypeScript, and Material-UI.

## Features

### User Management Dashboard
- **User Table**: Display and manage healthcare staff with roles (Admin/Clinician)
- **Search & Filter**: Real-time search by name/email and filter by role
- **Actions**: Edit and delete user functionality
- **Responsive Design**: Optimized for desktop and tablet viewing

### User Registration
- **Multi-step Signup Form**: Practice details and admin account creation
- **Form Validation**: Real-time validation with error handling
- **Password Security**: Toggle visibility and confirmation fields
- **Professional UI**: Clean, modern interface with Health OS branding

### Technical Features
- **TypeScript**: Full type safety and better developer experience
- **React Router v5**: Client-side routing
- **Material-UI**: Professional component library with custom styling
- **Styled Components**: CSS-in-JS with MUI's styled API
- **Responsive Layout**: Mobile-first design approach

## Tech Stack

- **Frontend**: React 19.1.0
- **Language**: TypeScript
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router DOM v5
- **Styling**: MUI Styled Components
- **Icons**: Material-UI Icons

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── UserManagement.tsx
│   ├── SignupForm.tsx
│   └── Sidebar.tsx
├── pages/             # Page components
│   └── Home.tsx
├── styles/            # Styled components
│   └── styles.tsx
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx           # Main application component
└── index.tsx         # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd dummyReact/cursereact
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Design Features

### Color Scheme
- **Primary**: #2d8287 (Teal)
- **Background**: #f8fafc (Light gray)
- **Text**: #1e293b (Dark slate)
- **Accent**: Various semantic colors for status

### Layout
- **Split Screen**: User management on left, signup form on right
- **Sidebar Navigation**: Quick access to different sections
- **Card-based Design**: Clean, modern card layouts
- **Typography**: Inter font family for readability

## Components Overview

### UserManagement
- Displays user data in a sortable table
- Implements search and filter functionality
- Provides user action buttons (edit/delete)
- Responsive table with hover effects

### SignupForm
- Multi-section form with validation
- Practice information and admin details
- Password strength and confirmation
- Real-time error handling

### Sidebar
- Navigation icons for different sections
- Active state indicators
- User avatar display
- Responsive positioning

## Future Enhancements

- [ ] User authentication and authorization
- [ ] API integration for data management
- [ ] Advanced user permissions system
- [ ] Dashboard analytics
- [ ] Mobile responsive improvements
- [ ] Dark mode support
- [ ] Internationalization (i18n)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
