import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import twIcon from '../../public/TW.svg';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tailwind is neat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative min-h-[100dvh] bg-qz-gray200 pt-6 text-qz-gray800',
          inter.className
        )}
      >
        <Image
          className="absolute -left-1/3 top-16 -z-50 opacity-[0.15] blur-3xl"
          src={twIcon}
          alt="tw"
          height={1200}
          width={1200}
        />
        <Image
          className="absolute -right-1/3 top-[30rem] -z-50 opacity-[0.2] blur-3xl"
          src={twIcon}
          alt="tw"
          height={1200}
          width={1200}
        />
        {children}
      </body>
    </html>
  );
}
