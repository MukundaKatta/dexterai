import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'DexterAI - Robot Dexterity Evaluation', description: 'Hand dexterity evaluation and benchmarking' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className="dark"><body className="min-h-screen bg-[#050f0a] text-gray-100 antialiased">{children}</body></html>);
}
