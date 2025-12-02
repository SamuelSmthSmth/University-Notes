import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "University Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "samuelsmthsmth.github.io/University-Notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Things 3 uses system fonts. "Inter" is the closest free Google match.
        // The actual system font stack is enforced in custom.scss
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",        // Pure white background
          lightgray: "#e5e5e5",    // Dividers/Borders
          gray: "#818893",         // Muted text / Icons (Matches theme.css)
          darkgray: "#2d2e34",     // Body text (Matches theme.css)
          dark: "#000000",         // Headings (Text Extreme)
          secondary: "#7c4dff",    // Purple accent
          tertiary: "#a274ff",     // Hover/Interactive Accent (lighter purple)
          highlight: "rgba(124, 77, 255, 0.10)", // Selection Highlight (purple-tinted)
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#000000",        // Pure Black (OLED)
          lightgray: "#3b3b3b",    // Dividers
          gray: "#8a919b",         // Muted text
          darkgray: "#e0e0e0",     // Main text
          dark: "#ffffff",         // Headings
          secondary: "#b388ff",    // Purple accent for dark mode
          tertiary: "#d1b3ff",     // Hover state (lighter purple)
          highlight: "rgba(179, 136, 255, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config