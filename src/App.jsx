import { useState } from 'react'
import SidePanel from './Components/SidePanel'
import TopPanel from './Components/TopPanel'
import MainContent from './Components/MainContent'

const App = () => {
  const [navigation, setNavigation] = useState(0)
  const changeNavigation = (index) => {
    setNavigation(index)
  }
  return (
    <div className='flex'>
      <SidePanel navigation={navigation} changeNavigation={changeNavigation} />
      <TopPanel />
      <MainContent navigation={navigation} />
    </div>
  )
}

export default App