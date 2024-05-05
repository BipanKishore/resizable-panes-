import React from 'react'
import { InitialConfig } from './initial-config'

export const DemoHeader = ({
    apiRef,
    onRestore, formValues, onChangeSize,
    onBtnChange,
    selectIdsOption,
    onChangePanesSet,
    rerenderResizable
}: any) => {



    return (
        <div className='grid grid-cols-1 gap-20' >
            <InitialConfig
                onChangePanesSet={onChangePanesSet}
                rerenderResizable={rerenderResizable}
                formValues={formValues}
                onBtnChange={onBtnChange}
                onChangeSize={onChangeSize}
            />
        </div>
    )
}
