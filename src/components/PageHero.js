import Link from "next/link";

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  lead,
  crumbs = [],
  short = false,
  actions = null,
}) {
  return (
    <section className={`page-hero${short ? " page-hero--short" : ""}`}>
      <div className="page-hero__bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" />
        <div className="page-hero__overlay" />
      </div>

      <div className="page-hero__inner">
        {crumbs.length > 0 && (
          <div className="breadcrumb">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="breadcrumb__item">
                {i > 0 && <span className="breadcrumb__sep">/</span>}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </div>
        )}
        {eyebrow ? <div className="page-hero__eyebrow">{eyebrow}</div> : null}
        <h1>{title}</h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
        {actions ? <div className="page-hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
