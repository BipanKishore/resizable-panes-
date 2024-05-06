import React from 'react'
import { PanesVisibilityState } from './multi-state-buttons/multi-state-button-group'
import { ApiOperations } from './demo-header/api-operations'

export const DemoFooter = ({
  paneVisibilityState,
  updateVisibilityMap,
  selectIdsOption,
  apiRef
}: any) => {
  return (
    <div className='grid justify-content-center grid-cols-1'>

      <div className='mt-10 justify-self-center' >
        <PanesVisibilityState
          selectIdsOption={selectIdsOption}
          stateMap={paneVisibilityState}
          onClick={updateVisibilityMap} />
        <div className='font-normal mt-2  text-xs text-slate-500'>
          These button controls the <span className='font-medium'>
            visibility prop or setVisibilities method</span>
        </div>
      </div>


      <ApiOperations
        apiRef={apiRef}
        selectIdsOption={selectIdsOption}
      />
    </div>
  )
}