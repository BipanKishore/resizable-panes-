import TextField from "../textfield";
import { CheckBox } from "../check-box";
import { Select } from "../select";
import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets";
import { useState } from "react";

export const InitialConfig = ({
    onChangeSize, setActivePanesSet 
}: any) => {

    const [storageApiFlag, setStorageApiFlag] = useState<boolean>(false)
    const [zipping, setZipping] = useState<boolean>(true)
    const [unmounOnHide, setUnmounOnHide] = useState(false)
    const [vertical, setVertical] = useState(true)
    const [resizerSize, setResizerSize] = useState(1)


    const onChangeResizer = (value: string) => {
        const numValue = Number(value)
        if (numValue > 0) {
            setResizerSize(numValue)
        }
    }

    const onChangeStorageApiFlag = (flag: boolean) => {
        setStorageApiFlag(flag)
    }



    const onChangeStorgeApi = (e: any) => {
        localStorage.clear()
    }


    const onTextChange = (e: any) => {
        onChangeSize(e)
    }

    return <div className=''>
        <div className="grid grid-cols-2 gap-6" >
            <Select
                label='Select Panes set'
                className="w-full "
                list={PanesCollectionListRatioMode}
                id="panesSet"
                value={''}
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
}