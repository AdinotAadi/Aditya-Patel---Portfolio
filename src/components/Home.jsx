import React from "react";
import HeroImage from "../assets/heroImage.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I am an aspiring Software Engineer!
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I am a student by day, a coder by night. I aspire to become a
						Software Developer.
					</p>
					<div>
						<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-300 to-blue-500 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 to hover:to-blue-900 duration-200 cursor-pointer hover:font-bold">
							Portfolio
							<span className="group-hover:rotate-90 duration-200">
								<MdKeyboardArrowRight size={20} />
							</span>
						</button>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="My profile"
						className="rounded-2xl mx-auto w-2/3 md:w-8/12"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
