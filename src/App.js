import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page_Heading from './components/Page_Heading';
import Club_Details from './components/Club_Details';

import standards from './data/Standards.json'
import entrepreneurs from './data/Entrepreneurs.json'
import coding from './data/Control_and_computing.json'

function App() {
  return (
    <>
      <Header/>
      <Page_Heading title="Clubs"/>

      <div class="body-eee">

        <Club_Details title="Standards Club" mentor1="Dr.M.Sudhakaran" mentor1_link="https://ptuniv.edu.in/eee/faculty?id=43" data={standards} details="The Event will be updated soon"/>

        <Club_Details title="Entrepreneurs Club" mentor1="Dr.Rajathy" data={entrepreneurs} details="The Event will be updated soon" mentor1_link="https://ptuniv.edu.in/eee/faculty?id=49"/>

        <Club_Details title="Control and computing club" mentor1="Dr.K.Ramakrishnan" mentor1_link="https://ptuniv.edu.in/eee/faculty?id=48" mentor2="Dr.M.Arounassalame" mentor2_link="https://ptuniv.edu.in/eee/faculty?id=45" data={coding} details="The Event will be updated soon"/>

      </div>

      <Footer/>
    </>
  );
}

export default App;
