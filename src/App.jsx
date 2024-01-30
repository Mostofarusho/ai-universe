import React from 'react';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';

const App = () => {
  
  return (
    <>
      <Header />
      <Button>
        Sort By Date
      </Button>
      <Card/>
    </>
  );
};

export default App;