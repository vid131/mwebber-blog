import Link from 'next/link';

export default function SocialsPage() {
  const links = [
    { name: 'Twitter', handle: '@MediaGuy4', url: 'https://twitter.com/MediaGuy4' },
    { name: 'Bluesky', handle: 'michael-webber.com', url: 'https://bsky.app/profile/michael-webber.com' },
    { name: 'Mastadon', handle: 'michael-webber', url: 'https://twit.social/deck/@michaelwebber'},
    { name: 'Facebook', handle: 'Michael R. Webber', url: 'https://www.facebook.com/MichaelRWebber' },
  ];

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '24px' }}>Socials</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Where to find my musings on technology, running, and local media.</p>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link) => (
          <li key={link.name} style={{ marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
            <Link 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                textDecoration: 'none', 
                color: '#000',
                fontWeight: '500'
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: '#0070f3' }}>{link.handle} →</span>
            </Link>
          </li>
        ))}
      </ul>

      <footer style={{ marginTop: '48px' }}>
        <Link href="/" style={{ fontSize: '0.9rem', color: '#666', textDecoration: 'none' }}>
          ← Back to home
        </Link>
      </footer>
    </main>
  );
}
