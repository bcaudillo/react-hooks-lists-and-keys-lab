import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // let name = projects.map(item => item.name)
  // let about = projects.map(item => item.about)
  // let technologies = projects.map(item=>item.technologies)
  // let itTechnologies = technologies.map(item => item)
  // console.log(itTechnologies[0][0])
  //projects.forEach(item =>console.log((item.technologies).forEach(item =>console.log(item))))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map(item => <ProjectItem key ={item.id} name = {item.name} about ={item.about} technologies ={item.technologies}/>)}</div>
      {/* name = {name[0]} about = {about[0]} technologies = {itTechnologies[0]}
      name = {name[1]} about = {about[1]} technologies = {itTechnologies[1]}
      name = {name[2]} about = {about[2]} technologies = {itTechnologies[2]} */}

    </div>
  ); 
}

export default ProjectList;
 