import { ProjectList } from "../project/project-list.component"

const Home = () =>{
	return(
		<div>
			<div className="container-home">
				<h2>Hello, I'm Justin, a software engineer based in northern Minnesota.</h2>
				<p>
					I am a full stack software engineer with four years of experience ranging from small one time projects, to large multi million dollar ERP systems.  I have a passion for creating software that enriches peoples lives and solving the puzzles that come along with it.
				</p>
				<div className="home-button-container">
					<a href='https://www.linkedin.com/in/justin-cox-swe' className="button" target="blank" rel="noopener noreferrer">View LinkedIn</a>
					<a href='https://github.com/justincox56601' className="button" target="blank" rel="noopener noreferrer">View Github</a>
				</div>
				
			</div>
		<ProjectList/>
		</div>
		
	)
}

export default Home