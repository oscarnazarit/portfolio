import { Link } from 'react-router-dom'

import '../styles/navbar.css'
function Navbar() {
	return (
		<div>
			<ul>
				<li>
					<Link to ="/" className='nav-link'>
						Home
					</Link>
				</li>
				<li>
					<Link to ='/about' className='nav-link'>
						About
					</Link>
				</li>
				<li>
					<Link to ='/work' className='nav-link'>
						Work
					</Link>
				</li>
				<li>
					<Link to = '/contact' className='nav-link'>
						Contact
					</Link>
				</li>
			</ul>
		</div>)
}

export default Navbar;