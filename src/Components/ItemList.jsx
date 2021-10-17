import React from 'react'
import { Item } from './Item'

export const ItemList = ({ itemList }) => {

  return (
    <div className="row">
      { itemList.map(item => {
        return <Item item = {item} />
      }) }

  </div>
  )
}
