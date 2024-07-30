import React from 'react'
import { NavLink ,Link } from 'react-router-dom'

export default function Navbar() {
  return (
		<>
		<nav className='p-3 z-10 w-screen bg-grey text-white fixed top-0 right-0 left-0 mb-5'>
			<div className='row items-center justify-between mx-12 text-center'>
				<div className='mx-2 text-3xl p-3 font-bold'>
					<Link to="">START FRAMEWORK</Link>
				</div>
				<div className=''>
					<ul className='flex text-lg mx-2 font-semibold'>
						<li className='me-5'>
							<NavLink to="about">
								About
							</NavLink>
						</li>
						
						<li className='me-5'>
							<NavLink to="portfolio">
								Portfolio
							</NavLink>
						</li>

						<li>
							<NavLink to="contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		</>
  )
}
