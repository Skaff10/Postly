const About = () => (
  <section className="flex flex-col justify-between items-center h-full mx-auto p-6 bg-white shadow-md rounded-md  ">
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        About This Blog
      </h2>
      <p className="mb-6 text-lg text-gray-700 text-center max-w-2xl">
        Welcome to our React-powered blog! Here, you’ll find posts about coding,
        daily thoughts, and the occasional pizza debate. Built with{" "}
        <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">React Router</span>, and styled using{" "}
        <span className="font-semibold">Tailwind CSS</span>, this project is a
        playground for learning and sharing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-3xl">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Features</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Browse posts, search by keywords, and add your own thoughts.
            </li>
            <li>Delete posts you no longer want to keep.</li>
            <li>
              Clean, responsive layout with a fixed footer and scrollable
              content area.
            </li>
            <li>Instant navigation between pages using React Router.</li>
            <li>Modern UI with Tailwind CSS for fast styling.</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Tech Stack
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>React 18+</li>
            <li>React Router v6</li>
            <li>Tailwind CSS</li>
            <li>Date-fns for date formatting</li>
            <li>VS Code for development</li>
          </ul>
        </div>
      </div>
      <div className=" text-gray-700 text-center max-w-2xl">
        <p className="mb-2">
          Whether you're here to read, write, or just explore, we hope you enjoy
          the experience. This blog is designed to be simple, fast, and fun to
          use.
        </p>
        <p>
          Feel free to add your own posts, search for interesting topics, or
          just scroll through our latest updates!
        </p>
      </div>
    </div>

    <div className="text-gray-600 text-lg font-semibold text-center">
      Made with ☕, 💻, and a lot of curiosity.
      <br />
      <span className="text-blue-600">Made by Albab</span>
    </div>
  </section>
);

export default About;
