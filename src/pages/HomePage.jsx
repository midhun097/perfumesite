





import Banner from '../components/Banner';
import OfferHighlights from '../components/OfferHighlights';
import Features from '../components/Features';
import FeaturedCollections from '../components/FeaturedCollections';
import CategoryShowcase from '../components/CategoryShowcase';
import OffersZone from '../components/OffersZone';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar/>
      
     <Banner/> 
     <OfferHighlights/>
      <Features/>
      <FeaturedCollections/>
      <CategoryShowcase/>
     <OffersZone/>
   <Footer/>
    </div>
  );
}

export default HomePage;
