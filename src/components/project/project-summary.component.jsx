import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import parse from 'html-react-parser';


export const ProjectSummary = ({data}) =>{
	
	return(
		<article className="project-summary-container">
			<div className="project-summary-info>">
				<h3 className="project-summary-title">{data.title}</h3>
				<p className="project-summary-description">{parse(data.description)}</p>
				<div className="project-summary-meta">
					<p className="project-summary-language"><FontAwesomeIcon icon={faCode} /> {data.languages}</p>
					<p className="project-summary-code"><FontAwesomeIcon icon={faCodeBranch} /> <a href={data.codeLink} className="project-summary-link" target="blank" rel="noopener noreferrer">{data.title}</a></p>
				</div>
			</div>
		</article>
	)
}