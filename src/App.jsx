import React, { useState } from 'react'
import SidePanel from './Components/SidePanel'

const App = () => {
  const [navigation, setNavigation] = useState(0)
  const changeNavigation = (index) => {
    setNavigation(index)
  }
  return (
    <div className='flex'>
      <SidePanel navigation={navigation} changeNavigation={changeNavigation} />
      <div className="flex-6"></div>
    </div>
  )
}

export default App