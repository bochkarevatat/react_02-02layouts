import { useState } from 'react';
import './Store.css';
// import { products } from '../components/products';
import IconSwitch from '../components/Iconswitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

function Store({products}) {

  const [state, setCount] = useState('view_list');

  function changeView() {
    if (state === 'view_module') {
      return setCount('view_list');
    } else {
      return setCount('view_module');
    }
  }

  return (
    <div>
      <IconSwitch icon={state} onSwitch={() => changeView()}/>
      {state === 'view_module' ? <CardsView cards={products}/> : <ListView items={products}/>}
    </div>
  );
}

  
export default Store;