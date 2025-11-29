# Contributing to DANVERSE Studio K2

First off, thank you for considering contributing to DANVERSE Studio K2! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples**
* **Describe the behavior you observed and what you expected**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create an issue and provide:

* **Clear and descriptive title**
* **Step-by-step description of the suggested enhancement**
* **Specific examples to demonstrate the steps**
* **Description of current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/DANVERSE_STUDIO-K2.git

# Navigate to the directory
cd DANVERSE_STUDIO-K2

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## Coding Standards

### Style Guide

* Use TypeScript for all new code
* Follow the existing code style (enforced by Prettier)
* Use meaningful variable and function names
* Comment complex logic
* Write self-documenting code

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new 3D particle system
fix: resolve memory leak in canvas renderer
docs: update installation instructions
style: format code with prettier
refactor: simplify shader logic
test: add tests for AICore component
chore: update dependencies
```

### TypeScript

* Use strict TypeScript settings
* Avoid `any` types
* Define proper interfaces and types
* Use type inference when possible

### React & Three.js

* Use functional components with hooks
* Optimize performance with `useMemo` and `useCallback`
* Clean up Three.js resources properly
* Follow React Three Fiber best practices

### File Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
│   ├── canvas/      # Three.js/R3F components
│   └── ui/          # UI components
├── data/            # Static data and types
├── store/           # Zustand stores
├── lib/             # Utility functions
└── __tests__/       # Test files
```

## Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Performance Guidelines

* Target 60 FPS for 3D animations
* Optimize shader code
* Use `useFrame` efficiently
* Implement proper LOD (Level of Detail)
* Profile with React DevTools and Chrome DevTools
* Test on low-end devices

## Accessibility

* Ensure keyboard navigation works
* Add ARIA labels where appropriate
* Test with screen readers
* Maintain proper color contrast
* Provide alternative text for visual content

## Documentation

* Update README.md if you change functionality
* Comment complex Three.js/shader code
* Add JSDoc comments to functions
* Update type definitions

## Review Process

1. Automated checks must pass (lint, type-check, tests)
2. Code review by maintainer
3. Performance review for 3D changes
4. Accessibility check for UI changes
5. Final approval and merge

## Questions?

Feel free to open an issue with your question or reach out to:
* Email: versedan13@gmail.com
* GitHub: [@DANVERSE01](https://github.com/DANVERSE01)

## Recognition

Contributors will be recognized in our README.md!

Thank you for contributing! 🚀✨