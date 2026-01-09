import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import WelcomeMessage from "../Components/WelcomeMessage";
import JSXRules from "../Components/JSXRules";
import ProductInfo from "../Components/ProductInfo"; 
import Greeting from "../Components/Greeting";
import { use } from "react";

const App = () => {
  const Name="Kshitiz Raj Shrestha";
  function multiply(a, b) {
    return a * b;
  }
  const specialClass='my-special-class';
  const userInfo = 
  [
    {
      username: "rrsshow",
      email: "rrsshow@example.com",
      location: "Kathmandu, Bagmati Province, Nepal"
    },
    {
      username: "sahil",
      email: "sahil@example.com",
      location: "Pokhara, Gandaki Province, Nepal"
    },
    {
      username: "anita_dev",
      email: "anita@example.com",
      location: "Biratnagar, Koshi Province, Nepal"
    },
    {
      username: "rajesh_nep",
      email: "rajesh@example.com",
      location: "Lalitpur, Bagmati Province, Nepal"
    },
    {
      username: "priya_codes",
      email: "priya@example.com",
      location: "Bhaktapur, Bagmati Province, Nepal"
    }
  ];
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage/>
      <h1>{Name}</h1>
      <p>
        My friends list: { ["Ashu ","Shruti ","Anish ","Sujal "] }
      </p>
      <Footer />
      <JSXRules />
      <p className={specialClass}>This is a special class</p>
      <h1>2 x 2={multiply(2, 2)}</h1>
      <p><ProductInfo /></p>
      <p><Greeting/></p>
      <main>
      {userInfo.map(({username, email, location}) => (
        <h1>
          <ul key={Math.random()}>
            <li>
              {username}
              </li>
              <li>
                {email}
              </li>
              <li>
                {location}
              </li>
          </ul>
        </h1>
      ))}  
      </main>
    </div>
  );
};

export default App;