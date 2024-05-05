import React, { useState } from 'react'
import { AppModal } from '../modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import { PanesCollectionListRatioMode } from '../../shared/pane-model-config-sets'
import { CheckBox } from '../check-box'
import { Select } from '../select'
import TextField from '../textfield'
import { INITIAL_CONFIG } from '../resizable-demo/util'




export const DemoHeader = ({
    onUpdateInitalConfig
}: any) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [storageApiFlag, setStorageApiFlag] = useState<boolean>(INITIAL_CONFIG.storageApiFlag)
    const [zipping, setZipping] = useState<boolean>(true)
    const [unmounOnHide, setUnmounOnHide] = useState(false)
    const [vertical, setVertical] = useState(true)
    const [resizerSize, setResizerSize] = useState(1)
    const [activePanesSet, setActivePanesSet] = useState(PanesCollectionListRatioMode[5])


    const onConfirm = () => {
        const updatedInitalConfig = {
            storageApiFlag,
            zipping,
            unmounOnHide,
            vertical,
            resizerSize,
            activePanesSet: activePanesSet.value
        }

        onUpdateInitalConfig(updatedInitalConfig)
        closeModal()
    }

    const onChangeResizer = (value: string) => {
        const numValue = Number(value)
        if (numValue > 0) {
            setResizerSize(numValue)
        }
    }

    const onChangeStorageApiFlag = (flag: boolean) => {
        setStorageApiFlag(flag)
    }

    return (
        <div>
            <h1>This library is highly customizable and can be used in various applications where flexible layout system is required.</h1>
            <div className='grid grid-cols-2 mt-4' >

                <h2 className='text-3xl bold text-slate-800'>Edit Inital Config</h2>
                <div className='justify-self-end text-xl self-center cursor-pointer' >
                    <FontAwesomeIcon onClick={openModal} icon={faFilePen} className='text-cyan-600 hover:text-cyan-500' size="lg" />
                </div>
            </div>
            <AppModal
                title='Initial Config'
                isOpen={modalIsOpen}
                closeModal={closeModal}
                onConfirm={onConfirm}
            >
                <div className='grid grid-cols-1 gap-20' >


                    <div className='grid grid-cols-1 gap-20' >
                        <div className=''>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                                <Select
                                    label='Select Panes set'
                                    className="w-full "
                                    list={PanesCollectionListRatioMode}
                                    id="panesSet"
                                    value={activePanesSet}
                                    onChange={setActivePanesSet}
                                />

                                <TextField
                                    className=''
                                    label='Resizer Size'
                                    name="resizerSize"
                                    onChange={onChangeResizer}
                                    value={resizerSize}

                                    type='number'
                                />


                                <CheckBox
                                    cyId='btn-zipping'
                                    name='zipping'
                                    value={zipping}
                                    onChange={setZipping}
                                    label='Zipping'
                                />

                                <CheckBox
                                    cyId='btn-zipping'
                                    name='destroyOnHide'
                                    value={unmounOnHide}
                                    onChange={setUnmounOnHide}
                                    label='Unmount on Hide'
                                />

                                <CheckBox
                                    cyId='vertical'
                                    name='vertical'
                                    value={vertical}
                                    onChange={setVertical}
                                    label='Vertical'
                                />

                                <CheckBox
                                    cyId='btn-storage-api'
                                    name='storageApi'
                                    value={storageApiFlag}
                                    onChange={onChangeStorageApiFlag}
                                    label="Storage Api"
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </AppModal>
        </div>
    )
}
