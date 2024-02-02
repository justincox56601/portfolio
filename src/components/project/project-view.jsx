import { ProjectSummary } from "./project-summary.component";


export const ProjectView = () =>{
	const data = [
		{
			title: "Portfolio site hosted on Google Cloud (Firebase)",
			description: "This project was not only an opportunity to create a protfolio page hosted on Google's Firebase platform.  But also a challenge to create a functioning multi page react application in a single morning. To accomplish this I needed to leverage several years of experience with design patterns and solid fundamentals.",
			languages: "HTML, CSS, React.Js, Javascript, Firebase, NoSQL",
			codeLink:'https://github.com/justincox56601/portfolio',
		},
		{
			title: "CS3270 Advanced Web Develpment Course Page",
			description: "This project is the course home page for a class I teach at Bemidji State University.  This site is developed with the knowledge that the students will be able to use its code base as a model for their own projects.  As the class continues through the semster, the site gets refactored and new principles are introduced.  Such as proper file structure, using the MVC design pattern, using OOP principles. The live site can be found <a href='https://cs.bemidjistate.edu/jcox/cs3270' target='blank'>here</a>",
			languages: "PHP, HTML, CSS, JavaScript, MySQL",
			codeLink:'https://github.com/justincox56601/cs3270',
		},
		{
			title: "Gidakiim Weather Collection Project",
			description: "This project is for a local college to aid in the collection and visualization of their weather research project. This site, hosted on an AWS EC2 instance, uses a simple graph interface to display several years worth of local weath data including preciptation, wind, humidity, etc...  The data for this is collected from several APIs as well as local weather collection devices called HOBOs. The live site can be found <a href='http://18.117.168.211/' target='blank'>here</a>",
			languages: "HTML, CSS, React.Js, Javascript, AWS, MySQL",
			codeLink:'https://github.com/justincox56601/gidakiim',
		},
		{
			title: "BOIDS - Flocking Behavior",
			description: "As part of the web development class I teach, I also create small side projects to teach students about using javascript to create on screen effects.  This is not a part of the course cirriculum and not taught in other courses, so I create small examples for them to take inspriation from.  The Boids project is an attempt at recreating the flocking / steering behaviors as described by Craid Reynolds. A live demo of this can be found <a href='https://cs.bemidjistate.edu/jcox/cs3270/effects/boids.php' target='blank'>here</a>",
			languages: "HTML, CSS, Javascript",
			codeLink:'https://github.com/justincox56601/gidakiim',
		},
		{
			title: "Constellation Effect",
			description: "As part of the web development class I teach, I also create small side projects to teach students about using javascript to create on screen effects.  This is not a part of the course cirriculum and not taught in other courses, so I create small examples for them to take inspriation from. The constellation effect is a simple yet mexmorizing particle effect. The partciles siimple meander around at a random velocity and when they are close enough to other particles a line forms between the pair. A live demo of this effect can be found in the header of my CS3270 course page <a href='https://cs.bemidjistate.edu/jcox/cs3270/' target='blank'>here</a>",
			languages: "HTML, CSS, Javascript",
			codeLink:'https://github.com/justincox56601/constellation-effect',
		},
		{
			title: "Tech Portal For a Local Organization",
			description: "This project is currently put on hold, but a local business had contacted me because they didn't have a centralized system for requesting days off and other resources.  As well as a place to send their technical support issues.  This project will rectify that problem.  It creates a central calendar for employees to request resources and days off, and allows for the employer to see all of it visually so they can coordinate it all.",
			languages: "HTML, CSS, React.Js, Typescript, AWS, MySQL",
			codeLink:'https://github.com/justincox56601/voyageurs',
		}
	];
	return(
		<div className="container-project-list">
			<p style={{marginBottom: '2rem'}}>
				Below are a few of my more recent projects.  They are listed in no particular order, but each one I found fun, interesting, and solved a particular problem for someone.
			</p>
			<div className="project-summary-list">
				{
					data.map((el, index)=>{
						return <ProjectSummary key={index} data={el}/>
					})
				}
				
			</div>
			<p>You can see all of my projects on <a href='https://github.com/justincox56601' target="blank" rel="noopener noreferrer">my Github</a>.</p>
		</div>
		
		
	)
}