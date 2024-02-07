import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Comp from './components/Reserve/Comp';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Comp />
      <Services />
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
