export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-md">
      <div className="text-center space-y-md">
        {/* The Text - Switches between Black and Soft Blue on hover */}
        <h1 className="cursor-pointer text-blue-400 text-4xl font-serif transition-colors duration-500 hover:text-accent sm:text-6xl md:text-8xl">
          Tailwind is Working
        </h1>
        
        {/* Subtext - Proves the Inter font and Muted color */}
        <p className="font-sans text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Velora Digital Flagship • 2026
        </p>

        {/* Visual Indicator - The Soft Blue Accent */}
        <div className="mx-auto h-1 w-24 rounded-full bg-accent animate-pulse" />
      </div>
    </main>
  );
}