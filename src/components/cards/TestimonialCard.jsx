import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

function TestimonialCard({ quote, name, role, avatar }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="glass-card rounded-2xl p-6">
      <HiChatBubbleBottomCenterText className="text-4xl text-[#c05cff]" />

      <p className="mt-4 text-sm leading-7 text-[#d1cad5]">
        “{quote}”
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#55247d] to-[#a946f4] text-xs font-semibold uppercase text-white">
            {initials}
          </span>
        )}

        <div>
          <strong className="block text-sm">{name}</strong>
          <span className="text-xs text-[#a8a0ac]">{role}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
