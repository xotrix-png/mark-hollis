/** Full-page 12-col rules — continuous through section gaps. */
export default function SiteGrid() {
  return (
    <div className="site-grid" aria-hidden="true">
      <div className="site-grid__frame">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} className="site-grid__rule" style={{ ['--i']: i }} />
        ))}
      </div>
    </div>
  )
}
