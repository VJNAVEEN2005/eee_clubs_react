import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page_Heading from './components/Page_Heading';
import Club_Details from './components/Club_Details';

import standards from './data/Standards.json'

function App() {
  return (
    <>
      <Header/>
      <Page_Heading title="Clubs"/>

      <div class="body-eee">

        <Club_Details title="Standards Club" mentor="Dr.M.Sudhakaran" mentor_link="https://ptuniv.edu.in/eee/faculty?id=43" data={standards} details="The Event will be updated soon"/>

      </div>

      <Footer/>
    </>
  );
}

export default App;
