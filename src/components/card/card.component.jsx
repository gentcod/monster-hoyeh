// import { Component } from "react";
import './card.style.css';

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

const Card = ({monster}) => {
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