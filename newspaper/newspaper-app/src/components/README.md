# New Yorker Style React Components

A collection of reusable React components styled after The New Yorker's minimalist, elegant design aesthetic.

## Components Overview

### Layout Components

#### `Header`
Sticky header with shrinking masthead animation on scroll.

**Props:**
- `siteName` (string): Site title displayed in masthead (default: "The New Yorker")
- `navItems` (array): Navigation items with `label` and `href` properties

**Example:**
```jsx
<Header 
  siteName="My Magazine"
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' }
  ]}
/>
```

---

#### `Footer`
Multi-column footer with links and copyright information.

**Props:**
- `companyName` (string): Company name for copyright
- `year` (number): Copyright year
- `sections` (array): Footer sections with `title` and `links` arrays

**Example:**
```jsx
<Footer 
  companyName="My Publication"
  sections={[
    {
      title: 'Content',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ]}
/>
```

---

#### `Container`
Responsive container with consistent spacing.

**Props:**
- `size` (string): 'sm', 'default', 'lg', 'xl', 'full'
- `padding` (boolean): Enable/disable padding
- `className` (string): Additional CSS classes

**Example:**
```jsx
<Container size="lg">
  <h1>Content goes here</h1>
</Container>
```

---

#### `Divider`
Horizontal divider for section separation.

**Props:**
- `variant` (string): 'thin', 'normal', 'thick', 'dotted'
- `spacing` (string): 'tight', 'normal', 'loose'
- `color` (string): 'gray', 'black'

**Example:**
```jsx
<Divider variant="thick" spacing="loose" color="black" />
```

---

### Article Components

#### `FeaturedArticle`
Large hero article with image and detailed information.

**Props:**
- `category` (string): Article category
- `title` (string): Article title
- `description` (string): Article description
- `author` (string): Author name
- `image` (string): Image URL
- `readTime` (string): Read time estimate
- `imagePosition` (string): 'left' or 'right'
- `onClick` (function): Click handler

**Example:**
```jsx
<FeaturedArticle
  category="Feature"
  title="The Future of Design"
  description="An exploration of design trends..."
  author="Jane Doe"
  image="https://example.com/image.jpg"
  readTime="10 min read"
  imagePosition="right"
  onClick={() => console.log('Clicked')}
/>
```

---

#### `ArticleCard`
Flexible article card with three size variants.

**Props:**
- `category` (string): Article category
- `title` (string): Article title
- `description` (string): Article description (for 'main' variant)
- `author` (string): Author name
- `image` (string): Image URL (for 'main' variant)
- `readTime` (string): Read time estimate
- `variant` (string): 'main', 'secondary', 'compact'
- `onClick` (function): Click handler

**Variants:**
- **main**: Large card with image, description
- **secondary**: Medium card, no image
- **compact**: Small card, minimal info

**Example:**
```jsx
<ArticleCard
  variant="main"
  category="Culture"
  title="Article Title"
  description="Brief description..."
  author="John Smith"
  image="https://example.com/image.jpg"
  readTime="5 min read"
/>
```

---

#### `ArticleGrid`
Responsive grid layout for displaying multiple articles.

**Props:**
- `articles` (array): Array of article objects
- `columns` (number): 1, 2, 3, or 4 columns
- `variant` (string): 'main', 'secondary', 'compact' (applies to all cards)
- `gap` (string): 'tight', 'normal', 'loose'
- `title` (string): Optional section title
- `showDivider` (boolean): Show top divider

**Example:**
```jsx
<ArticleGrid
  articles={articlesArray}
  columns={3}
  variant="main"
  gap="normal"
  title="Latest Stories"
/>
```

---

### Other Components

#### `NewsletterSignup`
Email newsletter signup form.

**Props:**
- `title` (string): Form title
- `description` (string): Form description
- `buttonText` (string): Submit button text
- `onSubmit` (function): Form submit handler
- `showBorder` (boolean): Show top/bottom borders
- `disclaimer` (string): Terms disclaimer text

**Example:**
```jsx
<NewsletterSignup
  title="Subscribe to our newsletter"
  description="Get weekly updates"
  buttonText="Sign Up"
  onSubmit={(email) => console.log(email)}
/>
```

---

## Installation

1. Install Tailwind CSS in your React project
2. Copy the components folder to your project
3. Import components as needed

## Usage Example

```jsx
import React from 'react';
import {
  Header,
  Footer,
  Container,
  FeaturedArticle,
  ArticleGrid,
  Divider,
  NewsletterSignup
} from './components';

function MyPage() {
  const articles = [
    {
      category: 'News',
      title: 'Breaking Story',
      author: 'Reporter Name',
      readTime: '5 min read'
    }
  ];

  return (
    <div>
      <Header siteName="My Site" />
      
      <Container>
        <FeaturedArticle {...featuredData} />
        <Divider />
        <ArticleGrid articles={articles} columns={3} variant="main" />
        <NewsletterSignup />
      </Container>
      
      <Footer />
    </div>
  );
}
```

## Design Principles

These components follow The New Yorker's design philosophy:

- **Minimalist aesthetic** - Clean layouts with ample white space
- **Typography-focused** - Serif headlines, sans-serif body text
- **Content-first** - Remove distractions, highlight the content
- **Elegant interactions** - Subtle hover effects and animations
- **Responsive** - Mobile-first, scales beautifully to all screens

## Customization

All components accept standard React props and can be customized with:
- Tailwind CSS classes via `className` prop
- Custom click handlers via `onClick` prop
- Flexible configuration props for layout and styling

## Browser Support

These components work in all modern browsers that support:
- CSS Grid
- Flexbox
- CSS Transitions
- ES6 JavaScript