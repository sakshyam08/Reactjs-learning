import React from 'react'

const App = () => {

  
  function input(elem){
    console.log(elem.target.value)
  }
  
  return (
    <div>
     <input  onChange={function(elem){
      input(elem)
     }}
     type="text" placeholder='Enter Name' />
      
    </div>
  )
}

export default App
