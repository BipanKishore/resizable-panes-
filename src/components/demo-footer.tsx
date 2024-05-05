import React from 'react'
import { PanesVisibilityState } from './multi-state-buttons/multi-state-button-group'
import { ApiOperations } from './demo-header/api-operations'

export const DemoFooter = ({
  paneVisibilityState,
  updateVisibilityMap,
  selectIdsOption,
  formValues,
  onBtnChange,
  apiRef,
  onChangeSize,
  onRestore,
}: any) => {
  return (
    <div className='grid justify-content-center grid-cols-1  justify-items-center'>

      <div className='mt-10' >
        <PanesVisibilityState
          selectIdsOption={selectIdsOption}
          stateMap={paneVisibilityState}
          onClick={updateVisibilityMap} />
      </div>
      {/* <div className='font-normal mt-2'>
        These button controls the <span className='font-medium'>
          visibility prop or setVisibility method</span>
      </div> */}

      <ApiOperations
        formValues={formValues}
        onBtnChange={onBtnChange}
        apiRef={apiRef}
        onChangeSize={onChangeSize}
        onRestore={onRestore}
        selectIdsOption={selectIdsOption}
      />
    </div>
  )
}