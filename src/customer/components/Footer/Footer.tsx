import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h1 className="font-bold text-lg mb-4">SnapBuy</h1>
          <p className="text-sm mb-4">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
          <div className="flex gap-4 text-gray-700 text-2xl">
            <a href="#" aria-label="Facebook">
              <FacebookIcon fontSize="inherit" />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon fontSize="inherit" />
            </a>
            <a href="#" aria-label="YouTube">
              <YouTubeIcon fontSize="inherit" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Categories</h2>
          <ul className="space-y-1 text-sm">
            <li className="font-bold">Women</li>
            <li>Tops</li>
            <li>Bottoms</li>
            <li className="font-bold pt-2">Men</li>
            <li>Tops</li>
            <li>Bottom</li>
            <li>Accessories</li>
            <li>Bundles</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
          <p className="text-sm mb-1">500 Terry Francine Street</p>
          <p className="text-sm mb-1">San Francisco, CA 94158</p>
          <p className="text-sm mb-1">info@mysite.com</p>
          <p className="text-sm mb-4">Tel: 123-456-7890</p>

          <h2 className="font-semibold text-lg mb-2">Shop Policies</h2>
          <p className="text-sm">Refund policy</p>
          <p className="text-sm">Shipping policy</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and get 10% off your first order
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-black px-3 py-2 mb-3 text-sm rounded focus:outline-none"
          />
          <label className="flex items-start mb-4 text-sm">
            <input type="checkbox" className="mr-2 mt-1" />
            Yes, Subscribe me to your newsletter.
          </label>
          <button className="bg-black text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SnapBuy. All rights reserved.
      </div>
    </footer>
  );
}
