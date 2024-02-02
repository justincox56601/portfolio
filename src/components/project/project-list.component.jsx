import { ProjectSummary } from "./project-summary.component"

export const ProjectList = () =>{
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
		}
	];
	return(
		<div className="container-project-list">
			<h2>Selected Projects</h2>
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