import './App.css';
import {Routes,Route} from  'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import PopularProperties from './components/popularProperties/PopularProperties'
import FeaturedProperties from './components/featuredProperties/FeaturedProperties'
import Footer from './components/footer/Footer'
import NewsLetter from './components/newsletter/Newsletter'
import Properties from './components/properties/Properties'
import SignUp from './components/signUp/SignUp'
import SignIn from './components/signIn/SignIn'
import PropertyDetail from './components/propertyDetail/PropertyDetail'
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={
          <>
        <Navbar/>
        <Hero/>
        <PopularProperties/>
        <FeaturedProperties/>
        <NewsLetter/>

        <Footer/>
          </>
      }/>
        <Route path='/signup' element={SignUp}/>
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
