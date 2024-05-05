import React from 'react'
import {MultiStateButton} from './multi-state-button'

const statesClassOrange = {
  visible: 'bg-orange-500',
  zipped: 'bg-orange-300',
  hidden: 'bg-orange-100'
}

export const MultiStateButtonGroup = ({stateMap, onClick}: any) => {
  return (
    <div className='d-flex justify-context m-10'>
      {Object
        .keys(stateMap)
        .map((id) => (
          <MultiStateButton
            key={id}
            name={id}
            state={stateMap[id]}
            statesClass={statesClassOrange}
            onClick={onClick}
          />
        ))}
    </div>
  )
}
