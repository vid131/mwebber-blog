import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Text Section - Tightened bottom padding to pull image up */}
<section style={{ padding: '0px 0 0 0', textAlign: 'center' }}>
  <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '20px' }}>
    A work in progress.
  </h2>

  {/* Professional Tagline - Clean and Horizontal */}
  <div style={{ 
    fontSize: '0.8rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1.5px', 
    color: '#999', 
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap'
  }}>
    <span>Nonprofit Management</span>
    <span style={{ color: '#eee' }}>|</span>
    <span>Video Production Engineer</span>
    <span style={{ color: '#eee' }}>|</span>
    <span>Community Media</span>
    <span style={{ color: '#eee' }}>|</span>
    <span>Live Stream & A/V Consultant</span>
    <span style={{ color: '#eee' }}>|</span>
    <span>Problem Solver</span>
  </div>
</section>

      {/* Hero Image - Panoramic "Bleed" effect */}
      <div style={{ 
        margin: '10px -5vw 60px -5vw', 
        width: 'calc(100% + 10vw)',    
        height: '500px', 
        overflow: 'hidden' 
      }}>
        <img 
          src="/images/mainbgpano.jpg" 
          alt="Michael Webber - Journey" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }} 
        />
      </div>

{/* Latest Writing Section */}
      <section style={{ marginTop: '80px', borderTop: '1px solid #f0f0f0', paddingTop: '40px' }}>
        <p style={{ 
          fontSize: '0.7rem', 
          letterSpacing: '2px', 
          color: '#999', 
          textTransform: 'uppercase', 
          marginBottom: '20px' 
        }}>
          Latest Writing
        </p>
        
        <Link href="/blog/altonbay" style={{ textDecoration: 'none' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#000', marginBottom: '10px', fontWeight: '600' }}>
            Alton Bay Ice Runway
          </h3>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
            February 19, 2026 — A visit to the Alton Bay Seaplane Base (B18) on Lake Winnipesaukee, the only FAA-approved ice runway in the lower 48 states.
          </p>
        </Link>
      </section>
    </main>
  )
}