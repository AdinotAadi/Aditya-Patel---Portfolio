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
			src: TEDxXIE,
		},
		{
			id: 2,
			src: ISRGAN,
		},
		{
			id: 3,
			src: MRS,
		},
		{
			id: 4,
			src: XIEFest,
		},
		{
			id: 5,
			src: PassMan,
		},
		{
			id: 6,
			src: Glassmorphism,
		},
	];

	return (
		<div
			name="projects"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Projects
					</p>
					<p className="py-6">Check out some of my projects here:</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src }) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
							<img
								src={src}
								alt=""
								className="rounded-md hover:scale-110 duration-200"
							/>
							<div className="flex items-center justify-center">
								<button className="w-1/2 px-6 py-3 m-4 text-gray-500 hover:scale-110 hover:text-white duration-200">
									View
								</button>
								<button className="w-1/2 px-6 py-3 m-4 text-gray-500 hover:scale-110 hover:text-white duration-200">
									GitHub
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
