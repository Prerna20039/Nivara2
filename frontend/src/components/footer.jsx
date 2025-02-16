export default function Footer() {
    return (
      <footer className="bg-gradient-to-r mx-auto from-[#0C1C0C] to-[#2C5530] text-white py-10">
        <div className=" px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Section - About */}
          <div>
            <h2 className="text-2xl font-serif">NIVARA</h2>
            <p className="mt-4 text-sm">
              Nivara is committed to delivering quality products and trusted services that 
              meet the needs of users buying small business products.
            </p>
            <div className="flex gap-4 mt-4">
              <img src="/images/insta_logo.svg" alt="Instagram" className="w-6 h-6" />
              <img src="/images/email_logo.svg" alt="Email" className="w-6 h-6" />
              <img src="/images/whatspp_logo.svg" alt="WhatsApp" className="w-6 h-6" />
            </div>
          </div>
  
          {/* Middle Section - Quick Links */}
          <div className="ml-60">
            <h3 className="text-lg font-semibold mb-4 ">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">HOME</a></li>
              <li><a href="#" className="hover:underline">SHOP</a></li>
              <li><a href="#" className="hover:underline">CONTACT</a></li>
              <li><a href="#" className="hover:underline">ABOUT</a></li>
            </ul>
          </div>
  
          {/* Right Section - Newsletter */}
          <div className="ml-90">
            <h3 className="text-lg font-semibold mb-4">Become our Subscribers!</h3>
            <p className="text-sm">
              Subscribe to our newsletter for exclusive deals, latest product updates, and special offers!
            </p>
            <div className="mt-4">
              <input 
                type="email" 
                placeholder="example123@gmail.com" 
                className="w-full bg-transparent border border-white text-white px-4 py-2 rounded-full outline-none placeholder:text-white/70"
              />
            </div>
            <div className="flex items-center gap-4 mt-4 text-[#EEFF5A]">
              <span>📞 088-777-666-85</span>
              <span>📩 nivara25@gmail.com</span>
            </div>
          </div>
        </div>
  
        {/* Bottom Section - Copyright */}
        <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
          © 2025 Nivara - All Rights Reserved
        </div>
      </footer>
    );
  }
  