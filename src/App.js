import SwiperMain from './components/SwiperMain'
import Shop from './components/Shop'
import { Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <>
    <div className="App">
      <Route exact path='/' component={SwiperMain}/>
      <Route path='/shop' component={Shop}/>
    </div>
    </>
  )
}

export default App;
