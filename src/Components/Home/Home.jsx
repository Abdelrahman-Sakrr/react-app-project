import React from 'react'
import Navbar from '../Navbar/Navbar'
// import "../../assets/avataaars.svg"

export default function Home() {
  return (
	<>

		<div className='h-screen flex justify-center items-center bg-green'>
				<div className='p-10 my-10'>
					<div className='text-center'>
						<img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-full' alt="" />
						<div className=''>
							<br />
						<h3 className='text-3xl text-white font-bold'>START FRAMEWORK</h3>
						<br />
							<div className='line flex justify-center items-center'>
								<div className='w-20 h-1 bg-white'></div>
								<i class="fa-solid fa-star text-white mx-4"></i>
								<div className='w-20 h-1 bg-white'></div>
								
							</div>
							<br />
						<span className='text-white'>Graphic Artist - Web Designer - Illustrator</span>
					</div>	
					</div>

				</div>
		</div>
	</>
  )
}
