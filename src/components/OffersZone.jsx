
function OffersZone() {
  const offers = [
    {
      name: "Royal Eau De Parfum 100ml For Men",
      price: "₹650",
      oldPrice: "₹1440",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1m_xFQjPzCzmT1mmE-QX99Ud1UKxYK0KQw&s",
    },
    {
      name: "Kyros Eau De Parfum 100ml For Men",
      price: "₹899",
      oldPrice: "₹2000",
      image: "https://image.made-in-china.com/202f0j00skYoQnHJydbv/Wholesale-Custom-Logo-Round-Perfume-Glass-Bottle-100ml-Luxury-Perfume-Bottle-with-Package.webp",
    },
    {
      name: "Royal Eau De Parfum 100ml For Men",
      price: "₹650",
      oldPrice: "₹1440",
      image: "https://i.pinimg.com/736x/1f/42/f8/1f42f8b07581218be40a9e82792cbb48.jpg",
    },
    {
      name: "Autograph Eau De Parfum 100ml For Men",
      price: "₹999",
      oldPrice: "₹2241",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/10/MX/AG/BX/8496781/perfume-packaging-boxes-500x500.jpg",
    },
  ];

  return (
    <>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">
          Offers <span className="text-blue-700">Zone</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl overflow-hidden text-center">
              <img src={offer.image} alt={offer.name} className="w-full h-44 object-contain p-4" />
              <div className="p-4">
                <h4 className="font-medium text-sm mb-1">{offer.name}</h4>
                <p className="text-blue-700 font-bold">{offer.price} <span className="line-through text-gray-500 text-sm">{offer.oldPrice}</span></p>
                <button className="mt-3 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className='p-20'>
        <div className="bg-gradient-to-r from-[#d6f0fd] to-[#e0f5fc] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Elegance in Every Bottle</h2>
            <p className="text-gray-700 mb-4">
              Discover timeless fragrances crafted for every moment
            </p>
            <button className="bg-blue-900 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition">
              Shop Now
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://static.toiimg.com/thumb/imgsize-1675425,msid-111257256,width-375,height-210,resizemode-75/111257256.jpg"
              alt="Perfume Bottle in Box"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default OffersZone;
