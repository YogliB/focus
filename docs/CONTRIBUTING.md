# Contributing

## Welcome Contributors!

Thank you for your interest in contributing to this meditation application! We welcome contributions from everyone, regardless of experience level. Your contributions help improve the meditation experience for users worldwide.

## How to Contribute

### 1. Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/meditation-app.git
   cd meditation-app
   ```
3. **Set up the development environment**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```

### 2. Development Workflow

#### Code Style
- Follow the existing code style and conventions
- Use TypeScript for type safety
- Write clear, descriptive commit messages
- Add comments for complex logic

#### Testing
- Test your changes on both iOS and Android (if possible)
- Ensure existing functionality remains intact
- Test edge cases and error scenarios

#### Documentation
- Update documentation for new features
- Add inline comments for complex code
- Update README if needed

### 3. Making Changes

#### Small Changes
For small fixes or improvements:
1. Make your changes
2. Test thoroughly
3. Commit with a clear message
4. Push to your fork
5. Create a Pull Request

#### Larger Features
For new features or significant changes:
1. **Open an issue** first to discuss the proposed change
2. Get feedback from maintainers
3. Implement the feature
4. Add tests if applicable
5. Update documentation
6. Create a Pull Request

## Contribution Guidelines

### Code Standards
- **TypeScript**: Use proper typing for all functions and components
- **ESLint**: Ensure your code passes all linting rules
- **Prettier**: Format your code before committing
- **Imports**: Organize imports logically and remove unused ones

### Component Development
- **Atomic Design**: Follow atomic design principles when creating components
- **Accessibility**: Ensure components are accessible (screen readers, keyboard navigation)
- **Performance**: Consider performance impact of new components
- **Responsive**: Test on different screen sizes

### Pull Request Process

1. **Create a Pull Request** with a descriptive title
2. **Fill out the PR template** completely
3. **Reference related issues** if applicable
4. **Wait for review** from maintainers
5. **Address feedback** and make requested changes
6. **PR will be merged** once approved

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(timer): add pause functionality to meditation timer
fix(settings): resolve theme switching crash on Android
docs: update setup instructions for new contributors
```

## Areas for Contribution

### Features
- New meditation techniques or programs
- Advanced timer functionality
- Progress tracking and analytics
- Social features (meditation streaks, sharing)

### Improvements
- Performance optimizations
- Accessibility enhancements
- UI/UX improvements
- Better error handling

### Bug Fixes
- Crash fixes
- UI glitches
- Platform-specific issues
- Performance problems

### Documentation
- Code comments
- User guides
- API documentation
- Setup instructions

## Development Setup

### Prerequisites
- Node.js (LTS version)
- npm or yarn
- Expo CLI
- Git

### Environment Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npx expo start
   ```
3. Run on device/simulator:
   - iOS: Press `i` in terminal or scan QR code
   - Android: Press `a` in terminal or scan QR code

### Testing
```bash
# Run linting
npm run lint

# Format code
npm run format

# Run tests (if available)
npm run test
```

## Code of Conduct

### Our Pledge
We are committed to providing a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Standards
- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Give constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Recognition

Contributors will be recognized in:
- README file
- Release notes
- GitHub repository contributors list
- Project documentation

## Questions?

- Check existing documentation first
- Search existing issues for similar questions
- Create a new issue for questions or discussions
- Join our community discussions

---

Thank you for contributing to making meditation more accessible! 🧘‍♀️