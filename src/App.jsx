import './App.css';
import Nav from './Component/nav/Nav';
import Content from './Component/Content';
import Image from './Component/Image';
import Skill from './Component/Skill/Skill';
import Project from './Component/projects/Projects';
import Footer from './Component/Footer/Footer';
import Contact from './Component/contact/Contact';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section id="home">
          <div className="container">
            <div className="container-div">
              <Content />
              <Image />
            </div>
          </div>
        </section>
        <section id="about">
          <Skill />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
