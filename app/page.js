// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <div className="border-2 p-7 w-5xl m-auto text-center">
//       <h1 className="font-bold text-4xl">Get Me a Chai</h1>       
   

//       <Image
//       src="/cup2.svg"
//       alt="External descriptive text"
//       width={80}
//       height={50}
//       />

//       <p>No matter what is happening in life, you always offer tea</p>
//       <p>Where there is tea, there is hope, healing, and harmony</p>
//       <button>Start Here</button>
//     </div>
//     </>
//   );
// }
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-[40vh] bg-[#fffaf0] flex items-center justify-center py-12">
        <div className="border-2 border-amber-200 bg-white rounded-3xl p-10 md:p-16 max-w-3xl mx-auto text-center shadow-xl">
          
          {/* Logo / Cup Image */}
          <div className="flex justify-center items-center">
             <h1 className="font-bold text-5xl md:text-6xl text-amber-950 tracking-tight">
            Get Me a Chai
          </h1>
            <Image
              src="/cup2.svg"
              alt="Chai Cup"
              width={140}
              height={140}
              className="drop-shadow-lg animate-float-slow" 
            />
          </div>

          {/* Heading */}
         

          {/* Taglines */}
          <div className="space-y-3 mb-10 text-lg text-gray-700 max-w-lg mx-auto">
            <p>No matter what is happening in life, you always offer tea.</p>
            <p className="italic text-amber-700">
              Where there is tea, there is hope, healing, and harmony.
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xl px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-300">
            Start Here
          </button>

        </div>
      </div>



      <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-bold text-4xl text-amber-950 mb-4">
          Your Fans can buy you a Chai
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Let your supporters show love by treating you to a warm cup of chai
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-amber-300 border border-amber-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow">
              👨‍💻
            </div>
            <h3 className="font-semibold text-xl text-amber-900 mb-2">Fans want to help</h3>
            <p className="text-gray-600">
              Your fans are available for you to help you
            </p>
          </div>

          {/* Card 2 - Main Highlight */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scale-105">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-4xl">
              ☕
            </div>
            <h3 className="font-semibold text-2xl mb-2">Buy Me a Chai</h3>
            <p className="opacity-90 mb-6">
              Support your favorite creator with a warm cup of chai
            </p>
            <button className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-full hover:bg-amber-100 transition">
              Send Chai Rs.99
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-amber-300 border border-amber-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow">
              👥
            </div>
            <h3 className="font-semibold text-xl text-amber-900 mb-2">Fans want to help</h3>
            <p className="text-gray-600">
              Your fans are available for you to help you
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}