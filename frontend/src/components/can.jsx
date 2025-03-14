import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, ArrowRight, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/placeholder.svg?height=50&width=150" 
              alt="Black Simba Logo" 
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="text-orange-500 hover:text-orange-400 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About</Link>
            <Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</Link>
            <Link href="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">Gallery</Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black cursor-pointer rounded-lg">Find a Store</div>
          <div className="md:hidden text-white cursor-pointer">
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-orange-500/20 rounded-full text-orange-500 font-medium text-sm">
                  Unleash Your Potential
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  Drive the Spark<br />
                  <span className="text-orange-500">Break Boundaries</span><br />
                  Boost Energy!
                </h1>
                <p className="text-gray-400 text-lg max-w-md">
                  Experience the power of Black Simba energy drink, crafted to fuel your ambition and unleash your inner strength.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-orange-500 text-black hover:bg-orange-600 cursor-pointer rounded-lg">Explore Products</div>
                  <div className="px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black cursor-pointer rounded-lg">Learn More</div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Black Simba Energy Drink"
                  width={400}
                  height={600}
                  className="relative mx-auto h-auto max-h-[600px] object-contain drop-shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
