import { fetchAPI } from '@/lib/api';
import Link from 'next/link';

export default async function SinglePost({ params }) {
  // ⚠️ FIX: In Next.js 15+, params is a Promise. We must await it.
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. Fetch the specific post by Slug
  const data = await fetchAPI(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content
        date
      }
    }
  `, {
    variables: {
      id: slug,
      idType: 'SLUG'
    }
  });

  const post = data?.post;

  // Error check
  if (!post) {
    return (
      <div className="min-h-screen p-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Post not found!</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          ← Return Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-10 bg-white max-w-3xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-8 block">
        ← Back to Home
      </Link>
      
      <h1 className="text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
      <p className="text-gray-500 mb-8 text-sm">
        Published on {new Date(post.date).toLocaleDateString()}
      </p>
      
      {/* Render HTML Content safely */}
      <div 
        className="prose lg:prose-xl text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </main>
  );
}