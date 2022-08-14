// import { Component } from "react";
import Card from "../card/card.component.jsx";
import './card-list.style.css'


// class CardList extends Component {

//    render() {
//       // console.log(this.props)
//       const { monsters, className } = this.props;
      
//       return (
//          <div className={className}>
//             {monsters.map((monster) => {
//                return (
//                   <Card monster={monster} key={monster.id}/>
//                )
//             })};
//          </div>
//       );
//    }
// 

//Functional Component
const CardList = ({monsters, className}) => {
   return (
      <div className={className}>
         {monsters.map((monster) => {
            return (
               <Card monster={monster} key={monster.id}/>
            )
         })};
      </div>
   )
}

export default CardList;