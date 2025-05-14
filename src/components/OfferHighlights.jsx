// src/components/OfferHighlights.jsx
function OfferHighlights() {
    const offers = [
      {
        title: "Unlock Exclusive Offers",
        desc: "Discover special deals tailored just for you!",
        img: "https://bellavitaorganic.com/cdn/shop/files/Fresh_100_ml.jpg?v=1728034537&width=1000",
      },
      {
        title: "Gift a Scent to your loved one",
        desc: "Make her moments more beautiful!",
        img: "https://www.wildstone.in/cdn/shop/files/Artboard_3_f0a9a067-92da-4007-a17d-9f6e483ff0c3.jpg?v=1721215797",
      },
      {
        title: "Luxury Scents Starting at ₹4,000",
        desc: "",
        img: "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/coco-eau-de-parfum-spray-3-4fl-oz--packshot-default-113530-9539148840990.jpgg",
      },
    ];
  
    return (
      <section className="py-8 px-6 max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden flex items-center gap-4 p-4"
          >
            <img src={offer.img} alt={offer.title} className="w-20 h-20 object-contain" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{offer.title}</h3>
              {offer.desc && <p className="text-sm text-gray-600">{offer.desc}</p>}
            </div>
          </div>
        ))}
      </section>
    );
  }
  
  export default OfferHighlights;
  