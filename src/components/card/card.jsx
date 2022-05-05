import './card.css'

const Card = ({monster}) => {
  const { name, email } = monster;
  return (
    <div className="card-container"> 
      <img src={`https://avatars.dicebear.com/api/personas/${name}.svg`} alt={`monster ${name}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card