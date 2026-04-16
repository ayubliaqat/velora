export default function Heading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-primary">
      {children}
    </h2>
  );
}