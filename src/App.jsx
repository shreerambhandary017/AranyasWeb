import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Roadmap from './sections/Roadmap';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';
// import useScrollAnimations from './animations/scrollAnimations';

const App = () => {
  // useScrollAnimations();

  return (
    <SmoothScrollProvider>
      <div className="app-shell">
        <NavBar />
        <main>
          <Hero />
          <Products />
          <About />
          <Roadmap />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default App;

