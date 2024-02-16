import './App.css';
import './AppCss/Arimo.css';
import './AppCss/Fira.css';
import './AppCss/highlightButtons.css';
import './AppCss/Poppins.css';
import './AppCss/Source.css';
import './AppCss/styles.css';

import NavBar1 from './AppComponents/Headers/NavBar1';
import NavBar2 from './AppComponents/Headers/NavBar2';
import Page1 from './AppComponents/Headers/Page1';
import Footer from './AppComponents/Headers/Footer';
function App() {
  return (
    <div className="App">
      <header class="_755f5b0f bg-white z-2 bb b--black-20">
        <div></div>
        <NavBar1 />
        <NavBar2 />
      </header>

      <Page1 />
      <Footer />
    </div>
  );
}

export default App;
