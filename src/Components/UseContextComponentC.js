import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'



function UseContextComponentC() {
    const value=useContext(UserContext)
    const channell=useContext(ChannelContext)
  return (
    <div>
      <UserContext.Consumer>
        {value} - {channell}
      </UserContext.Consumer>
    </div>
  )
}

export default UseContextComponentC
