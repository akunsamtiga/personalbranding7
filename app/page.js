'use client';

import Image from 'next/image';
import { Globe, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'Portfolio', icon: <Globe size={18} />, url: '#' },
    { label: 'LinkedIn', icon: <Linkedin size={18} />, url: '#' },
    { label: 'Twitter', icon: <Twitter size={18} />, url: '#' },
    { label: 'Email Me', icon: <Mail size={18} />, url: 'mailto:hi@zen.com' },
  ];

  return (
    <main className="min-h-screen bg-[#f8f8f7] text-gray-800 font-serif flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200 relative">
        <div className="absolute -top-3 -left-3 w-14 h-14 bg-green-100 rounded-full blur-2xl opacity-50"></div>
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-2 relative rounded-full overflow-hidden">
            <Image
              src="/images/p1.jpg"
              alt="Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold">NamaAnda</h1>
          <span className="inline-block text-xs bg-green-100 text-green-600 rounded-full px-3 py-1 mt-1">
            Writer & Coach
          </span>
          <p className="mt-2 text-sm text-gray-500 italic">
            {`"Creating space, in pixels and mind."`}
          </p>
        </div>
        <div className="space-y-4">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition"
            >
              <span className="flex items-center gap-2">
                {icon} {label}
              </span>
              <span className="text-gray-400">↗</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-center text-gray-400 mt-6">
          Made with calm energy 🌿
        </p>
      </div>
    </main>
  );
}
