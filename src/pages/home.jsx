import Hero from '../components/hero/hero'
import ChooseUs from '../components/chooseUs/chooseUs'
import Banner from '../components/banner/banner'
import BmiCalc from '../components/bmi/bmi'
import Pricing from '../components/Pricing/Pricing'

const Home = () => {
  return (
    <>
        <Hero />
        <ChooseUs />
        <Banner />
        <BmiCalc />
        <Pricing />
    </> 
  )
}

export default Home