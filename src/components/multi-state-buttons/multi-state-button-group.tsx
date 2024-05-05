import React from 'react'
import {MultiStateButton} from './multi-state-button'
import { ISelectList } from '../select'



interface IPanesVisibilityState {
  stateMap: any,
   onClick: any,
  selectIdsOption: ISelectList[]
}


export const PanesVisibilityState = ({stateMap, onClick, selectIdsOption}: IPanesVisibilityState) => {
  return (
    <div className='inline'>
      {selectIdsOption
        .map(({label, paneClasses}) => (
          <MultiStateButton
            key={label}
            name={label}
            state={stateMap[label]}
            className={`${paneClasses?.ring} ring-1 ring-offset-1`}
            statesClass={paneClasses}
            onClick={onClick}
          />
        ))}
    </div>
  )
}
