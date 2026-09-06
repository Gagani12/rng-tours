"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer.js";
import LanguageSelector from "./components/LanguageSelector";
import Head from "next/head";

function CommentBox() {
  const defaultComments = [
  { name: "Emma", country: "UK", text: "Amazing experience!", rating: 5, likes: 2 },
  { name: "John", country: "USA", text: "Best tour in Sri Lanka!", rating: 4, likes: 5 },
  { name: "Priya", country: "India", text: "Luxury service ❤️", rating: 5, likes: 3 },
];

const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
  const saved = localStorage.getItem("rng-comments");

  if (saved) {
    setComments(JSON.parse(saved));
  } else {
    setComments(defaultComments);
  }
}, []);

  

  const likeComment = (index) => {
    const updated = [...comments];
    updated[index].likes += 1;
    setComments(updated);
  };

  const addComment = () => {
  if (!name || !country || !text || rating === 0) return;

  const newComments = [
    {
      name,
      country,
      text,
      rating,
      likes: 0,
    },
    ...comments,
  ];

  setComments(newComments);
  localStorage.setItem(
    "rng-comments",
    JSON.stringify(newComments)
  );

  setName("");
  setCountry("");
  setText("");
  setRating(0);
};

  return (
    <div className="max-w-4xl mx-auto">

      {/* INPUT BOX */}
      <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 p-6 rounded-3xl mb-10">

        <h3 className="text-xl font-bold text-yellow-400 mb-4">
          ⭐ Leave Your Rating & Review
        </h3>

        {/* NAME */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 mb-3 rounded-xl bg-black/60 text-white border border-gray-600"
        />
        
        {/* TEXT */}
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Your Country"
          className="w-full p-3 mb-3 rounded-xl bg-black/60 text-white border border-gray-600"
        />

        {/* TEXT */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your experience..."
          className="w-full p-3 mb-3 rounded-xl bg-black/60 text-white border border-gray-600"
        />

        {/* STAR RATING */}
        <div className="flex gap-2 mb-4">
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl cursor-pointer transition ${
                star <= rating ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={addComment}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition"
        >
          Submit Your Review
        </button>
      </div>

      {/* COMMENTS */}
      <div className="space-y-5">

        {comments.map((c, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 p-6 rounded-3xl hover:scale-[1.02] transition relative"
          >

            {/* STAR DISPLAY */}
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map((s) => (
                <span
                  key={s}
                  className={`text-lg ${
                    s <= c.rating ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* NAME */}
            <div className="flex justify-between items-center">

  <div>
    <h4 className="text-yellow-400 font-bold text-lg">
      👤 {c.name}
    </h4>

    <p className="text-xs text-gray-500">
      🌍 {c.country}
    </p>
  </div>

  <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full">
    Verified
  </span>

</div>

            {/* TEXT */}
            <p className="text-gray-300 mt-1">{c.text}</p>

            {/* LIKE BUTTON */}
            <div className="flex justify-between items-center mt-4">

              <button
                onClick={() => likeComment(i)}
                className="text-sm text-gray-300 hover:text-yellow-400 transition"
              >
                ❤️ Like ({c.likes})
              </button>

              <span className="text-xs text-gray-500">
                Verified Review
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}    

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Beaches");


const places = {
  Beaches: [
    { name: "Mirissa", top: "86%", left: "50%" },
    { name: "Bentota", top: "80%", left: "32%" },
    { name: "Unawatuna", top: "82%", left: "42%" },
    { name: "Arugam Bay", top: "68%", left: "70%" },
    { name: "Nilaveli", top: "25%", left: "60%" },
  ],

  Wildlife: [
    { name: "Yala", top: "77%", left: "64%" },
    { name: "Udawalawe", top: "73%", left: "50%" },
    { name: "Wilpattu", top: "34%", left: "30%" },
    { name: "Minneriya", top: "42%", left: "62%" },
    { name: "Sinharaja", top: "74%", left: "38%" },
  ],

  Adventure: [
    { name: "Ella", top: "63%", left: "60%" },
    { name: "Knuckles", top: "52%", left: "55%" },
    { name: "Rafting", top: "58%", left: "40%" },
    { name: "Hiking", top: "48%", left: "48%" },
    { name: "Nine Arch", top: "65%", left: "57%" },
  ],

  History: [
    { name: "Sigiriya", top: "43%", left: "48%" },
    { name: "Kandy", top: "55%", left: "52%" },
    { name: "Anuradhapura", top: "30%", left: "42%" },
    { name: "Polonnaruwa", top: "41%", left: "58%" },
    { name: "Dambulla", top: "47%", left: "51%" },
  ],

  HillCountry: [
    { name: "Nuwara Eliya", top: "65%", left: "48%" },
    { name: "Ella", top: "63%", left: "60%" },
    { name: "Haputale", top: "67%", left: "56%" },
    { name: "Tea Estates", top: "60%", left: "50%" },
    { name: "Horton", top: "69%", left: "52%" },
  ],

  Local: [
    { name: "Village Tours", top: "58%", left: "30%" },
    { name: "Food", top: "72%", left: "40%" },
    { name: "Culture", top: "48%", left: "48%" },
    { name: "Markets", top: "70%", left: "28%" },
    { name: "Crafts", top: "55%", left: "52%" },
  ],
};
  
const [activeService, setActiveService] = useState(0);

const services = [
{
title:"Airport Pickup & Drop",
image:"airport.jpeg",
desc:"Comfortable and luxury airport transfers with professional drivers and premium service."
},
{
title:"Wedding Hires & Luxury Tours",
image:"wedding hire.jpeg",
desc:"Elegant wedding transport and unforgettable luxury experiences across Sri Lanka."
},
{
title:"Adventure & Wildlife Safari",
image:"safari.jpeg",
desc:"Explore thrilling safaris, wildlife adventures and scenic journeys."
},
{
title:"Round Tours Across Sri Lanka",
image:"round tour.jpg",
desc:"Discover the beauty of Sri Lanka with complete island tours and curated experiences."
},
{
title:"all transportation service",
image:"all transportation service.jpg",
desc:"Reliable transport solutions with comfort, safety and flexibility."
},
];

const [booking, setBooking] = useState({
  name: "",
  phone: "",
  country: "",
  date: "",
  tour: "",
  travelers: "",
  request: "",
});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 py-2 shadow-lg" : "bg-white/5 py-4"}
        backdrop-blur-md border-b border-yellow-500/20`}
      >
        <div className="flex justify-between items-center px-4 md:px-6">

          {/* LOGO */}
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="RNG Tours Sri Lanka.png"
              alt="RNG Tours"
              className={`transition-all duration-300 ${scrolled ? "h-10 md:h-14" : "h-16 md:h-24"} w-auto flex-shrink-0`}
            />
            <h1 className="text-yellow-400 font-bold text-base md:text-lg drop-shadow-[0_0_10px_gold] truncate">
              RNG TOURS
            </h1>
          </div>

          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <LanguageSelector />

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex space-x-2">
              <a href="#home"
              className="px-4 py-2 rounded-full text-gray-300 hover:text-black hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_gold]"
              >Home</a>

              <a href="#services"
              className="px-4 py-2 rounded-full text-gray-300 hover:text-black hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_gold]"
              >Services</a>

              <a href="#destinations"
              className="px-4 py-2 rounded-full text-gray-300 hover:text-black hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_gold]"
              >Destinations</a>

              <a href="#about"
              className="px-4 py-2 rounded-full text-gray-300 hover:text-black hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_gold]"
              >About</a>

              <a href="#contact"
              className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_gold]"
              >Contact</a>
            </nav>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-yellow-400 text-2xl w-10 h-10 flex items-center justify-center flex-shrink-0"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col bg-black/95 backdrop-blur-md border-t border-yellow-500/20 px-6 py-4 space-y-1">
            <a href="#home" onClick={() => setMenuOpen(false)} className="py-3 text-gray-300 hover:text-yellow-400 border-b border-white/10">Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-3 text-gray-300 hover:text-yellow-400 border-b border-white/10">Services</a>
            <a href="#destinations" onClick={() => setMenuOpen(false)} className="py-3 text-gray-300 hover:text-yellow-400 border-b border-white/10">Destinations</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-3 text-gray-300 hover:text-yellow-400 border-b border-white/10">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 py-3 text-center bg-yellow-500 text-black font-semibold rounded-full">Contact</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      {/* HERO VIDEO SECTION */}
<section
  id="home"
  className="relative h-screen flex items-center justify-center text-center px-6 pt-20 overflow-hidden"
>

  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden brightness-90 contrast-125 saturate-150">
  <iframe
    className="absolute top-1/2 left-1/2 
    w-[177.77vh] min-w-full h-[56.25vw] min-h-full 
    -translate-x-1/2 -translate-y-1/2 scale-125"
    src="https://www.youtube.com/embed/OkLsh-4NokU?autoplay=1&mute=1&loop=1&playlist=OkLsh-4NokU&controls=0&rel=0"
    title="Hero Video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
</div>

{/* lighter overlay */}
<div className="absolute inset-0 bg-black/25"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-400 leading-tight">
      Discover Sri Lanka with RNG Tours
    </h1>

    <p className="mt-4 text-gray-300 text-lg">
      Luxury Travel • Adventure • Wildlife • Unforgettable Experiences
    </p>

    <a
      href="https://wa.me/94706056220"
      className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
    >
      Book on WhatsApp
    </a>
  </div>

</section>

      {/* LUXURY SERVICES EXPERIENCE */}
<section
id="services"
className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-gray-950"
>

<h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-3">
What's Your Journey?
</h2>

<p className="text-center text-gray-400 mb-14 text-lg">
Your adventure. Your way.
</p>

{/* TOP CIRCLES */}
<div className="flex gap-6 overflow-x-auto justify-center pb-6 mb-10 custom-scroll">

{services.map((service,index)=>(

<div
key={index}
onClick={()=>setActiveService(index)}
className="cursor-pointer text-center flex-shrink-0"
>

<div
className={`w-24 h-24 rounded-full border-2 overflow-hidden transition-all duration-500
${activeService===index
? "border-yellow-400 scale-110 shadow-[0_0_30px_gold]"
: "border-yellow-500/30 hover:scale-105"}
`}
>

<img
src={service.image}
className="w-full h-full object-cover"
/>

</div>

<p
className={`mt-3 text-sm transition
${activeService===index
? "text-yellow-400"
: "text-gray-400"}
`}
>
{service.title}
</p>

</div>

))}

</div>

{/* BIG IMAGE EXPERIENCE */}
<div className="relative rounded-[40px] overflow-hidden border border-yellow-500/20">

<img
src={services[activeService].image}
className="w-full h-[300px] md:h-[550px] object-cover transition-all duration-700"
/>

<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"/>

<div className="absolute inset-0 flex items-center">

<div className="max-w-xl px-10 md:px-16">

<h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight">
{services[activeService].title}
</h2>

<p className="text-gray-300 mt-5 text-lg leading-relaxed">
{services[activeService].desc}
</p>

<a
href="https://wa.me/94706056220"
className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold transition shadow-[0_0_20px_gold]"
>
View More Tours →
</a>

</div>

</div>

</div>

</section>

     

      {/* TOP CITIES */}
<section id="destinations" className="py-24 px-6 md:px-20 bg-gray-950">

  <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
    Top Cities in Sri Lanka
  </h2>

  <p className="text-center text-gray-400 mb-14">
    Explore destinations by city experience
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">

    {[
      {
        name: "Anuradhapura",
        img: "Ruwanweli maha seya.png",
        desc: "Hill country adventure & scenic views"
      },
      {
        name: "Sigiriya",
        img: "Sigiriya-Rock-Fortress-1.jpg",
        desc: "Ancient rock fortress & cultural heritage"
      },
      {
        name: "Kandy",
        img: "Temple tooth.jpg",
        desc: "Modern capital city experience"
      },
      {
        name: "Nuwara Eliya",
        img: "Nuwara eliya.jpg",
        desc: "Ancient sacred city of Sri Lanka"
      },
      {
        name: "Ella",
        img: "demodara-nine-arch-bridge.jpg",
        desc: "Ancient ruins & cultural heritage"
      },
      {
        name: "Arugam Bay",
        img: "Arugam bay.jpg",
        desc: "Surfing paradise & beach life"
      },
      {
        name: "Bentota",
        img: "Benthota.jpg",
        desc: "Luxury beach resorts & river safari"
      },
      {
        name: "Galle",
        img: "Galle.jpg",
        desc: "Cool climate & tea plantations"
      }
      
    ].map((city, i) => (

      <Link
        key={i}
        href={`/city/${city.name.toLowerCase().replace(/\s/g, "")}`}
      >
        <div className="group relative overflow-hidden rounded-3xl cursor-pointer border border-yellow-500/20 shadow-xl hover:shadow-[0_0_35px_gold] transition duration-500">

          {/* IMAGE */}
          <img
            src={city.img}
            className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* TEXT */}
          <div className="absolute bottom-0 p-6 z-10">

            <h3 className="text-2xl font-bold text-yellow-300">
              {city.name}
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              {city.desc}
            </p>

            <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Explore →
            </button>

          </div>

        </div>
      </Link>

    ))}

  </div>
</section>

      {/* GALLERY */}
<section className="py-20 px-6 md:px-20 bg-black">
  <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
    Explore Sri Lanka Gallery
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      "Sigiriya-Rock-Fortress-1.jpg",
      "Galle-Fort-Walking-Tour.png",
      "11.jpg",
      "mirissa-beach.jpg",
      "Temple tooth.jpg",
      "demodara-nine-arch-bridge.jpg"
    ].map((img, i) => (
      <div key={i} className="overflow-hidden rounded-xl border border-yellow-500/20 hover:scale-105 transition">
        <img src={img} className="h-60 w-full object-cover" />
      </div>
    ))}
  </div>
</section>
      
      {/* OUR ISLAND MAP */}
<section className="py-24 px-6 md:px-20 bg-black">

<h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
Our Island
</h2>

<p className="text-center text-gray-400 mb-12">
Explore Sri Lanka by experience
</p>

<div className="grid md:grid-cols-3 gap-8 items-center">

{/* LEFT */}
<div className="space-y-4">

{[
["Beaches","🌊 Beaches"],
["Wildlife","🦁 Wildlife"],
["Adventure","🚂 Adventure"],
].map(([key,label])=>(

<button
key={key}
onClick={()=>setActiveCategory(key)}
className={`w-full text-left p-5 rounded-3xl border transition
${activeCategory===key
? "bg-yellow-500 text-black border-yellow-400 shadow-[0_0_20px_gold]"
: "bg-gray-900 border-yellow-500/20 text-white hover:scale-105"
}`}
>
{label}
</button>

))}

</div>

{/* MAP */}
<div className="relative flex justify-center">

<img
src="Sri Lanka map.png"
className="w-[220px] sm:w-[280px] md:w-[320px] drop-shadow-[0_0_25px_gold]"
/>

<div className="absolute inset-0">

{places[activeCategory]?.map((place, i) => (

  <div
    key={i}
    className="absolute group"
    style={{
      top: place.top,
      left: place.left,
      transform: "translate(-50%, -50%)",
    }}
  >

    <div className="relative flex items-center justify-center">

      <div className="absolute w-8 h-8 bg-pink-500/30 rounded-full animate-ping"></div>

      <div className="w-5 h-5 bg-pink-500 rounded-full border-4 border-white shadow-[0_0_20px_#ff1493]"></div>

    </div>

    <div className="absolute left-7 top-[-6px] opacity-0 group-hover:opacity-100 transition whitespace-nowrap bg-black/90 text-yellow-300 text-xs px-2 py-1 rounded-lg border border-yellow-500">
      📍 {place.name}
    </div>

  </div>
))}

</div>

</div>

{/* RIGHT */}
<div className="space-y-4">

{[
["History","🏛 History & Culture"],
["HillCountry","🌿 Hill Country"],
["Local","🍛 Local Experience"],
].map(([key,label])=>(

<button
key={key}
onClick={()=>setActiveCategory(key)}
className={`w-full text-left p-5 rounded-3xl border transition
${activeCategory===key
? "bg-yellow-500 text-black border-yellow-400 shadow-[0_0_20px_gold]"
: "bg-gray-900 border-yellow-500/20 text-white hover:scale-105"
}`}
>
{label}
</button>

))}

</div>

</div>

{/* PLACE TAGS */}
<div className="mt-12 flex flex-wrap justify-center gap-4">

{places[activeCategory]?.map((place,i)=>(

<div
key={i}
className="bg-gray-900 border border-yellow-500/20 px-5 py-3 rounded-full text-yellow-300 hover:scale-105 transition"
>
📍 {place.name}
</div>

))}

</div>

</section>


{/* LUXURY BOOKING */}

  <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 to-black">

<h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-4">
  Luxury Booking
</h2>

<p className="text-center text-gray-400 mb-12">
  Reserve your unforgettable Sri Lanka experience
</p>

<div className="max-w-3xl mx-auto relative">

  <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-[40px]"></div>

  <div className="relative bg-black/60 backdrop-blur-2xl border border-yellow-500/20 rounded-[40px] p-8 md:p-10 shadow-[0_0_40px_rgba(255,215,0,.15)]">

    <div className="grid md:grid-cols-2 gap-5">

      <input
        value={booking.name}
        onChange={(e)=>setBooking({...booking,name:e.target.value})}
        className="bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
        placeholder="👤 Your Name"
      />

      <input
        value={booking.phone}
        onChange={(e)=>setBooking({...booking,phone:e.target.value})}
        className="bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
        placeholder="📞 Phone Number"
      />

      <input
        value={booking.country}
        onChange={(e)=>setBooking({...booking,country:e.target.value})}
        className="bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
        placeholder="🌍 Country"
      />

      <input
        type="date"
        value={booking.date}
        onChange={(e)=>setBooking({...booking,date:e.target.value})}
        className="bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
      />

      <select
        value={booking.tour}
        onChange={(e)=>setBooking({...booking,tour:e.target.value})}
        className="bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
      >
        <option value="">Select Tour</option>
        <option>Sigiriya Tour</option>
        <option>Ella Adventure</option>
        <option>Beach Holiday</option>
        <option>Wildlife Safari</option>
      </select>

      <input
        type="number"
        value={booking.travelers}
        onChange={(e)=>setBooking({...booking,travelers:e.target.value})}
        className="bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
        placeholder="👥 Travelers"
      />

    </div>

    <textarea
      value={booking.request}
      onChange={(e)=>setBooking({...booking,request:e.target.value})}
      className="w-full mt-5 bg-gray-900/70 border border-yellow-500/10 rounded-2xl p-4 text-white"
      rows="4"
      placeholder="✨ Special Requests / Pickup Location"
    />

    <a
      href={`https://wa.me/94706056220?text=${encodeURIComponent(
`🌴 RNG TOURS BOOKING

👤 Name: ${booking.name}
📞 Phone: ${booking.phone}
🌍 Country: ${booking.country}
📅 Date: ${booking.date}
✈️ Tour: ${booking.tour}
👥 Travelers: ${booking.travelers}

✨ Requests:
${booking.request}`
      )}`}
      target="_blank"
      className="mt-7 block text-center bg-gradient-to-r from-yellow-500 to-yellow-300 hover:scale-[1.03] hover:shadow-[0_0_30px_gold] text-black font-bold py-4 rounded-full transition duration-300"
    >
      ✈️ Book Your Luxury Tour
    </a>

  </div>

</div>

</section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-20 text-center bg-black">

  <h2 className="text-4xl font-bold text-yellow-400 mb-6">
    About Us
  </h2>

  <p className="max-w-3xl mx-auto text-gray-300 mb-12">
    RNG Tours is a premium travel service in Sri Lanka dedicated to creating
    unforgettable journeys. We specialize in luxury travel experiences,
    cultural tours, wildlife safaris, and personalized holiday packages
    designed to explore the true beauty of Sri Lanka.
  </p>

  {/* CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">

    {/* WHO WE ARE */}
    <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-2xl hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        Who We Are
      </h3>

      <p className="text-gray-300">
        We are a passionate team of travel experts based in Sri Lanka,
        committed to delivering safe, comfortable, and memorable travel
        experiences. With years of local knowledge, we guide you to the
        island’s most beautiful and hidden destinations.
      </p>
    </div>

    {/* OUR MISSION */}
    <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-2xl hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        Our Mission
      </h3>

      <p className="text-gray-300">
        Our mission is to provide world-class travel experiences that combine
        luxury, comfort, and adventure. We aim to make every journey smooth,
        personalized, and filled with unforgettable memories for every traveler.
      </p>
    </div>

    {/* OUR VISION */}
    <div className="bg-gray-900 border border-yellow-500/20 p-8 rounded-2xl hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        Our Vision
      </h3>

      <p className="text-gray-300">
        Our vision is to become Sri Lanka’s most trusted and leading travel
        company, known globally for excellence in service, customer care, and
        unique travel experiences that showcase the true spirit of the island.
      </p>
    </div>

  </div>

</section>

      {/* LIVE COMMENTS SECTION */}
<section className="py-20 px-6 md:px-20 bg-black">

  <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
    Live Traveler Comments
  </h2>

  <p className="text-center text-gray-400 mb-10">
    Share your experience & see what others say
  </p>

  {/* COMMENT BOX */}
  <CommentBox />

</section>

      {/* CONTACT */}
<section id="contact" className="py-24 px-6 md:px-20 bg-black relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)]"></div>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_20px_gold]">
      Contact Us
    </h2>

    <p className="text-gray-300 text-lg mb-12">
      Let’s plan your dream Sri Lanka journey with luxury & comfort ✨
    </p>

    {/* CONTACT CARD */}
    <div className="bg-white/5 backdrop-blur-2xl border border-yellow-500/20 rounded-[40px] p-5 md:p-10 shadow-[0_0_60px_rgba(255,215,0,0.12)] hover:scale-[1.02] transition">

      {/* ICONS ROW */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 bg-black/40 rounded-2xl border border-yellow-500/10">
          <p className="text-yellow-400 text-2xl">📞</p>
          <h3 className="text-white font-semibold mt-2">Call Us</h3>
          <p className="text-gray-400 text-sm">+94 70 605 6220</p>
        </div>

        <div className="p-6 bg-black/40 rounded-2xl border border-yellow-500/10">
          <p className="text-yellow-400 text-2xl">📍</p>
          <h3 className="text-white font-semibold mt-2">Location</h3>
          <p className="text-gray-400 text-sm">No.66, Old Tangalle Rd, Kotuwegoda, Matara, Sri Lanka</p>
        </div>

        <div className="p-6 bg-black/40 rounded-2xl border border-yellow-500/10">
          <p className="text-yellow-400 text-2xl">✉️</p>
          <h3 className="text-white font-semibold mt-2">Email</h3>
          <p className="text-gray-400 text-sm">rngtours01@gmail.com</p>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">

        <a
          href="https://wa.me/94706056220" 
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition shadow-[0_0_25px_gold]" 
        > 
          💬 Chat on WhatsApp 
        </a> 
 
        <a 
          href="mailto:rngtours01@gmail.com" 
          className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-8 py-4 rounded-full transition" 
        > 
          📧 Send Email 
        </a> 
 
      </div> 
 
    </div> 
 
    {/* SMALL FOOTER TEXT */} 
    <p className="text-gray-500 text-sm mt-10"> 
      We reply within minutes • RNG Tours in Sri Lanka • Your dream journey starts here 
    </p> 
 
  </div> 
</section> 
 
<Footer /> 
 
</div> 
  ); 
}
