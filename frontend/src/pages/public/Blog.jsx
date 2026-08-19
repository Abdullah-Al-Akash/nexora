// src/pages/public/Blog.jsx

import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const blogPosts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Discover the latest trends shaping the web development industry.',
    date: 'August 15, 2026',
    category: 'Technology',
  },
  {
    title: 'Design Principles for Better UX',
    excerpt: 'Essential design principles that every designer should know.',
    date: 'August 10, 2026',
    category: 'Design',
  },
  {
    title: 'Marketing Strategies That Work',
    excerpt: 'Proven marketing strategies to grow your business in 2026.',
    date: 'August 5, 2026',
    category: 'Marketing',
  },
]

const BlogPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Blog</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Insights, tips, and stories from our team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:scale-105">
              <div className="mb-4">
                <span className="text-sm text-laserBlue">{post.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{post.title}</h3>
                <p className="text-white/60">{post.excerpt}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-sm">{post.date}</span>
                <Button variant="ghost" className="text-sm p-0">Read More →</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage