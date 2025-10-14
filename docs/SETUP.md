# Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- **Expo CLI** for development

### Installing Node.js

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

**Linux:**
```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows:**
Download and install from [nodejs.org](https://nodejs.org/)

### Installing Expo CLI

```bash
# Install Expo CLI globally
npm install -g @expo/cli

# Or using yarn
yarn global add @expo/cli
```

## Project Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/meditation-app.git

# Navigate to project directory
cd meditation-app
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

This will install all required dependencies including:
- React Native and Expo
- NativeWind for styling
- Tamagui for UI components
- Development tools (ESLint, Prettier, TypeScript)

### 3. Environment Configuration

Create a `.env` file in the root directory if needed for environment variables:

```bash
# .env
API_URL=https://your-api-endpoint.com
DEBUG=true
```

## Development

### Starting the Development Server

```bash
# Start Expo development server
npx expo start

# Or using npm script
npm run start
```

This will start the Metro bundler and display a QR code.

### Running on Devices

**iOS Simulator:**
```bash
# Press 'i' in the terminal
# Or scan QR code with Camera app
```

**Android Emulator:**
```bash
# Press 'a' in the terminal
# Or scan QR code with Expo Go app
```

**Physical Device:**
1. Install [Expo Go](https://expo.dev/client) app
2. Scan the QR code displayed in terminal
3. App will load on your device

### Development Tools

```bash
# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check

# Run tests (if available)
npm run test
```

## Building for Production

### Creating Production Builds

**iOS:**
```bash
# Build for iOS
npx expo build:ios

# Or using EAS Build (recommended)
npx eas build --platform ios
```

**Android:**
```bash
# Build for Android
npx expo build:android

# Or using EAS Build (recommended)
npx eas build --platform android
```

### Submitting to App Stores

**App Store (iOS):**
```bash
# Submit to App Store
npx expo submit --platform ios
```

**Google Play (Android):**
```bash
# Submit to Google Play
npx expo submit --platform android
```

## Troubleshooting

### Common Issues

**Metro bundler not starting:**
```bash
# Clear Metro cache
npx expo start --clear

# Or clear npm cache
npm cache clean --force
```

**Dependency issues:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**iOS Simulator issues:**
```bash
# Reset iOS Simulator
# iOS Simulator > Device > Erase All Content and Settings
```

**Android Emulator issues:**
```bash
# Wipe emulator data
# In Android Studio: Tools > AVD Manager > Wipe Data
```

### Getting Help

1. Check the [Expo documentation](https://docs.expo.dev/)
2. Review existing GitHub issues
3. Check the troubleshooting section in [ARCHITECTURE.md](ARCHITECTURE.md)
4. Create a new issue if needed

## Development Workflow

### Code Quality

The project uses several tools to maintain code quality:

- **ESLint**: Catches JavaScript/TypeScript errors
- **Prettier**: Formats code consistently
- **TypeScript**: Provides type checking
- **Husky**: Runs pre-commit hooks

### Pre-commit Hooks

The project uses Husky with lint-staged to run quality checks before commits:

- ESLint checks for code issues
- Prettier formats code
- Only staged files are processed for speed

### IDE Setup

**VS Code (Recommended):**
1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Enable format on save in settings

**Other IDEs:**
Configure your IDE to use the project's ESLint and Prettier configurations.

## Performance Optimization

### Development Performance

```bash
# Enable Fast Refresh
# Already enabled by default in Expo

# Use physical device for better performance
# Simulators can be slower for development
```

### Production Performance

- Images are optimized automatically
- Tree shaking removes unused code
- Metro bundler optimizes bundle size
- Enable Hermes engine for better performance

## Next Steps

After setup, you can:

1. **Explore the codebase** - Check [ARCHITECTURE.md](ARCHITECTURE.md) for structure
2. **Learn about technologies** - Read [TECHNOLOGIES.md](TECHNOLOGIES.md)
3. **Start contributing** - Follow [CONTRIBUTING.md](CONTRIBUTING.md)
4. **Run the app** - Use `npx expo start` to see it in action

## Support

- 📖 [Documentation](docs/) - Comprehensive project documentation
- 🐛 [Issues](https://github.com/your-username/meditation-app/issues) - Bug reports and feature requests
- 💬 [Discussions](https://github.com/your-username/meditation-app/discussions) - Community discussions
- 📧 [Email Support] - Direct support for contributors

---

🎉 **Congratulations!** Your meditation app development environment is now ready. Happy coding! 🧘‍♀️