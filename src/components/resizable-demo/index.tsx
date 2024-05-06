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
import { DemoFooter } from "../demo-footer";
import { INITIAL_CONFIG, storageApiFlagKey, storeBooleanKey } from "./util";

interface IIDMap {
  [id: string]: boolean;
}

export const ResizableDemo = () => {
  const [paneComponentLists, setPaneComponentLists] = useState(
    generatePaneModel([])
  );
  const [paneIdsList, setPaneIdsList] = useState(getSelectListForPaneIds([]));
  const [paneVisibilityState, setPaneVisibilityState] = useState(
    getInitialVisibility([])
  );
  const [initialConfig, setInitialConfig] = useState<any>({});

  const [shouldMountResizable, setSholdMountResizable] = useState(false);

  const [visibilityMap, setVisibilitiesMap] =
    useState<IIDMap>(paneVisibilityState);

  const onUpdateInitalConfig = (
    updatedInitalConfig: any,
    allowStorageCheck = true
  ) => {
    const { activePanesSet, storageApiFlag } = updatedInitalConfig;

    storeBooleanKey(storageApiFlagKey, storageApiFlag);
    console.log("-----------------------------------------", allowStorageCheck);
    setInitialConfig((previousState: any) => {
      if (allowStorageCheck) {
        console.log(
          "-----------------------------------------",
          allowStorageCheck
        );
        if (previousState.storageApiFlag !== storageApiFlag) {
          localStorage.clear();
        }
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
    console.log("hhhhhhhhhhhhhhhhhhhhh");
    onUpdateInitalConfig(INITIAL_CONFIG, false);
  }, []);

  const onRestore = () => {
    setVisibilitiesMap(getInitialVisibility(paneIdsList));
    apiRef.current.restore();
  };

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

  // console.log(
  //   'shouldMountResizable',
  //   shouldMountResizable,
  //   'initialConfig',
  //   initialConfig
  // )

  return (
    <div className="h-100p w-100p px-6">
      <DemoHeader onUpdateInitalConfig={onUpdateInitalConfig} />

      <div className="h-80 w-100p mt-5">
        {shouldMountResizable && (
          <ResizablePanes
            visibility={visibilityMap}
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
          >
            {paneComponentLists}
          </ResizablePanes>
        )}
      </div>

      <DemoFooter
        selectIdsOption={paneIdsList}
        paneVisibilityState={paneVisibilityState}
        updateVisibilityMap={updateVisibilityMap}
        onRestore={onRestore}
        apiRef={apiRef}
      />
    </div>
  );
};
