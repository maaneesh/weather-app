import { useState } from "react";

// font: Montserrat

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar flex-1 bg-sky-500  text-white  hover:text-red-500 px-2 py-2 text-4xl font-bold">
        <div className="px-1">
          <h1>Hello</h1>
        </div>
        <div className="px-1">
          <h1 className="nav flex al">Search</h1>
        </div>
      </div>
      <main className="h-dvh">
        <article className="p-4">
          <h1 className="p-4">The title of my article</h1>
          <section className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            vitae, saepe reiciendis dignissimos accusantium facere? Magnam
            molestias rerum aspernatur sapiente ab aut, ipsa reiciendis,
            voluptate excepturi laudantium voluptatum velit consequuntur!
          </section>
        </article>
      </main>
      <aside></aside>

      <div className="footer  bg-sky-500  text-white  hover:text-red-500 px-2 py-2 text-4xl font-bold">
        <div>
          <h2>About</h2>
        </div>
        <div>
          <h2>Careers</h2>
        </div>
      </div>
    </>
  );
}

export default App;
