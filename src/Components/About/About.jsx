import React from 'react'

export default function About() {
  return (
	<>
	<div className='container h-screen text-center'>
		<div className='h-screen text-center flex justify-center items-center flex-col bg-green py-5'>
				
					<h2 className='text-white text-3xl lg:text-5xl font-bold my-3'>ABOUT COMPONENT</h2>
					{/* icon */}
					<div className='line flex justify-center items-center'>
								<div className='w-20 h-1 bg-white'></div>
								<i class="fa-solid fa-star text-white mx-4"></i>
								<div className='w-20 h-1 bg-white'></div>	
					</div>

				

				<div className='row justify-center gap-4'>
					<div className='md:w-1/3'>
					<div>
						<p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
					</div>
				</div>
				<div className='md:w-1/3'>
					<div>
						<p className='text-white'>
						Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
						</p>
					</div>
				</div>
					</div>
			</div>


		</div>
	</>
  )
}
