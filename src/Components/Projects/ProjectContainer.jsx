
import React from 'react'
import '../../Global.css'
import './ProjectContainer.css'
import Pill from '../Pill/Pill'

function ProjectContainer({ project }) {
  console.log("DATA PROJECT:", project)
  const imageUrl = `/${project.image.replace(/^\/+/, '')}`
   

  return (
    <div className="project-container">
      <div className="project-image">
        <img
          src={imageUrl}
          alt={project.title}
          onError={() => {
            console.error('Gambar gagal dimuat:', imageUrl)
          }}
        />
      </div>

      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="technologies">
          {project.technologies.map((technology, index) => (
            <Pill
              key={`${technology}-${index}`}
              content={technology}
            />
          ))}
        </div>

        {project.link && (
          <a
            className="p-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
