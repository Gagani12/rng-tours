export default function Footer() {
  return (
    <footer className="bg-[#02111d] text-white pt-20">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-12">

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-yellow-400">
            Navigation
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
  <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
  <li><a href="#about" className="hover:text-yellow-400">About</a></li>
  <li><a href="#destinations" className="hover:text-yellow-400">Destinations</a></li>
  <li><a href="#tours" className="hover:text-yellow-400">Tours</a></li>
  <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
</ul>
        </div>

        {/* Tours */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-yellow-400">
            Tours
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
  <li><a href="#home" className="hover:text-yellow-400">Luxury Tours</a></li>
  <li><a href="#about" className="hover:text-yellow-400">Wildlife Safari</a></li>
  <li><a href="#destinations" className="hover:text-yellow-400">Adventure Tours</a></li>
  <li><a href="#tours" className="hover:text-yellow-400">Airport Pickup & Drop</a></li>
  
</ul>
          
        </div>

        
        {/* Social */}
<div>
  <h3 className="text-xl font-semibold mb-5 text-yellow-400">
    Stay Connected
  </h3>

  <div className="flex gap-4">

    {[
      { src: "/facebook2.jpg", alt: "Facebook", link: "https://www.facebook.com/share/18qjdRQ9bm/?mibextid=wwXIfr" },
      { src: "/whatsapp1.png", alt: "WhatsApp", link: "https://wa.me/94706056220" },
      { src: "/instagram2.png", alt: "Instagram", link: "https://www.instagram.com/rng_tours_srilanka?igsh=MTY5ZzR5ODVlMjc2aA%3D%3D&utm_source=qr" }, 
      
      
    ].map((icon, i) => (
      <a
        key={i}
        href={icon.link || "#"}
        className="group w-12 h-12 rounded-full border border-yellow-500/60 
                   flex items-center justify-center
                   bg-transparent hover:bg-yellow-500
                   transition-all duration-300 hover:scale-110
                   shadow-md hover:shadow-yellow-500/40"
      >
        <img
          src={icon.src}
          alt={icon.alt}
          className="w-6 h-6 object-contain group-hover:scale-110 transition"
        />
      </a>
    ))}

  </div>
</div>




        {/* Hotline */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-yellow-400">
            Hotline
          </h3>

          <p className="text-xl">
            +94 70 60 56 220
          </p>

          <p className="text-gray-400 mt-2">
            No.66, Old Tangalle Rd, Kotuwegoda, Matara, Sri Lanka.
          </p>

          <p className="text-sm text-gray-400 mt-6">
            RNG Tours Sri Lanka<br />
            rngtours01@gmail.com
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-yellow-500/20 mt-14 text-center py-6 text-gray-500 text-sm">
        © 2026 RNG Tours. All Rights Reserved
      </div>

    </footer>
  );
}