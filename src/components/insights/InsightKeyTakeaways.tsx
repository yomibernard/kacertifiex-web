export function InsightKeyTakeaways({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-sm border border-gold/30 bg-grey-light/80 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Key takeaways
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-charcoal">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
