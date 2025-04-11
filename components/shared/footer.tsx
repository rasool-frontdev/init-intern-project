import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <p className="text-sm">Subscribe</p>
            <p className="text-sm mb-2">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black border border-white/30 text-white px-3 py-2 text-sm w-full"
              />
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
            <p className="text-sm">DH 1515, Bangladesh</p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+7 777 66 55</p>
          </div>

          {/* Account Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <p className="text-sm">My Account</p>
            <p className="text-sm">Login / Register</p>
            <p className="text-sm">Cart</p>
            <p className="text-sm">Wishlist</p>
            <p className="text-sm">Shop</p>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Terms Of Use</p>
            <p className="text-sm">FAQ</p>
            <p className="text-sm">Contact</p>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-xs text-gray-400 mb-2">Save $3 with App New User Only</p>
            <div className="flex space-x-2  ">
              <div className="w-24 h-24 bg-white p-1">
                <Image
                  src="/assets/qr-code.svg"
                  alt="QR Code"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h6 className="text-lg font-medium">Google Play</h6>
                <h6 className="text-lg font-medium">App Store</h6>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-400">
          <p>© Copyright 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
