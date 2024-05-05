import React, { useState } from 'react'
import { InitialConfig } from './initial-config'
import { AppModal } from '../modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'



export const DemoHeader = ({
    apiRef,
    onRestore, formValues, onChangeSize,
    onBtnChange,
    selectIdsOption,
    onChangePanesSet,
    rerenderResizable,
    setActivePanesSet
}: any) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onConfirm =() => {
        rerenderResizable()
        closeModal()
    }

    const onChangeSelect = (newPanesPayload: any) => {
        const {value: {value}} = newPanesPayload
        setActivePanesSet(value)
    }

    return (
        <div>
            <h1>This library is highly customizable and can be used in various applications where flexible layout system is required.</h1>
            <div className='grid grid-cols-2 mt-4' >
                
                <h2 className='text-3xl bold text-slate-800'>Edit Inital Config</h2>
                <div className='justify-self-end text-xl self-center cursor-pointer' >
                    <FontAwesomeIcon onClick={openModal} icon={faFilePen} className='text-cyan-600' size="lg" />
                </div>
            </div>
            <AppModal
                title='Initial Config'
                isOpen={modalIsOpen}
                closeModal={closeModal}
                onConfirm={onConfirm}
            >
                <div className='grid grid-cols-1 gap-20' >
                    <InitialConfig
                        formValues={formValues}
                        onBtnChange={onBtnChange}
                        onChangeSize={onChangeSize}
                        setActivePanesSet={onChangeSelect}
                    />
                </div>

            </AppModal>
        </div>
    )
}
