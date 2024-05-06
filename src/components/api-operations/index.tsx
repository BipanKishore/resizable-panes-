import React, { useState } from "react";
import { SET_SIZE_LIST } from "../../shared/constant";
import { Select } from "../form-controls/select";
import TextField from "../form-controls/textfield";
import Button from "../form-controls/button";

export const ApiOperations = ({ apiRef, selectIdsOption }: any) => {
  const [newSize, setNewSize] = useState<number | null | "">("");
  const [selectedId, setSelectedId] = useState<any>({});
  const [setSizeBehaviour, setSetSizeBehaviour] = useState(SET_SIZE_LIST[0]);

  const onChangeNewSize = () => {
    console.log(
      selectedId.label ?? selectIdsOption[0],
      newSize,
      setSizeBehaviour
    );
    apiRef.current.setSize(
      selectedId.label ?? selectIdsOption[0],
      newSize,
      setSizeBehaviour.value
    );
  };

  const updateNewSize = (val: string) => {
    if (val !== "0") {
      const numValue = Number(val);
      setNewSize(numValue);
    } else {
      setNewSize("");
    }
  };

  const onRestore = () => {
    const state = apiRef.current.restore();
    console.log("Current State", state);
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
    const map = apiRef.current.getVisibilitiesMap();
    console.log("VisibilitiesMap", map);
  };

  return (
    <div className="grid grid-cols-3">
      <div className="grid mt-4 p-4 border rounded-lg">
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
          label="Set size behaviour"
          list={SET_SIZE_LIST}
          id="paneId"
          value={setSizeBehaviour}
          onChange={setSetSizeBehaviour}
        />

        <TextField
          label="New size"
          value={newSize}
          name="newSize"
          onChange={updateNewSize}
          type="number"
        />

        <Button
          className="mt-3"
          onClick={onChangeNewSize}
          label="Change size"
        />
      </div>
      <div></div>

      <div className="grid mt-4 p-4 border rounded-lg gap-7 ">
        <Button onClick={onRestore} label="Restore" />
        <Button onClick={getState} md label="Get State" />
        <Button onClick={getSizes} label="Get sizes" />
        <Button onClick={getVisibilitiesMap} label="Get visibilities" />
      </div>
    </div>
  );
};
