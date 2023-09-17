
import Image from 'next/image';

export default function DownloadsPage() {
    return (
        <>

                <div className="text-white flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 p-8 bg-white-100">

                        <Image 
                            src="/images/ubuntu-logo.png"
                            width={50}
                            height={50}
                            alt="ubuntu-logo"
                        />
     
                        <h2 className="text-2xl font-bold mb-4">Linux Download</h2>
                        <p className="mb-4">Download the application for Linux (Ubuntu).</p>
                        <a href="https://drive.google.com/file/d/1uEHoMLCA8pKnud_MSWEN5H_dJV9r0-dl/view" className="bg-white hover:bg-orange-700 hover:text-white text-black font-bold py-2 px-4 rounded">Download</a>
                    </div>

                    <div className="w-full lg:w-1/3 p-8 bg-white-200">
                        <Image
                            src="/images/android-logo.png"
                            width={50}
                            height={50}
                            alt="android-logo"
                         />
                        <h2 className="text-2xl font-bold mb-4">Android Download</h2>
                        <p className="mb-4">Download the application for Android.</p>
                        <a href="https://drive.google.com/file/d/1Tgo7IqllKfk5I726Jl7zF8NF8LZyHTXa/view?usp=sharing" className="bg-white hover:bg-green-700 hover:text-white text-black font-bold py-2 px-4 rounded">Download</a>
                    </div>

                    <div className="w-full lg:w-1/3 p-8 bg-white-300">
                        <Image
                            src="/images/windows-logo.png"
                            height={50}
                            width={50}
                            alt="windows logo"
                         />
                        <h2 className="text-2xl font-bold mb-4">Windows Download</h2>
                        <p className="mb-4">Download the application for Windows.</p>
                        <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded border-2 border-white">Coming Soon</a>
                    </div>
                </div>

        </>
    );
}