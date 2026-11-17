import { content } from "@/content";

export default function ContactLine({ className = "" }: { className?: string }) {
  const { phone, mobile, email } = content.contact;
  return (
    <ul className={`space-y-2 ${className}`}>
      <li>
        <span className="font-label mr-2 text-olive-text">{phone.label}</span>
        <a className="prose-link font-tel inline-flex min-h-11 items-center" href={phone.href} data-cta="bellen">
          {phone.display}
        </a>
      </li>
      <li>
        <span className="font-label mr-2 text-olive-text">{mobile.label}</span>
        <a className="prose-link font-tel inline-flex min-h-11 items-center" href={mobile.href} data-cta="bellen">
          {mobile.display}
        </a>
      </li>
      <li>
        <span className="font-label mr-2 text-olive-text">{email.label}</span>
        <a className="prose-link inline-flex min-h-11 items-center" href={email.href} data-cta="mailen">
          {email.display}
        </a>
      </li>
    </ul>
  );
}
