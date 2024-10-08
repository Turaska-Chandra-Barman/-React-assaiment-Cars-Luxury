
import HeroSection from './heroSection'
import Selecting from './Selecting'
import Tranding from './Tranding'
import Data from '../DummyJson'
import Explore from './Explore'
import Recent from './Recent'
import Vechiles from './Vechiles'
import Fotter from './Fotter'
import { useState } from 'react'



 function AllComponents() {


    const [getInfo, setInfo] = useState(Data)
  
  return (
    <>
        
      <HeroSection data={getInfo}/>
      <Selecting/>
      <Tranding  data={getInfo}/>
      <Explore data={getInfo}/>
      <Recent data={getInfo}/>
      <Vechiles/>
      <Fotter/>

    </>
  )
}
export default AllComponents