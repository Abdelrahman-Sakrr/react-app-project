import React from 'react'

export default function Footer() {
  return (<>
				<footer className='bg-grey w-full'>
					<div className='row justify-evenly items-center '>
						<div className='md:w-1/4 my-4'>
							<div className='text-center text-white p-10'>
								<h3 className='text-3xl font-bold my-2'>Location</h3>
								<p className='my-2'>2215 John Daniel Drive</p>
								<p>Clark, MO 65243</p>
							</div>
						</div>

						<div className='md:w-1/4 my-4'>
							<div className='text-white'>
								<h3 className='text-3xl font-bold my-2'>AROUND THE WEB</h3>
								<div className='w-full text-center my-2 '>
									<i className="fa-brands fa-facebook text-2xl px-2 rounded-full border p-2"></i>
									<i className="fa-brands fa-facebook-messenger mx-2 text-2xl px-2 rounded-full border p-2"></i>
									<i className="fa-brands fa-linkedin text-2xl px-2 rounded-full border p-2"></i>
									<i className="fa-brands fa-youtube text-2xl px-2 mx-2 rounded-full border p-2"></i>
								</div>
							</div>
						</div>

						<div className='md:w-1/4 my-4'>
							<div className='text-white text-center'>
								<h3 className='text-3xl font-bold my-2'>ABOUT FREELANCER</h3>
								<p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
							</div>
						</div>
					</div>
					<div className='w-full bg-copyRight text-white text-center'> <p>Copyright © Your Website 2024</p></div>
				</footer>

					{/* icons */}
					{/*  */}

		</>
  )
}
