import Link from 'next/link';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article style={{ paddingBottom: '100px' }}>
      <nav style={{ marginBottom: '40px', fontSize: '0.9rem' }}>
        <Link href="/" style={{ color: '#999' }}>← Back to Home</Link>
      </nav>

      {/* The content will now handle its own header */}
      {children}
    </article>
  );
}