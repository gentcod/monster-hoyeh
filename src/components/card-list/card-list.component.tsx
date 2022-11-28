// import { Component } from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";
// import './card-list.style.css'

import {CardListContainer} from './card-list.styles';

type CardListProps = {
   monsters: Monster[];
}

//Functional Component
const CardList = ({monsters}: CardListProps) => {
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