import './style/main.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import QuizSection from './components/QuizSection';
import CarouselSection from './components/CarouselSection';
import LastMessage from './components/LastMessage';

function App() {
  return (
    <div className="App">
      
      <header>
        <Header />
      </header>

      <main>
        <Banner />
        <QuizSection />

        <LastMessage/>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
