function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-white/90">
          <Icon className="text-lg" style={{ color: skill.color }} />
          {skill.name}
        </span>
        <span className="text-sm text-white/60">{skill.level}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#1769e8] to-[#a946f4]"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
