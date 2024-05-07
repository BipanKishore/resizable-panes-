import React, { useEffect, useState } from "react";
import { SET_SIZE_LIST } from "../../shared/constant";
import { Select } from "../form-controls/select";
import TextField from "../form-controls/textfield";
import Button from "../form-controls/button";

export const SetSize = ({ apiRef, selectIdsOption }: any) => {
  const [newSize, setNewSize] = useState<number | null | "">("");

  const [selectedId, setSelectedId] = useState<any>(selectIdsOption[0]?.value);
  const [setSizeBehaviour, setSetSizeBehaviour] = useState(
    SET_SIZE_LIST[0].value
  );

  useEffect(() => {
    const [{ value = "" } = {}] = selectIdsOption;
    setSelectedId(value);
  }, [selectIdsOption]);

  const onChangeNewSize = () => {
    apiRef.current.setSize(selectedId, newSize, setSizeBehaviour);
  };

  const updateNewSize = (val: string) => {
    if (val !== "0") {
      const numValue = parseInt(val);
      setNewSize(numValue);
    }
  };

  return (
    <div>
 <div className="p-2 flex justify-center">
        <Select
          valueKey="value"
          className="mr-2"
          list={selectIdsOption}
          id="paneId"
          value={selectedId}
          onChange={setSelectedId}
        />

        <Select
          className="mr-2"
          list={SET_SIZE_LIST}
          id="paneId"
          valueKey="value"
          value={setSizeBehaviour}
          onChange={setSetSizeBehaviour}
        />

        <TextField
          className="mr-2"
          placeholder="Size"
          value={newSize}
          name="newSize"
          onChange={updateNewSize}
          type="number"
        />

        <Button className="mt-1" onClick={onChangeNewSize} label="Change" />
      </div>
      <div className="font-normal mt-2 text-center text-xs text-slate-500">
      It controls Resizable api's setSize method.
      </div>
    </div>
  );
};
