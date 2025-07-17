// components/LoaderSpinner.tsx
export default function LoaderSpinner({
  size = 20,
  color = "white",
}: {
  size?: number;
  color?: string;
}) {
  const borderColor = `border-${color}`;
  return (
    <div
      className={`animate-spin rounded-full border-2 ${borderColor} border-t-transparent`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "transparent",
      }}
    />
  );
}
