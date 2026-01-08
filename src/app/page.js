import { fetchAPI } from '@/lib/api';
import Link from 'next/link';

export default async function Home() {
  // The GraphQL Query
  const data = await fetchAPI(`
    query NewPosts {
      posts(first: 5) {
        nodes {
          title
          excerpt
          slug
          date
        }
      }
    }
  `);

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        My Headless WordPress Blog
      </h1>
      
      <div className="grid gap-6 max-w-4xl mx-auto">
        {data.posts.nodes.map((post) => (
          <div key={post.slug} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div 
              className="text-gray-600 mb-4" 
              dangerouslySetInnerHTML={{ __html: post.excerpt }} 
            />
            <Link href={`/post/${post.slug}`} className="text-blue-500 font-medium hover:underline inline-block mt-4">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}