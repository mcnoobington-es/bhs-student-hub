import React from 'react';
import './App.css'
import {
  Header,
  Footer,
  Container,
  Divider,
  FeaturedArticle,
  ArticleGrid,
  NewsletterSignup
} from './components';

const Homepage = () => {
  // Sample article data
  const featuredArticle = {
    category: 'The Current',
    title: 'The Silent Revolution in American Libraries',
    description: 'How public libraries became community centers, emergency shelters, and the last truly democratic spaces in American life.',
    author: 'Margaret Atwood',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
    readTime: '17 min read'
  };

  const mainArticles = [
    {
      category: 'Letter from Washington',
      title: 'The New Politics of Memory',
      description: 'As monuments fall and textbooks change, a divided nation struggles to agree on its past.',
      author: 'David Remnick',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
      readTime: '12 min read'
    },
    {
      category: 'Fiction',
      title: 'The Apartment',
      description: 'A short story about inheritance, secrets, and the things we leave behind.',
      author: 'Jhumpa Lahiri',
      image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop',
      readTime: '15 min read'
    },
    {
      category: 'Cultural Comment',
      title: 'The Age of Ambient Television',
      description: 'Why we watch TV shows we barely remember, and what that says about modern life.',
      author: 'Emily Nussbaum',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop',
      readTime: '8 min read'
    }
  ];

  const secondaryArticles = [
    {
      category: 'The Critics',
      title: 'The Return of Sincerity in Cinema',
      author: 'Anthony Lane',
      readTime: '6 min read'
    },
    {
      category: 'Books',
      title: 'The Poetry of Forgotten Languages',
      author: 'Dan Chiasson',
      readTime: '10 min read'
    },
    {
      category: 'Personal History',
      title: 'My Father\'s Last Winter',
      author: 'Janet Malcolm',
      readTime: '14 min read'
    },
    {
      category: 'Annals of Technology',
      title: 'The Social Network That Disappeared',
      author: 'Anna Wiener',
      readTime: '11 min read'
    }
  ];

  const moreStories = [
    {
      category: 'Daily Comment',
      title: 'What the Latest Climate Report Really Means',
      author: 'Elizabeth Kolbert',
      readTime: '5 min read'
    },
    {
      category: 'Shouts & Murmurs',
      title: 'A Passive-Aggressive Letter to My Roomba',
      author: 'Colin Nissan',
      readTime: '3 min read'
    },
    {
      category: 'On and Off the Avenue',
      title: 'The Quiet Luxury of Invisible Wealth',
      author: 'Rachel Syme',
      readTime: '7 min read'
    },
    {
      category: 'The Talk of the Town',
      title: 'The Last Newsstand in Manhattan',
      author: 'Ian Frazier',
      readTime: '4 min read'
    },
    {
      category: 'Profiles',
      title: 'The Architect Who Designs for Disasters',
      author: 'Dana Goodyear',
      readTime: '16 min read'
    },
    {
      category: 'A Reporter at Large',
      title: 'Inside the World\'s Largest Seed Vault',
      author: 'Kathryn Schulz',
      readTime: '13 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Container>
        {/* Featured Article - Hero */}
        <FeaturedArticle {...featuredArticle} />

        <Divider />

        {/* Main Articles Grid */}
        <ArticleGrid 
          articles={mainArticles}
          columns={3}
          variant="main"
        />

        <Divider variant="thick" color="black" />

        {/* Secondary Articles - Two Column Layout */}
        <ArticleGrid 
          articles={secondaryArticles}
          columns={2}
          variant="secondary"
          gap="loose"
        />

        <Divider />

        {/* More Stories Section */}
        <ArticleGrid 
          articles={moreStories}
          columns={3}
          variant="compact"
          title="More Stories"
        />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </Container>

      <Footer />
    </div>
  );
};

export default Homepage;