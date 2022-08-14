// import { Component } from "react";
import './search-box.style.css'

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


//Functional Component
const SearchBox = ({className, placeholder, onChangeHandler}) => 
   <input 
      className={`search-box ${className}`} 
      type='search' 
      placeholder={placeholder} 
      onChange={onChangeHandler} 
   />

export default SearchBox;