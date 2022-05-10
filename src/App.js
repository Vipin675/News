import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import NewsDetail from "./components/newsDetail/NewsDetail";

function App() {
  return (
    <>
      <div className="App container">
        <Navbar />
        <Routes>
          <Route path="/" element={<News/>} />
          <Route path="/detail" element={<NewsDetail/>} />
        </Routes>
        <Footer/>
        <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </div>
    </>
  );
}

export default App;
