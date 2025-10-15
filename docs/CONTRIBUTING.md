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

## MCP Servers

### Overview

MCP (Model Context Protocol) servers provide powerful tools to enhance your development workflow. These servers are available to all contributors and can significantly improve code quality, testing, and problem-solving capabilities.

### Available MCP Servers

#### 1. Context7 (`streamable-http`)

**Purpose**: Access extended project context and external intelligence via `https://mcp.context7.com/mcp`.

**When to Use**:

- When you need to understand complex codebase relationships
- Research and analysis of external libraries or APIs
- Getting contextual information about technologies or frameworks
- Understanding best practices for specific implementations

**Development Enhancement**:

- Provides intelligent code suggestions based on project context
- Helps identify potential issues before implementation
- Offers insights into similar projects and patterns
- Accelerates research and decision-making processes

**Example Usage**:

```bash
# When researching React Native performance optimization
# Context7 can provide relevant patterns and best practices
```

#### 2. Fetch (`docker`)

**Purpose**: Retrieve external data or resources via `mcp/fetch`.

**When to Use**:

- When you need to fetch external APIs or data sources
- Integrating with third-party services
- Retrieving configuration files or resources
- Testing external integrations

**Development Enhancement**:

- Simplifies API testing and integration
- Provides real-time data for development and testing
- Enables quick validation of external dependencies
- Supports both development and testing workflows

**Example Usage**:

```bash
# When integrating with a weather API for a meditation app feature
# Fetch can help retrieve and test real weather data
```

#### 3. Playwright (`docker`)

**Purpose**: Perform browser automation or end-to-end verification via `mcp/playwright`.

**When to Use**:

- Testing user interactions and workflows
- Cross-browser compatibility testing
- End-to-end feature validation
- Automated screenshot and visual regression testing

**Development Enhancement**:

- Enables comprehensive testing of user-facing features
- Provides automated quality assurance
- Supports continuous integration workflows
- Helps catch UI/UX issues early in development

**Example Usage**:

```bash
# When adding a new meditation timer feature
# Playwright can automate testing of the timer UI and interactions
```

#### 4. SequentialThinking (`docker`)

**Purpose**: Engage advanced reasoning and multi-step task decomposition via `mcp/sequentialthinking`.

**When to Use**:

- Breaking down complex features into manageable tasks
- Planning complex implementations
- Analyzing architecture decisions
- Problem-solving and debugging complex issues

**Development Enhancement**:

- Helps structure complex development tasks
- Provides systematic approach to problem-solving
- Assists in creating comprehensive implementation plans
- Supports architectural decision-making

**Example Usage**:

```bash
# When planning a major feature like user authentication
# SequentialThinking can help break down the implementation into logical steps
```

### Usage Guidelines

#### General Best Practices

1. **Documentation**: Always document MCP server usage in `PROGRESS.md` including:
    - MCP server name
    - Purpose of the call
    - Outcome or insights gained

2. **Appropriate Usage**: Use MCP servers when they genuinely enhance your work:
    - For research and planning phases
    - When stuck on complex problems
    - For quality assurance and testing
    - When learning new technologies or patterns

3. **Configuration**: Do not modify or redeploy MCP server configurations. Use existing definitions only.

#### Integration with Development Workflow

MCP servers work best when integrated into your natural development process:

- **Planning**: Use SequentialThinking to break down complex features
- **Research**: Use Context7 to understand technologies and patterns
- **Implementation**: Use Fetch for API integrations and external data
- **Testing**: Use Playwright for comprehensive end-to-end validation

### Getting Help

When using MCP servers:

- Check existing `PROGRESS.md` entries for similar usage patterns
- Document your own usage for future contributors
- Ask questions in issues if you need clarification on specific use cases

## Code of Conduct
