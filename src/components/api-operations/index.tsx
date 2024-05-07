import React, { useEffect, useState } from "react";
import { SET_SIZE_LIST } from "../../shared/constant";
import { Select } from "../form-controls/select";
import TextField from "../form-controls/textfield";
import Button from "../form-controls/button";

export const ApiOperations = ({ apiRef, selectIdsOption }: any) => {
  const [newSize, setNewSize] = useState<number | null | "">("");
  
  const [selectedId, setSelectedId] = useState<any>(selectIdsOption[0]?.value);
  const [setSizeBehaviour, setSetSizeBehaviour] = useState(SET_SIZE_LIST[0].value);

  useEffect(() => {
    const [{value = ''} = {}] = selectIdsOption
    setSelectedId(value)
  }, [selectIdsOption])

  const onChangeNewSize = () => {
    apiRef.current.setSize(
      selectedId,
      newSize,
      setSizeBehaviour
    );
  };

  const updateNewSize = (val: string) => {
    if (val !== "0") {
      const numValue = parseInt(val);
      setNewSize(numValue);
    }
  };

  const onRestore = () => {
    apiRef.current.restore();
  };

  const getState = () => {
    const state = apiRef.current.getState();
    console.log("Current State", state);
  };

  const getSizes = () => {
    const sizesMap = apiRef.current.getSizes();
    console.log("SizesMap", sizesMap);
  };

  const getVisibilitiesMap = () => {
    const map = apiRef.current.getVisibilities();
    console.log("VisibilitiesMap", map);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="grid mt-4 p-4 border rounded-lg">
        <Select
        valueKey='value'
          label="Select Pane Id"
          className="w-full"
          list={selectIdsOption}
          id="paneId"
          value={selectedId}
          onChange={setSelectedId}
        />

        <Select
          className="w-full"
          label="Behaviour"
          list={SET_SIZE_LIST}
          id="paneId"
          valueKey='value'
          value={setSizeBehaviour}
          onChange={setSetSizeBehaviour}
        />

        <TextField
          label="Size"
          value={newSize}
          name="newSize"
          onChange={updateNewSize}
          type="number"
        />

        <Button
          className="mt-3"
          onClick={onChangeNewSize}
          label="Change"
        />
      </div>

      <div className=" mt-4 p-4 border rounded-lg gap-7 ">
        <Button onClick={onRestore} label="Restore" />
        <Button onClick={getState} md label="Get state" />
        <Button onClick={getSizes} label="Get sizes" />
        <Button onClick={getVisibilitiesMap} label="Get visibilities" />
      </div>
    </div>
  );
};
