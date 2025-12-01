# University Notes 🧠

![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Built With Quartz](https://img.shields.io/badge/Built%20With-Quartz-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

<div align="center">
  <!-- Cool loading visual as requested -->
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="50" alt="loading..." />
  <p><em>Constantly compiling knowledge...</em></p>
</div>

This repository contains university notes, research, and a Zettelkasten knowledge base powered by [Obsidian](https://obsidian.md/) and [Quartz](https://quartz.jzhao.xyz/).

---

## 📂 Repository Structure

- `content/` - Markdown content files organized by modules and topics
- `quartz/` - Quartz static site generator framework (TypeScript)
- `docs/` - Documentation
- `quartz.config.ts` - Site configuration
- `quartz.layout.ts` - Layout configuration

## 🛠 Tech Stack

- **Static Site Generator**: Quartz v4
- **Language**: TypeScript
- **UI Framework**: Preact
- **Content Format**: Markdown (Obsidian-flavored)
- **Package Manager**: npm
- **Node.js**: v22+

## 🚀 Development Commands

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

## 🎨 Code Style

This repository uses Prettier for code formatting with the following settings:

- Print width: 100 characters
- Tab width: 2 spaces
- No semicolons
- Trailing commas in all places
- Quote properties as needed

## 📝 Content Guidelines

- Content files should be in Markdown format
- Use Obsidian-compatible syntax for links and embeds
- Place images and attachments in `content/Z_Attatchments/`
- Follow the existing folder structure in `content/`

## 🤝 Pull Request Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Formatting changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test changes
- `chore:` - Maintenance tasks

---

> **Note**: The `public/` directory is the build output and should not be committed. Always run `npm run check` before submitting changes.
