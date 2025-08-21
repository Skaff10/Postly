const About = () => (
  <section className="flex flex-col justify-between items-center p-8 bg-gray-900  shadow-lg border border-gray-700">
    <div className="flex flex-col items-center -mt-1">
      {/* Title */}
      <h2 className="text-4xl font-serif font-bold mb-6 text-amber-300 text-center">
        About This Blog
      </h2>

      {/* Intro paragraph */}
      <p className="mb-5 text-md text-gray-300 text-center max-w-4xl leading-relaxed">
        Welcome to our React-powered blog! Here, you'll find posts about coding,
        daily thoughts, and the occasional pizza debate. Built with{" "}
        <span className="font-semibold text-amber-300">React</span>,{" "}
        <span className="font-semibold text-amber-300">React Router</span>, and
        styled using{" "}
        <span className="font-semibold text-amber-300">Tailwind CSS</span>, this
        project is a playground for learning and sharing.
      </p>

      {/* Feature & Tech Stack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full max-w-4xl">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-amber-200">
            Features
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
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

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-amber-200">
            Tech Stack
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>React 18+</li>
            <li>React Router v6</li>
            <li>Tailwind CSS</li>
            <li>Date-fns for date formatting</li>
            <li>VS Code for development</li>
          </ul>
        </div>
      </div>

      {/* Outro */}
      <div className="text-gray-300 text-center max-w-2xl leading-relaxed">
        <p className="mb-3">
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

    {/* Signature */}
    <div className="mt-5 text-gray-400 text-lg font-medium text-center">
      Made with ☕, 💻, and a lot of curiosity.
      <br />
      <span className="text-amber-300 font-semibold">Made by Albab</span>
    </div>
  </section>
);

export default About;
