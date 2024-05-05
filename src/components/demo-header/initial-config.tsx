import React from "react";
import TextField from "../textfield";
import { CheckBox } from "../check-box";
import { Select } from "../select";
import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets";



export const InitialConfig = ({ rerenderResizable, formValues,
    onBtnChange, onChangeSize, onChangePanesSet,
    setActivePanesSet }: any) => {

    const onChangeStorgeApi = (e: any) => {
        onBtnChange(e)
        localStorage.clear()
        rerenderResizable()
    }

    const onToggle = (e: any) => {
        onBtnChange(e)
        rerenderResizable()
    }

    const onTextChange = (e: any) => {
        onChangeSize(e)
        rerenderResizable()
    }

    return <div className='max-w-screen-lg mx-auto rounded-lg'>
        <div className="grid grid-cols-4 gap-6" >
            <Select
                label='Select Panes set'
                className="w-full "
                list={PanesCollectionListRatioMode}
                id="panesSet"
                formValues={formValues}
                onChange={setActivePanesSet}
            />

            <TextField
                label='Resizer Size'
                fValue={formValues}
                name="resizerSize"
                onChange={onTextChange}
                type='number'
            />


            <CheckBox
                cyId='btn-zipping'
                name='zipping'
                formValues={formValues}
                onChange={onToggle}
                label='Zipping'
            />

            <CheckBox
                cyId='btn-zipping'
                name='destroyOnHide'
                formValues={formValues}
                onChange={onToggle}
                label='Unmount on Hide'
            />

            <CheckBox
                cyId='vertical'
                name='vertical'
                formValues={formValues}
                onChange={onToggle}
                label='Vertical'
            />

            <CheckBox
                cyId='btn-storage-api'
                name='storageApi'
                formValues={formValues}
                onChange={onChangeStorgeApi}
                label="Storage Api"
            />


        </div>
    </div>
}