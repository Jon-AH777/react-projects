import React from "react";
// import "./App.css"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/card"
import data from "../components/data"

export default function App(){
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />

    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}