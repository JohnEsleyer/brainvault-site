import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Optimize your learning journey
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">Complex hierarchies in knowledge systems can impede the learning process by diverting attention and creating navigational challenges. With BrainVault's streamlined organization of knowledge, it avoids the pitfalls of complex hierarchies, maximizing your knowledge retention.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-slate-50 border-0 py-2 px-6 focus:outline-none rounded text">Download</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text">Source Code</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          </div>
        </div>
      </section>
    </main>
  );
}
