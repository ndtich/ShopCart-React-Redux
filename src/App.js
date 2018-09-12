import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MessageConTainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>

        {/* Header */}
        <Header />

        <main id="mainContainer">
            <div className="container">

                {/* Products */}
                <ProductsContainer />

                {/* Message */}
                <MessageConTainer />

                {/* Cart */}
                <CartContainer />

            </div>
        </main>
        
        {/* Footer */}
        <Footer />

      </div>
    );
  }
}

export default App;
