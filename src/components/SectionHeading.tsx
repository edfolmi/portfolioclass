type Props = { index: string; label: string };

export default function SectionHeading({ index, label }: Props) {
  return (
    <div className="section-label">
      <span className="mono">{index}</span>
      <span className="section-label__rule" aria-hidden="true" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
