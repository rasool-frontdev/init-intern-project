"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Package, X, Star, LogOut } from "lucide-react";

export default function HomeSwiper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-10">
        {showMenu && (
          <div className="absolute right-0 top-full w-64 bg-gray-800/90 text-white rounded-bl-lg shadow-lg">
            <div className="p-4 space-y-3">
              <Link
                href="/orders"
                className="flex items-center gap-3 hover:text-gray-300"
              >
                <Package size={18} />
                <span>My Order</span>
              </Link>
              <Link
                href="/cancellations"
                className="flex items-center gap-3 hover:text-gray-300"
              >
                <X size={18} />
                <span>My Cancellations</span>
              </Link>
              <Link
                href="/reviews"
                className="flex items-center gap-3 hover:text-gray-300"
              >
                <Star size={18} />
                <span>My Reviews</span>
              </Link>
              <div className="border-t border-gray-700 my-2"></div>
              <Link
                href="/logout"
                className="flex items-center gap-3 hover:text-gray-300"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {/* Slide 1 - iPhone */}
          <div className="flex-[0_0_100%] min-w-0 relative">
            <div className="bg-black text-white h-[400px] md:h-[500px] relative overflow-hidden">
              <div className="container mx-auto h-full flex items-center">
                <div className="w-full md:w-1/2 p-8 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Apple"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <span className="text-lg">iPhone 14 Series</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Up to 10%
                    <br />
                    off Voucher
                  </h2>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 mt-4 text-white hover:underline"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden md:block">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="iPhone 14"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-[0_0_100%] min-w-0 relative">
            <div className="bg-black text-white h-[400px] md:h-[500px] relative overflow-hidden">
              <div className="container mx-auto h-full flex items-center">
                <div className="w-full md:w-1/2 p-8 z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    New Arrivals
                    <br />
                    Summer Sale
                  </h2>
                  <p className="mb-6 text-gray-300">Discover our latest collection with special offers</p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 mt-4 text-white hover:underline"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden md:block">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Summer Collection"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex-[0_0_100%] min-w-0 relative">
            <div className="bg-black text-white h-[400px] md:h-[500px] relative overflow-hidden">
              <div className="container mx-auto h-full flex items-center">
                <div className="w-full md:w-1/2 p-8 z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Exclusive
                    <br />
                    Headphones
                  </h2>
                  <p className="mb-6 text-gray-300">Premium sound quality for music lovers</p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 mt-4 text-white hover:underline"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden md:block">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Headphones"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? "bg-red-500 w-4" : "bg-gray-400"}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
