import './App.css';
import Nav from './Component/nav/Nav';
import Content from './Component/content/Content';
import Skill from './Component/Skill/Skill';
import Project from './Component/projects/Projects';
import Footer from './Component/Footer/Footer';
import Experience from './Component/experience/Experience';
import { Contact } from './Component/contact/Contact';

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
            </div>
          </div>
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="experience">
          <Experience/>
        </section>
       <section id="contact">
        <Contact/>
       </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
