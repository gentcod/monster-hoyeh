// import { Component } from "react";
import Card from "../card/card.component.jsx";
import './card-list.style.css'

import {CardListContainer} from './card-list-styles';

//Functional Component
const CardList = ({monsters, className}) => {
   return (
      <CardListContainer>
         {monsters.map((monster) => {
            return (
               <Card monster={monster} key={monster.id}/>
            )
         })};
      </CardListContainer>
   )
}

export default CardList;

//OOP Component - Class Component
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