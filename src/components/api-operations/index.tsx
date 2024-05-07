import React from "react";
import Button from "../form-controls/button";

export const ApiOperations = ({ apiRef, selectIdsOption }: any) => {

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
  
      <div className="p-2">
        <Button onClick={onRestore} label="Restore" />
        <Button onClick={getState} md label="Get state" />
        <Button onClick={getSizes} label="Get sizes" />
        <Button onClick={getVisibilitiesMap} label="Get visibilities" />
      </div>
  );
};
