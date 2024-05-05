
import React from "react";
import Button from "../button";
import TextField from "../textfield";
import { Select } from "../select";

export const ApiOperations = ({ formValues, onBtnChange, apiRef, onChangeSize, onRestore, selectIdsOption }: any) => {

    const onChangeNumber = (e: any) => {
        onChangeSize(e)
        apiRef.current.setSize(formValues.paneId.label, Number(e.target.value))
    }

    const getState = () => {
        const state =  apiRef.current.getState()
        console.log('Current State', state)
    }
    
    const getSizesMap = () => {
        const sizesMap = apiRef.current.getSizesMap()
        console.log('SizesMap', sizesMap)
    }
    
    const getVisibilitiesMap = () => {
        const map = apiRef.current.getVisibilitiesMap()
        console.log('VisibilitiesMap', map)
    }

    return <div>
        <div className="grid grid-cols-6 gap-5 mt-6" >
            <Button
                cyId='restore-default'
                onClick={onRestore}
                label='Restore default'
            />
            <Button
                cyId='get-state'
                onClick={getState}
                md
                label="Get State"
            />
            <Button
                cyId='get-sizes-map'
                onClick={getSizesMap}
                md
                label="Get Sizes Map"
            />
            <Button
                cyId='get-visibili-map'
                onClick={getVisibilitiesMap}
                md
                label="Get Visibilities Map"
            />

            <div className="flex">
                <Select
                    className="w-14 inline-flex"
                    list={selectIdsOption}
                    id="paneId"
                    formValues={formValues}
                    onChange={onBtnChange}
                />

                <TextField
                    className="inline-flex"
                    fValue={formValues}
                    name="newSize"
                    onChange={onChangeNumber}
                    type='number'
                />
            </div>
        </div>
    </div>
}