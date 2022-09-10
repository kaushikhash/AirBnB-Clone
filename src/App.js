import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import './style.css'
import Card from "./components/card"
import one from "./image/image1.png"
import two from "./image/wedding.png"
import three from "./image/bike.png"
import star from "./image/Star1.png"



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card
        img={one}
        star={star}
        rate="5.0"
        location="(6) . USA"
        para="Life lessons with Katie Zafares"
        para1="From $136"
        para2=" / Person"
        />
      <Card
        img={two}
        star={star}
        rate="5.0"
        location="(30) . USA"
        para="Learn wedding photography"
        para1="From $125"
        para2=" / Person"
      />
      <Card
          img={three}
          star={star}
          rate="4.8"
          location="(2) . USA"
          para="Group Mountain Biking"
          para1="From $50"
          para2=" / Person"
          />
    </div>
    
  );
}

export default App;
