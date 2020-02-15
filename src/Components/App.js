


import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';
import { connect } from 'react-redux';


import React from 'react';

// export class App extends Component {
//   render() {
//     return (

  
//     );
//   }
// }
function App (props){
  return(


    <div>
  
    <Header></Header>
    <main id="mainContainer">
      <div className="container">
        {/* Products */}
        <Products></Products>


        {/* Cart */}

      { props.Cart.length > 0 ? <Cart></Cart>:""}
      </div>
    </main>
    <Footer></Footer>
  </div>

  )
}
// export default App;

// class App extends Component {
//   render(
//     return (
      
//     );
//   )
  
// }
const mapStateToProps = (state)=>{
  return {
    Cart:state.Cart
  }
}
export default connect(mapStateToProps, null)(App);
