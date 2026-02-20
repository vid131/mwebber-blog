import Link from 'next/link'

export default function BlogIndex() {
  const posts = [
    { title: "Alton Bay Ice Runway", date: "FEB 19, 2026", slug: "altonbay" },
    { title: "Moving to Obsidian", date: "FEB 15, 2026", slug: "moving-to-obsidian" },
    { title: "Frosty Run, People Struggling", date: "DEC 03, 2024", slug: "frosty-run" },
    { title: "7 Mile Run", date: "NOV 30, 2024", slug: "7milerun" },
    { title: "Refreshing Winter Run", date: "JAN 22, 2024", slug: "refreshing-winter-run" },
    { title: "Before Ctrl+Z: Exploring Film Editing’s Golden Age with Walter Murch’s ‘Her Name Was Moviola’", date: "JAN 17, 2023", slug: "moviola" },
    { title: "Trim video without re-encoding using ffmpeg", date: "JAN 4, 2023", slug: "ffmpeg" },
  ];

  return (
    <main>
      <h2 className="archive-header">Archive</h2>
      <ul className="archive-list">
        {posts.map((post) => (
          <li key={post.slug} className="archive-item">
            <Link href={`/blog/${post.slug}`} className="archive-link">
              {post.title}
            </Link>
            <span className="archive-date">{post.date}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}