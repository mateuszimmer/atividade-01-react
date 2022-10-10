import Banner from './components/banner/Banner';
import Main from './components/main/Main';
import SectionDestaque from './components/sectionDestaque/SectionDestaque';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <SectionDestaque titulo="NESSA LONGA ESTRADA DA VIDA" />
      <Banner />
      <Main />
      <SectionDestaque titulo="CONTATE-NOS" />
      <Footer />
    </>
  );
}

export default App;
