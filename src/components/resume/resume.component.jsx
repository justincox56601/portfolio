
export const Resume = () =>{
	const pdf = require('../../media/resume.pdf')
	return(
		<embed
		style={{width: '100%'}}
			src={pdf} 
			type="application/pdf"
			frameBorder="0"
			height="1000px"
			width="1000px"
		/>
	)
}