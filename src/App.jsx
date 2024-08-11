import { useState } from "react";
import CardComponent from "./components/Card";
import Header from "./components/header";
import Footer from "./components/footer";
import Search from "./components/search";
// font: Montserrat

function App() {
  // const [count, setCount] = useState(0);
  const [location, setLocation] = useState("Ridgewood");
  let currentCity;

  // console.log(process.env);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location},US&APPID=`
  )
    .then((res) => res.json())
    .then((data) => (currentCity = data));

  // console.log({ currentCity });

  return (
    <>
      <Header />
      <Search />

      <main className="h-dvh mx-0 max-w-6xl  justify-center place-items-center">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </main>
      <Footer />
    </>
  );
}

export default App;
