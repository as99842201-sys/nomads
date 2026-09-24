import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NomadX — 機票、住宿、保險聰明比價',
  description: '比較機票、住宿與旅遊保險，掌握旅程花費，挑選符合預算的方案。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
