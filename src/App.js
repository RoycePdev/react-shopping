import { useState, useRef } from 'react'
import './App.css'
import { ItemList } from './Components/ItemList'

function App() {
  const [item, setItem] = useState([])
  const itemInputRef = useRef()

  function addItem(e) {
    const itemName = itemInputRef.current.value
    if (itemName === '') return
    
    setItem(prevItems => {
      return [...prevItems, itemName]
    })
    itemInputRef.current.value = null
  }

  return (
    <div className='App'>
      <div className='input-container'>
        <input type='text' ref={itemInputRef} />
        <button onClick={addItem}> Add </button>
      </div>
      <div className='items-container'>
        <ItemList itemList={item} />
      </div>
    </div>
  )
}

export default App
