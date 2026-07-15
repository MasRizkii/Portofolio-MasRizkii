import { socialMedia } from "../../data/socialMedia";

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialMedia.map(({ id, name, url, icon: Icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          title={name}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition hover:-translate-y-1 hover:border-[#b85cff] hover:bg-[#a946f4]"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;