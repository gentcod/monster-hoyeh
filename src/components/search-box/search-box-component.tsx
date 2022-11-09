// import { Component } from "react";
// import { ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';

import './search-box.style.css'

type SearchBoxProps = {
   className: string;
   placeholder?: string;
   // onChangeHandler: (e: string) => void;
   // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
   onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

//Functional Component
const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => 
   <input 
      className={`search-box ${className}`} 
      type='search' 
      placeholder={placeholder} 
      onChange={onChangeHandler}
      // onChange={(e) => onChangeHandler(e)} 
   />

export default SearchBox;

//OOP Component - Class Component
// class SearchBox extends Component {

//    render() {
//       const {className, placeholder, onChangeHandler} = this.props //Destructure properties

//       return (
//          <input 
//             className={`search-box ${className}`} 
//             type='search' 
//             placeholder={placeholder} 
//             onChange={onChangeHandler} 
//          />
//       )
//    }
// }