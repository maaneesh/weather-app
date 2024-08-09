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
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Location" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
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

      <div className="footer  bg-sky-500  flex-1 text-white  hover:text-red-500 px-2 py-2 text-4xl font-bold">
        <h2>About</h2>
        <h2>Careers</h2>
      </div>
    </>
  );
}

export default App;
