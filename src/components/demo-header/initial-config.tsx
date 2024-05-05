import React from "react";
import TextField from "../textfield";
import { CheckBox } from "../check-box";
import { Select } from "../select";
import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets";



export const InitialConfig = ({ rerenderResizable, formValues, onBtnChange, onChangeSize, onChangePanesSet }: any) => {

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

    return <div>
        <h3 className="text-xl bold"> Initial Config

            <button data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Toggle modal
            </button>
        </h3>
        <div className="grid grid-cols-6 gap-4" >

            <Select
                className="w-full "
                list={PanesCollectionListRatioMode}
                id="panesSet"
                formValues={formValues}
                onChange={onChangePanesSet}
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

            <TextField
                label='Resizer Size'
                fValue={formValues}
                name="resizerSize"
                onChange={onTextChange}
                type='number'
            />
        </div>
    </div>
}