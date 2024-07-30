import React from 'react'

export default function Contact() {
  return (

	<>

			<div className='container h-screen'>
			<div className='row justify-center mt-40'>
				<div className='w-1/2 p-5'>
					<h2 className='text-5xl font-bold'>CONTACT SECTION</h2>
					<div className='line flex justify-center items-center text-dark w-full'>
								<div className='w-20 h-1 bg-grey'></div>
								<i className="fa-solid fa-star text-dark mx-4"></i>
								<div className='w-20 h-1 bg-grey'></div>	
					</div>
				</div>

				<div className='w-full text-center flex flex-col justify-center items-center'>
					<input type="text" placeholder='UserName' className='p-2 rounded-full my-5 w-1/3' />
					<input type="number" placeholder='UserAge' className='p-2 rounded-full my-5 w-1/3' />
					<input type="email" placeholder='UserEmail' className='p-2 rounded-full my-5 w-1/3' />
					<input type="password" placeholder='UserPass' className='p-2 rounded-full my-5 w-1/3' />
					<button className='btn text-black hover:bg-[var(--bg-grey)] hover:text-white transition-all duration-500 '>Submit Message</button>
				</div>
		</div>
			</div>
	</>
  )
}
