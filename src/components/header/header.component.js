const headerBg = require('../../media/header-bg.jpg');
const profileImg = require('../../media/profile-img.jpg');
const Header = () =>{
	return(
		<header>
			<div className='header'>
				<img src={headerBg} className='header-bg' alt="site-header"></img>
				<p className='header-title'>Justin Cox</p>
			</div>
			
			<nav className='nav'>
				<div className='profile-img-wrapper'>
					<img src={profileImg} alt="profile-img" className='profile-img'></img>
				</div>
				
				<ul>

					<li><a href="/">Home</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/resume">Resume</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;