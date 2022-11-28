// import { Component } from "react";
import { Monster } from '../../App';
import './card.style.css';

type CardProps = {
   monster: Monster;
}

const Card = ({monster}: CardProps) => {
   const {name, username, email, id} = monster;
   return (
      <div className="monster-card">
         <img alt={`monster ${username}`} src={`https://robohash.org/${id}?set=set2&size=250x250`}/>
         <h1>{name}</h1>
         <p>{email}</p>
      </div>
      
   )
}

export default Card;

// class Card extends Component {
//    render () {
//       const {name, username, email, id} = this.props.monster;
//       return (
//          <div className="monster-card">
//             <img alt={`monster ${username}`} src={`https://robohash.org/${id}?set=set2&size=250x250`}/>
//             <h1>{name}</h1>
//             <p>{email}</p>
//          </div>
         
//       )
//    }
// }