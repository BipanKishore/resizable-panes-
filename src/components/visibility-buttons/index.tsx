import React from "react";
import { PanesVisibilityState } from "../form-controls/multi-state-buttons/multi-state-button-group";

export const VisibilityButtons = ({
  paneVisibilityState,
  updateVisibilityMap,
  selectIdsOption,
  sizeStates,
}: any) => {
  return (
    <div className="grid mt-4 justify-center">
      <div>
        <PanesVisibilityState
          sizeStates={sizeStates}
          selectIdsOption={selectIdsOption}
          stateMap={paneVisibilityState}
          onClick={updateVisibilityMap}
        />
        <div className="font-normal mt-2  text-xs text-slate-500">
          These button controls the
          <span className="font-medium">
            visibility prop or setVisibilities method
          </span>
        </div>
      </div>
    </div>
  );
};
