import { Route,  Routes} from "react-router-dom";
import Header from "./components/header/header.component";
import Home from './components/home/home.component';
import { ProjectList } from "./components/project/project-list.component";
import { ProjectView } from "./components/project/project-view";
import { Resume } from "./components/resume/resume.component";



const App = () =>{
	return(
		<div>
			<Header/>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/projects" element={<ProjectView/>}/>
					<Route path="/resume" element={<Resume/>}/>
				</Routes>
			</div>
			
		</div>
		
	)
}

export default App;