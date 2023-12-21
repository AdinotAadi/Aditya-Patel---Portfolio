import React from "react";
import C from "../assets/c.png";
import CPP from "../assets/cpp.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import MySQL from "../assets/mysql.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Linux from "../assets/linux.webp";

const Skills = () => {
	const stack = [
		{
			id: 1,
			src: C,
			title: "C",
			style: "shadow-blue-800",
		},
		{
			id: 2,
			src: CPP,
			title: "C++",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: Python,
			title: "Python",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: Java,
			title: "Java",
			style: "shadow-red-500",
		},
		{
			id: 5,
			src: HTML,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 6,
			src: CSS,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 7,
			src: JS,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},
		{
			id: 8,
			src: ReactJS,
			title: "React JS",
			style: "shadow-blue-600",
		},
		{
			id: 9,
			src: MySQL,
			title: "MySQL",
			style: "shadow-orange-400",
		},
		{
			id: 10,
			src: GitHub,
			title: "GitHub",
			style: "shadow-gray-400",
		},
		{
			id: 11,
			src: Tailwind,
			title: "Tailwind CSS",
			style: "shadow-sky-400",
		},
		{
			id: 12,
			src: Linux,
			title: "Linux",
			style: "shadow-gray-400",
		},
	];

	return (
		<div
			name="skills"
			className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Skills
					</p>
					<p className="py-6">There are the technologies I've worked with:</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
					{stack.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
