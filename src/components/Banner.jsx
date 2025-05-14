// src/components/Banner.jsx
function Banner() {
    return (
      <section className="relative bg-[#00426B] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Discover perfumes that celebrate individuality
            </h1>
            <p className="mb-6 text-lg">
              Every moment with an unforgettable essence.
            </p>
            <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://thumbs.dreamstime.com/b/beautifully-crafted-traditional-arabic-perfume-bottle-intricate-calligraphy-ornamental-design-set-against-luxurious-341217017.jpg"
              alt="Perfume"
              className="max-h-80 w-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Banner;
  