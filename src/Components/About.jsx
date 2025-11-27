import React from 'react'

function About() {
  return (
    <>
    {/* bg-[#0f1720] */}
 <section id='about' className="min-h-screen  flex items-center py-20">
<div className="container mx-auto px-6 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
{/* Left: Image */}
<div className="flex justify-center lg:justify-start">
<img
src="https://img.freepik.com/free-photo/businessman-stands-street-solves-cases_496169-2376.jpg?semt=ais_hybrid&w=740&q=80"
alt="Profile"
className="rounded-2xl w-full max-w-md shadow-2xl object-cover"
/>
</div>


{/* Right: Text Content */}
<div>
<h2 className="text-5xl font-extrabold  mb-4">About Me</h2>


<p className="text-lg text-blue-800 mb-6">
A passionate front-end developer dedicated to building intuitive and engaging user
interfaces.
</p>


<p className="text-gray-800 leading-relaxed text-[17px]">
Hello! I'm a front-end developer with a passion for creating clean, modern, and
user-friendly web experiences. My journey into the world of code began with a
fascination for how beautiful design and powerful technology can come together to solve
real-world problems. I specialize in building responsive websites and applications using
the latest web technologies. I thrive on turning complex ideas into simple, elegant
solutions and am always eager to learn and explore new tools and frameworks to enhance my
craft.
</p>


<div className="mt-10">
<a
href="#resume"
className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition inline-block"
>
View My Resume
</a>
</div>
</div>
</div>
</div>
</section>

</>
  )
}

export default About