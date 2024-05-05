import React from 'react'
import { MultiStateButtonTealOnOff, isOn } from './src/components/multi-state-buttons/multi-state-button'

export const DemoHeader = ({
  apiRef,
  onRestore, formValues, onFormChange,
  onBtnChange
}: any) => {
  return (
    <div>
    <div className='grid justify-content-center grid-cols-8 m-4'>

      <MultiStateButtonTealOnOff
        cyId='hide-resizable-panes'
        label={isOn(formValues.mount) ? 'Mount' : 'Un Mount'}
        name='mount'
        state={formValues.mount}
        onClick={onBtnChange}
      />

      <MultiStateButtonTealOnOff
        cyId='restore-defaul'
        label="Restore Default"
        name='mount'
        state='on'
        onClick={onRestore}
      />

      <MultiStateButtonTealOnOff
        cyId='get-mat'
        label="GetState"
        name='mount'
        state='on'
        onClick={() => apiRef.current.getState()}
      />

      <span >
        Pane Id
        <input className='w-14 h-8 rounded' name='paneId' value={formValues.paneId} onChange={onFormChange} />
      </span>
      <span>
        Size
        <input className='w-14 h-8 rounded' name='newSize' type='number' value={formValues.newSize} onChange={onFormChange} />
      </span>

      <MultiStateButtonTealOnOff
        cyId='btn-change-size'
        label="Change Size"
        name='sizeChange'
        state='on'
        onClick={() => {
          apiRef.current.setSize(formValues.paneId, Number(formValues.newSize))
        }}
      />

      <MultiStateButtonTealOnOff
        cyId='btn-zipping'
        label="Zipping"
        name='zipping'
        state={formValues.zipping}
        onClick={onBtnChange}
      />

      <MultiStateButtonTealOnOff
        cyId='btn-destroy-on-hide'
        label="Destroy On Hide"
        name='destroyOnHide'
        state={formValues.destroyOnHide}
        onClick={onBtnChange}
      />

    </div>
    </div>
  )
}
