import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import ForJobSeekers from './components/ForJobSeekers';
import ForCompanies from './components/ForCompanies';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Clients from './components/Clients';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Statistics />
      <About />
      <ForJobSeekers />
      <ForCompanies />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Clients />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
