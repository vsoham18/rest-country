import '../app.css'
import { Link } from 'react-router'

export default function Countrycard({ name, flag, population, region, capital,data }) {
  return (
    <Link to={`./${name}`} className="cards" state={data}>
      <img src={flag} alt={name}/>
                <div className="card-text">
                    <h3>{name}</h3>
                    <p><b>Population :</b> {population.toLocaleString('en-IN')} </p>
                    <p><b>Region :</b>{region} </p>
                    <p><b>Capital :</b> {capital} </p>
                </div>
</Link>
  )
}
