import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl mt-20">
					I build new projects just to tickle my brain and learn new things.
				</p>
				<br />
				<p className="text-xl">
					I started with python and now I can code in 4-5 different languges
					with varying degree of proficiency and I am constantly trying to
					improve and grow as a software developer.
				</p>
			</div>
		</div>
	);
};

export default About;
