import Link from 'next/link';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <header style={{ 
            padding: '80px 0 40px 0', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'baseline',
            borderBottom: '1px solid #f0f0f0' 
          }}>
            <h1 style={{ fontSize: '1.2rem', margin: 0, letterSpacing: '2px', fontWeight: '900' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>MICHAEL WEBBER</Link>
            </h1>
            <nav style={{ fontSize: '0.85rem', fontWeight: '600' }}>
              <Link href="/blog" style={{ marginLeft: '25px', textDecoration: 'none', color: 'black' }}>BLOG</Link>
              <Link href="/socials" style={{ marginLeft: '25px', textDecoration: 'none', color: 'black' }}>SOCIALS</Link>
              <Link href="/about" style={{ marginLeft: '25px', textDecoration: 'none', color: 'black' }}>ABOUT</Link>
            </nav>
          </header>
          
          <main>{children}</main>
          
          <footer style={{ marginTop: '100px', paddingBottom: '60px', color: '#999', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Michael Webber
          </footer>
        </div>
      </body>
    </html>
  );
}