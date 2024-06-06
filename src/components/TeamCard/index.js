import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="card-logo" />
        <p className="paragraph">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
