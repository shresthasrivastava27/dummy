# Header Component

This directory contains the Header component and its associated styled components.

## Structure

```
Header/
├── Header.jsx          # Presentational component
├── HeaderContainer.jsx # Container component with state logic
├── Header.styles.js    # All styled components for Header
├── index.js           # Export file for easier imports
└── README.md          # This documentation
```

## Usage

### Basic Usage (with HeaderContainer)
```jsx
import { HeaderContainer } from '../components';

function Page() {
  return (
    <div>
      <HeaderContainer />
    </div>
  );
}
```

### Custom Usage (with HeaderContainer)
```jsx
import { HeaderContainer } from '../components';

function AboutPage() {
  return (
    <div>
      <HeaderContainer 
        linkText="Learn more about React"
        linkUrl="https://reactjs.org/docs"
      />
    </div>
  );
}
```

### Advanced Usage (with Header component directly)
```jsx
import { Header } from '../components';

function CustomPage() {
  const [showInstall, setShowInstall] = useState(false);
  
  const handleInstall = () => {
    // Custom install logic
  };

  return (
    <div>
      <Header 
        showInstallPrompt={showInstall}
        onInstallClick={handleInstall}
        linkText="Custom link text"
        linkUrl="https://custom-url.com"
      />
    </div>
  );
}
```

## Styled Components

All styled components are located in `Header.styles.js`:

- `HeaderContainer` - Main header wrapper
- `Logo` - Animated React logo
- `HeaderText` - Text paragraphs
- `CodeHighlight` - Code highlighting
- `InstallButton` - PWA install button
- `HeaderLink` - External links
- `InfoSection` - Information section
- `AppContainer` - Main app wrapper

## Props

### HeaderContainer Props
- `title` (string) - Custom title text
- `linkText` (string) - Custom link text
- `linkUrl` (string) - Custom link URL

### Header Props
- `showInstallPrompt` (boolean) - Show/hide install button
- `onInstallClick` (function) - Install button click handler
- `title` (string) - Custom title text
- `linkText` (string) - Custom link text  
- `linkUrl` (string) - Custom link URL