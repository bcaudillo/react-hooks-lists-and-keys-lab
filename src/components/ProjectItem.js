import React from "react";

function ProjectItem({ name, about, technologies }) {
// console.log(name)
// console.log(about)
// console.log(technologies)
// name = name.map(item=>item.name)
return (
  <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((item, index) => <span key ={index}>{item}</span>)}
      

      </div>
    </div>
  );
}

export default ProjectItem;
