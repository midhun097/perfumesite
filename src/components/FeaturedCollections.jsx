// src/components/FeaturedCollections.jsx
function FeaturedCollections() {
  const products = [
    {
      name: "Autograph Eau De Parfum 100ml For Men",
      price: "₹650",
      oldPrice: "₹1400",
      image: "https://images-static.nykaa.com/media/catalog/product/7/a/7a4ff34NEUDX00000114_1.jpg?tr=w-500g",
    },
    {
      name: "Kyros Eau De Parfum 100ml For Men",
      price: "₹899",
      oldPrice: "₹2000",
      image: "https://plumgoodness.com/cdn/shop/files/VC_EDP_1080x1080_001.jpg?v=1720004480",
    },
    {
      name: "Autograph Eau De Parfum 100ml For Men",
      price: "₹999",
      oldPrice: "₹2241",
      image: "https://arabianaroma.in/cdn/shop/files/1_41b82c72-83ea-4303-ac42-c408e8e51357.jpg?v=1738399096&width=2048",
    },
    {
      name: "Royal Eau De Parfum 100ml For Men",
      price: "₹650",
      oldPrice: "₹1440",
      image: "https://www.themancompany.com/cdn/shop/products/3_25eeb22b-c286-43bf-b4ea-b791bad68ee8.jpg?v=1671688655",
    },
  ];

  return (
    <>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Featured <span className="text-blue-700">Collections</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden text-center"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain p-4" />
              <div className="p-4">
                <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                <p className="text-blue-700 font-bold">{product.price} <span className="line-through text-gray-500 text-sm">{product.oldPrice}</span></p>
                <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="py-10 px-4 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-medium text-gray-800">
          "It's an art. A craft. A science. At Fragranza, we're in the business of creating memories that last forever through our fragrances."
        </p>
      </div>
    </>

  );
}

export default FeaturedCollections;
