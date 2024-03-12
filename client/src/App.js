import './App.css';
import {Routes,Route} from  'react-router-dom'
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={
          <>
        <Navbar/>
        <Hero/>
        <PopularProperties/>
        <FeaturesProperties/>
        <NewsLetter/>

        <Footer/>
          </>
      }/>
        <Route path='/signup' element={Signup}/>
        <Route path='/signin' element={SignIn}/>
        <Route path='/properties' element={
          <>
          <Navbar/>
          <Properties/>
          <Footer/>
          </>
        }/>
        <Route path='/propertyDetail/:id' element={
          <>
          <Navbar/>
          <PropertyDetail/>
          <Footer/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
