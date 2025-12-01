# Copilot Instructions

This repository contains university notes, research, and a Zettelkasten knowledge base powered by [Obsidian](https://obsidian.md/) and [Quartz](https://quartz.jzhao.xyz/).

## Repository Structure

- `content/` - Markdown content files organized by modules and topics
- `quartz/` - Quartz static site generator framework (TypeScript)
- `docs/` - Documentation
- `quartz.config.ts` - Site configuration
- `quartz.layout.ts` - Layout configuration

## Tech Stack

- **Static Site Generator**: Quartz v4
- **Language**: TypeScript
- **UI Framework**: Preact
- **Content Format**: Markdown (Obsidian-flavored)
- **Package Manager**: npm
- **Node.js**: v22+

## Development Commands

```bash
# Install dependencies
npm ci

# Build the site
npx quartz build

# Serve locally for development
npx quartz build --serve

# Run type checking and formatting check
npm run check

# Format code
npm run format

# Run tests
npm test
```

## Code Style

This repository uses Prettier for code formatting with the following settings:

- Print width: 100 characters
- Tab width: 2 spaces
- No semicolons
- Trailing commas in all places
- Quote properties as needed

## Pull Request Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Formatting changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test changes
- `chore:` - Maintenance tasks
- `build:` - Build system changes
- `ci:` - CI configuration changes
- `revert:` - Reverts

## Content Guidelines

- Content files should be in Markdown format
- Use Obsidian-compatible syntax for links and embeds
- Place images and attachments in `content/Z_Attatchments/`
- Follow the existing folder structure in `content/`

## Important Notes

- The `public/` directory is the build output and should not be committed
- The `.quartz-cache/` directory contains build cache and should not be committed
- Always run `npm run check` before submitting changes to ensure code quality
