"use client";
import Image from 'next/image'
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/downloads');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Store knowledge as snippets
            </h1>
            <p className="mb-8 leading-relaxed">BrainVault is a markdown note-taking application, serving as your dedicated personal knowledge hub. With a primary emphasis on aiding memory retention, it offers a distinctive approach. BrainVault reimagines notes as flashcards rather than mere documents, making it all about storing bite-sized information in a more straightforward manner.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-slate-50 border-0 py-2 px-6 focus:outline-none rounded text" onClick={handleClick}>Download</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text">
                <a href="https://github.com/JohnEsleyer/brainvault">
                Source Code
                </a>
                </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image 
              src="/images/landing_image.png"
              height={720}
              width={600}
              alt="brainvault landing image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
