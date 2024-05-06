import React, { useEffect, useRef, useState } from "react";
import {
  BUTTOM_FIRST,
  VISIBLE,
  ZIPPED,
  rScontainerId,
} from "../../../src/shared/constant";
import {
  generatePaneModel,
  getInitialVisibility,
  getSelectListForPaneIds,
} from "../panes-generator";
import { ResizablePanes } from "resizable-panes-react";
import { DemoHeader } from "../demo-header";
import { INITIAL_CONFIG, storageApiFlagKey, storeBooleanKey } from "./util";
import { SizeStateBar } from "../size-state-bar";
import { VisibilityButtons } from "../visibility-buttons";
import { ApiOperations } from "../api-operations";

export const ResizableDemo = () => {
  const [paneComponentLists, setPaneComponentLists] = useState(
    generatePaneModel([])
  );
  const [paneIdsList, setPaneIdsList] = useState(getSelectListForPaneIds([]));
  const [paneVisibilityState, setPaneVisibilityState] = useState(
    getInitialVisibility([])
  );

  const [sizeStates, setSizeState] = useState({});

  const [currentSizes, setCurrentSizes] = useState({});

  const [initialConfig, setInitialConfig] = useState<any>({});

  const [shouldMountResizable, setSholdMountResizable] = useState(false);

  const onMaxSize = (id: string) => {
    setSizeState((prev) => ({
      ...prev,
      [id]: "Max",
    }));
  };
  const onMinSize = (id: string) => {
    setSizeState((prev) => ({
      ...prev,
      [id]: "Min",
    }));
  };
  const onNormalSize = (id: string) => {
    setSizeState((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const onUpdateInitalConfig = (
    updatedInitalConfig: any,
    allowStorageCheck = true
  ) => {
    const { activePanesSet, storageApiFlag } = updatedInitalConfig;

    storeBooleanKey(storageApiFlagKey, storageApiFlag);
    setInitialConfig((previousState: any) => {
      if (allowStorageCheck) {
        localStorage.clear();
      }

      return {
        storageApi: storageApiFlag ? localStorage : null,
        ...updatedInitalConfig,
      };
    });

    setSholdMountResizable(false);
    const newPaneIdsList = getSelectListForPaneIds(activePanesSet);
    setPaneIdsList(newPaneIdsList);
    const newPaneVisibilityState = getInitialVisibility(activePanesSet);
    setPaneVisibilityState(newPaneVisibilityState);
    const newpPaneComponentLists = generatePaneModel(activePanesSet);
    setPaneComponentLists(newpPaneComponentLists);
    setTimeout(() => setSholdMountResizable(true), 1);
  };

  useEffect(() => {
    onUpdateInitalConfig(INITIAL_CONFIG, false);
  }, []);

  const apiRef = useRef<any>({});

  const updateVisibilityMap = (e: any) => {
    const { name, checked } = e;
    const previousState = paneVisibilityState[name];

    if (previousState === ZIPPED) {
      apiRef.current.setSize(name, 150, BUTTOM_FIRST);
    } else {
      const newVisibilityMap: any = {};

      Object.keys(paneVisibilityState).forEach((key) => {
        newVisibilityMap[key] = [VISIBLE, ZIPPED].includes(
          paneVisibilityState[key]
        );
      });

      apiRef.current.setVisibilities({
        ...newVisibilityMap,
        [name]: checked,
      });
    }
  };

  return (
    <div className="h-100p w-100p px-6">
      <DemoHeader onUpdateInitalConfig={onUpdateInitalConfig} />

      <div className="h-80 w-100p mt-5">
        {shouldMountResizable && (
          <ResizablePanes
            onResize={setCurrentSizes}
            onResizeStop={setCurrentSizes}
            onReady={(api) => {
              apiRef.current = api;
            }}
            activeResizerClass=""
            uniqueId={rScontainerId}
            destroyOnHide={initialConfig.unmounOnHide}
            {...initialConfig}
            resizerClass={`bg-slate-500 ${
              initialConfig.vertical ? "h-5/6 my-auto" : "w-5/6 mx-auto"
            }`}
            onChangeVisibility={setPaneVisibilityState}
            onMaxSize={onMaxSize}
            onMinSize={onMinSize}
            onNormalSize={onNormalSize}
          >
            {paneComponentLists}
          </ResizablePanes>
        )}
      </div>

      <div>
        <SizeStateBar
          currentSizes={currentSizes}
          resizerSize={initialConfig.resizerSize}
          sizeStates={sizeStates}
        />
      </div>

      <VisibilityButtons
        selectIdsOption={paneIdsList}
        sizeStates={sizeStates}
        paneVisibilityState={paneVisibilityState}
        updateVisibilityMap={updateVisibilityMap}
      />

      <ApiOperations apiRef={apiRef} selectIdsOption={paneIdsList} />
    </div>
  );
};
