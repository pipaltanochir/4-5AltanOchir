import React from "react";

const Dasgal1 = () => {
  return (
    <div className="min-h-screen font-serif text-gray-900 bg-white">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Speaking Events
          </a>
        </div>
        <div className="text-lg font-semibold">Hazel</div>
        <button className="border px-3 py-1 rounded hover:bg-gray-100 text-sm">
          Contact Me
        </button>
      </header>

      <main>
        <section className="bg-rose-300 text-white px-8 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl leading-tight font-light">
              I’m a <span className="italic font-semibold">Scientist</span> and{" "}
              <span className="italic font-semibold">Speaker</span> who is
              <br /> interested in the psychology of greed.
            </h1>

            <div className="mt-12 grid grid-row-1 md:grid-row-2 gap-12">
              <div className="flex items-start justify-between ">
                <h2 className="font-semibold mb-2">My Mission</h2>
                <p className="text-sm leading-relaxed max-w-md">
                  This is my mission. Maecenas a varius odio egestas auctor.
                  Praesent facilisis, ex a gravida ultricies, quam sed magna
                  placerat eros, et vehicula lectus ligula id dui. Aliquam ut
                  cursus velit ut eros lorem ipsum ullamcorper iaculis.
                </p>
              </div>

              <div className="flex items-start justify-between">
                <h2 className="font-semibold mb-2">Specialties</h2>
                <div className="grid grid-cols-2 gap-10 text-sm">
                  <ul className="space-y-1">
                    <li>Public Speaking</li>
                    <li>Strategic Planning</li>
                    <li>Writing & Editing</li>
                    <li>Front-End Dev</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>Data Analysis</li>
                    <li>User Interviews</li>
                    <li>Analytics & Data</li>
                    <li>Programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start font-semibold">Tech Blog</div>
            <div className="space-y-8">
              <article>
                <h3 className="font-semibold">This Is Your Brain On Helium</h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec...
                </p>
                <div className="text-gray-500 text-xs mt-2">July 12, 2025</div>
              </article>

              <article>
                <h3 className="font-semibold">In Search Of Intelligence</h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec...
                </p>
                <div className="text-gray-500 text-xs mt-2">June 9, 2025</div>
              </article>

              <article>
                <h3 className="font-semibold">
                  Should Public Transit Be Free?
                </h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec...
                </p>
                <div className="text-gray-500 text-xs mt-2">March 3, 2025</div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-8 py-16 bg-orange-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start font-semibold">
              Speaking events
            </div>

            <div className="space-y-8 text-sm">
              <div>
                <h4 className="font-semibold">NY Economics Forum</h4>
                <p className="text-gray-600 text-xs">New York, NY</p>
                <div className="text-gray-500 text-xs">
                  August 17th, 2025 7:00pm
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Emerging Tech Meet-Up</h4>
                <p className="text-gray-600 text-xs">San Francisco, CA</p>
                <div className="text-gray-500 text-xs">
                  August 22nd, 2025 7:00pm
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Creative Code Meetup</h4>
                <p className="text-gray-600 text-xs">Denver, CO</p>
                <div className="text-gray-500 text-xs">
                  August 28th, 2025 7:00pm
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className=" bg-black py-10 text-center text-gray-600 text-sm">
        <div className="flex justify-center gap-4 mb-4">
          <span aria-hidden>🐦</span>
          <span aria-hidden>📸</span>
          <span aria-hidden>💼</span>
        </div>
        <div>Made With ❤️</div>
      </footer>
    </div>
  );
};

export default Dasgal1;
