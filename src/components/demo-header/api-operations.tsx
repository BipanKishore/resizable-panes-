
import React, { useState } from "react";
import Button from "../button";
import TextField from "../textfield";
import { Select } from "../select";
import { SET_SIZE_LIST } from "../../shared/constant";

export const ApiOperations = ({ apiRef, onRestore, selectIdsOption }: any) => {

    const [newSize, setNewSize] = useState<number | null | ''>('')
    const [selectedId, setSelectedId] = useState<any>({})
    const [setSizeBehaviour, setSetSizeBehaviour] = useState(SET_SIZE_LIST[0])

    const onChangeNewSize = () => {
        console.log(selectedId.label ?? selectIdsOption[0], newSize, setSizeBehaviour)
        apiRef.current.setSize(selectedId.label ?? selectIdsOption[0], newSize, setSizeBehaviour.value)
    }

    const updateNewSize = (val: string) => {
        const numValue = Number(val)
        if (numValue > 0) {
            setNewSize(numValue)
        }
    }

    const getState = () => {
        const state = apiRef.current.getState()
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


        <div className="grid grid-cols-4 gap-4 mt-4">
            <Select
                label="Select Pane Id"
                className="w-full"
                list={selectIdsOption}
                id="paneId"
                value={selectedId}
                onChange={setSelectedId}
            />

            <Select
                className="w-full"
                label='Set size behaviour'
                list={SET_SIZE_LIST}
                id="paneId"
                value={setSizeBehaviour}
                onChange={setSetSizeBehaviour}
            />

            <TextField
                label='New size'
                className="inline-flex"
                value={newSize}
                name="newSize"
                onChange={updateNewSize}
                type='number'
            />



            <Button
                onClick={onChangeNewSize}
                className='h-5'
                label="Change size"
            />
        </div>

        <div className="grid grid-cols-4 gap-5 my-6" >
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
        </div>
    </div>
}