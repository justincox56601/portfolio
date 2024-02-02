
export const LinkClass = ({href, title, target}) =>{
	return(
		<a href={href} className="button" target={target} rel="noopener noreferrer">{title}</a>
	)
}