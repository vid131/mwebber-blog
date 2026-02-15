import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Personal Musings</h1>
      <p>Thoughts on running, technology, and learning.</p>
      
      <section style={{ marginTop: '40px' }}>
        <h2>Latest Posts</h2>
        <ul>
          <li>
            <Link href="/blog/test-post">My First MDX Post</Link>
          </li>
          {/* You'll add more links here as you write */}
        </ul>
      </section>
    </main>
  )
}