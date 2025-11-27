import React from 'react'

function MySkills() {

    const skills = [
{ name: "JavaScript", icon: "" },
{ name: "TypeScript", icon: "" },
{ name: "React", icon: "" },
{ name: "Next.js", icon: "" },
{ name: "Tailwind CSS", icon: "" },
{ name: "HTML5", icon: "" },
{ name: "CSS3", icon: "" },
{ name: "Figma", icon: "" },
{ name: "Git", icon: "" },
{ name: "Node.js", icon: "" },
];
  return (
    <>
    {/* bg-[#0f1720]     */}
    <section className=" py-24">
<h2 className="text-5xl font-extrabold  text-center mb-16">
My Tech Stack
</h2>


<div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
{skills.map((skill, index) => (
<div
key={index}
className=" rounded-2xl py-10 flex flex-col items-center shadow-xl hover:scale-105 transition duration-300"
>
<img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-4" />
<p className=" text-lg font-medium">{skill.name}</p>
</div>
))}
</div>
</section>
    </>
  )
}

export default MySkills