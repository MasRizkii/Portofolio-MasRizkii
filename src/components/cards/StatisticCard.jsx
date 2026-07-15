function StatisticCard({ statistic }) {
  const Icon = statistic.icon;

  return (
    <div className="flex items-center gap-4 p-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#55247d] to-[#a946f4] text-2xl">
        <Icon />
      </span>

      <div>
        <strong className="block text-xl font-semibold">{statistic.value}</strong>
        <span className="text-xs text-[#c1bac5]">{statistic.label}</span>
      </div>
    </div>
  );
}

export default StatisticCard;
