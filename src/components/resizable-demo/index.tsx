import React, { useEffect, useRef, useState } from "react";
import { BUTTOM_FIRST, VISIBLE, ZIPPED } from "../../../src/shared/constant";

import isEqual from "lodash/isEqual";
import {
  generatePaneModel,
  getInitialVisibility,
  getSelectListForPaneIds,
} from "../panes-generator";
import { ResizablePanes } from "resizable-panes-react";
import { DemoHeader } from "../demo-header";
import {
  clearAllResizableComponentData,
  getInitialConfig,
  storeInitialConfig,
} from "./util";
import { SizeStateBar } from "../size-state-bar";
import { VisibilityButtons } from "../visibility-buttons";
import { ApiOperations } from "../api-operations";
import { findePanesSet } from "../../shared/pane-model-config-sets";
import { PaneModelConfig } from "../../shared/models";

export const ResizableDemo = () => {
  const [initialConfig, setInitialConfig] = useState<any>(getInitialConfig());

  const [paneComponentLists, setPaneComponentLists] = useState(
    generatePaneModel([])
  );

  const [paneIdsList, setPaneIdsList] = useState(getSelectListForPaneIds([]));

  const [paneVisibilityState, setPaneVisibilityState] = useState(
    getInitialVisibility([])
  );

  const [sizeStates, setSizeState] = useState({});

  const [currentSizes, setCurrentSizes] = useState({});

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

  const onUpdateInitalConfig = (updatedInitalConfig: any) => {
    const { activePanesSet } = updatedInitalConfig;

    const newPanesSet = findePanesSet(activePanesSet) as PaneModelConfig[];

    setInitialConfig((previousConfig: any) => {
      const initialConfigClone = {
        ...previousConfig,
      };

      const updatedInitalConfigClone = {
        ...updatedInitalConfig,
      };

      delete initialConfigClone.activePanesSet;
      delete updatedInitalConfigClone.activePanesSet;

      if (!isEqual(initialConfigClone, updatedInitalConfigClone)) {
        console.log(initialConfigClone, updatedInitalConfigClone);
        clearAllResizableComponentData();
      }

      return {
        ...updatedInitalConfig,
      };
    });
    storeInitialConfig(updatedInitalConfig);

    setSizeState({});
    setSholdMountResizable(false);
    const newPaneIdsList = getSelectListForPaneIds(newPanesSet);
    setPaneIdsList(newPaneIdsList);
    const newPaneVisibilityState = getInitialVisibility(newPanesSet);
    setPaneVisibilityState(newPaneVisibilityState);
    const newpPaneComponentLists = generatePaneModel(newPanesSet);
    setPaneComponentLists(newpPaneComponentLists);
    setTimeout(() => setSholdMountResizable(true), 1);
  };

  useEffect(() => {
    onUpdateInitalConfig(getInitialConfig());
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
      <DemoHeader
        initialConfig={initialConfig}
        onUpdateInitalConfig={onUpdateInitalConfig}
      />

      <div className="h-96 w-100p mt-5">
        {shouldMountResizable && (
          <ResizablePanes
            onResize={setCurrentSizes}
            onResizeStop={setCurrentSizes}
            onReady={(api) => {
              apiRef.current = api;
            }}
            activeResizerClass=""
            storageApi={initialConfig.storageApiFlag ? sessionStorage : null}
            uniqueId={initialConfig.activePanesSet}
            unmounOnHide={initialConfig.unmounOnHide}
            {...initialConfig}
            resizerClass={`bg-slate-400 ${
              initialConfig.vertical ? "h-5/6 my-auto" : "w-5/6 mx-auto"
            }`}
            className="justify-center"
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
