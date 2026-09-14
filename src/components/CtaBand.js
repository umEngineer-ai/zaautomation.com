import Link from "next/link";

export default function CtaBand({ title, text, primary, secondary }) {
  return (
    <div className="cta-band reveal">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        {primary && (
          primary.external ? (
            <a className="btn btn--accent" href={primary.href} target="_blank" rel="noopener noreferrer">
              {primary.label}
            </a>
          ) : (
            <Link className="btn btn--accent" href={primary.href}>
              {primary.label}
            </Link>
          )
        )}
        {secondary && (
          secondary.external ? (
            <a className="btn btn--ghost" href={secondary.href} target="_blank" rel="noopener noreferrer">
              {secondary.label}
            </a>
          ) : (
            <Link className="btn btn--ghost" href={secondary.href}>
              {secondary.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
