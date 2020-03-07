import React from 'react'

const ProjectDetails = ( props ) => {
  const id = props.match.params.id
  return (
    <div className = "container section project-details">
      <div className = "card z-depth-0">
        <div className = "card-content">
          <span className = "card-title">Название проекта- { id }</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nemo, debitis blanditiis illo dolor quae, illum hic fuga, nesciunt quia soluta unde quis provident obcaecati repellat, sequi veritatis. Eos, quidem!</p>
        </div>
        <div className = "card-action grey lighten-4 grey-text">
          <div>Сообщение от</div>
          <div>6 марта, 15:25</div>
        </div>
      </div>
    </div>
  )
}
export default ProjectDetails