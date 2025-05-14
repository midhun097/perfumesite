// src/components/CategoryShowcase.jsx
function CategoryShowcase() {
    const categories = [
      { title: "New Arrivals", image: "https://img.freepik.com/free-photo/front-view-perfume-bottle-flowers-light-blue-background-free-space_140725-145522.jpg" },
      { title: "Limited Edition", image: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?cs=srgb&dl=pexels-valeriya-1961792.jpg&fm=jpg" },
      { title: "Best Sellers", image: "https://i.pinimg.com/736x/f7/c4/91/f7c491893692d8f4bb99d88316bea13c.jpg" },
    ];
  
    return (
      <section className="px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl shadow-md">
            <img src={cat.image} alt={cat.title} className="w-full h-72 object-cover transition-transform group-hover:scale-105 duration-300" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium">
              {cat.title}
            </div>
          </div>
        ))}
      </section>
    );
  }
  
  export default CategoryShowcase;
  