import React from "react";
import TEDxXIE from "../assets/portfolio/TEDxXIE.webp";
import ISRGAN from "../assets/portfolio/ISRGAN.webp";
import MRS from "../assets/portfolio/MRS.webp";
import XIEFest from "../assets/portfolio/XIEFest.webp";
import PassMan from "../assets/portfolio/PassMan.webp";
import Glassmorphism from "../assets/portfolio/Glassmorphism.webp";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			name: "TEDxXIE",
			src: TEDxXIE,
			githubLink: "https://github.com/AdinotAadi/tedxxie",
			projectLink: "https://adinotaadi.github.io/tedxxie/",
			technologies: ["HTML", "CSS", "JS"],
		},
		{
			id: 2,
			name: "ISR-GAN",
			src: ISRGAN,
			githubLink: "https://github.com/AdinotAadi/ISR-GAN",
			projectLink: "https://github.com/AdinotAadi/ISR-GAN",
			technologies: [
				"Python",
				"Streamlit",
				"OpenCV",
				"Tensorflow",
				"Scikit-learn",
			],
		},
		{
			id: 3,
			name: "ERS",
			src: MRS,
			githubLink: "https://github.com/AdinotAadi/ERS",
			projectLink: "https://adinotaadi-ers-app-zrm8dy.streamlit.app/",
			technologies: ["Python", "Streamlit", "Numpy", "Pandas", "Scikit-learn"],
		},
		{
			id: 4,
			name: "XIEFest",
			src: XIEFest,
			githubLink: "https://github.com/AdinotAadi/xie-spandan",
			projectLink: "https://adinotaadi.github.io/xie-spandan/",
			technologies: ["HTML", "CSS", "JS"],
		},
		{
			id: 5,
			name: "Py-PassMan",
			src: PassMan,
			githubLink: "https://github.com/AdinotAadi/Py-PassMan",
			projectLink: "https://github.com/AdinotAadi/Py-PassMan",
			technologies: ["Python", "Tkinter", "MySQL"],
		},
		{
			id: 6,
			name: "Glassmorphism Website",
			src: Glassmorphism,
			githubLink: "https://github.com/AdinotAadi/glassmorphism-website",
			projectLink: "https://adinotaadi.github.io/glassmorphism-website/",
			technologies: ["HTML", "CSS"],
		},
	];

	return (
		<div
			name="projects"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Projects
					</p>
					<p className="py-6">Check out some of my projects here:</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(
						({ id, name, src, githubLink, projectLink, technologies }) => (
							<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
								<img
									src={src}
									alt=""
									className="rounded-md hover:scale-110 duration-200"
								/>
								<div className="flex items-center justify-center flex-col">
									<div className="my-4">
										<p className="text-lg font-semibold">{name}</p>
										<p className="text-sm text-gray-500">Technologies Used:</p>
										<ul className="list-disc ml-4">
											{technologies.map((tech, index) => (
												<li key={index} className="text-gray-500">
													{tech}
												</li>
											))}
										</ul>
									</div>
									<div className="flex items-center justify-center">
										{projectLink ? (
											<a
												href={projectLink}
												target="_blank"
												rel="noopener noreferrer"
												className="w-1/2 px-6 py-3 m-4 text-gray-500 hover:scale-110 hover:text-white duration-200"
											>
												View
											</a>
										) : null}
										{githubLink && (
											<a
												href={githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className={`w-1/2 px-6 py-3 m-4 text-gray-500 hover:scale-110 hover:text-white duration-200 ${
													!projectLink ? "mx-auto" : ""
												}`}
											>
												GitHub
											</a>
										)}
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
