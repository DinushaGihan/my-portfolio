"use client";

export default function AnimatedHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-text-gradient">
      {children}
    </h2>
  );
}