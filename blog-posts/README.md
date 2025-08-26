# Blog Posts

This directory contains markdown files for blog posts. Each blog post should be a separate `.md` file.

## Adding a New Blog Post

1. Create a new markdown file (e.g., `4.md`) in this directory
2. Add the blog post metadata to the `blogPosts` array in `src/portfolio.js`:

```javascript
{
  id: 4,
  title: 'Your Blog Post Title',
  subtitle: 'Your subtitle',
  excerpt: 'A brief description that appears on the blog listing page...',
  contentFile: '4.md',
  date: '2024-XX-XX',
  readTime: 'X min read',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

## Markdown Format

The markdown files support:
- `## Heading` - Main headings
- `### Subheading` - Subheadings  
- `- List item` - Bullet points
- Regular paragraphs
- Empty lines for spacing

## File Naming

- Use simple numeric names: `1.md`, `2.md`, `3.md`, etc.
- The `id` in portfolio.js should match the filename number
- The `contentFile` should match the exact filename
