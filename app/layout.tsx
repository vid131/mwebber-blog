import Link from 'next/link';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <article>
        <header style={{ 
          padding: '80px 0 40px 0', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'baseline',
          borderBottom: '1px solid #f0f0f0' 
        }}>
          <h1 style={{ fontSize: '1.2rem', margin: 0, letterSpacing: '2px', fontWeight: '900' }}>
            <Link href="/">MICHAEL WEBBER</Link>
          </h1>
          <nav style={{ fontSize: '0.85rem', fontWeight: '600' }}>
            <Link href="/blog" style={{ marginLeft: '25px' }}>BLOG</Link>
            <Link href="/socials" style={{ marginLeft: '25px' }}>SOCIALS</Link>
            <Link href="/about" style={{ marginLeft: '25px' }}>ABOUT</Link>
          </nav>
        </header>
        
        {children}
        
        <footer style={{ marginTop: '100px', paddingBottom: '60px', color: '#999', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Michael Webber
        </footer>
      </article>
    </div>
  );
}