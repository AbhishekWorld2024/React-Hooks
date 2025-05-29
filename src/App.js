import React from 'react';
import './App.css';
import SetStateHook from './Components/SetStateHook';
import UseMemo from './Components/UseMemo';
import ParentComponent from './Components/ParentComponent';
import UseContextComponentA from './Components/UseContextComponentA';
import UseRef from './Components/UseRef';


export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
{/*       
      <SetStateHook/> */}
      {/* <UseMemo/> */}
      {/* <ParentComponent/> */}
      {/* <UserContext.Provider value={'Abhi'}>
        <UserContext.Provider channell={'Coding'}>
      <UseContextComponentA/>
      </UserContext.Provider>
      </UserContext.Provider> */}
      <UseRef/>
    </div>
  );
}

export default App;
