import { Pane } from "resizable-panes-react";
import { PaneModelConfig } from "../../../src/shared/models";
import React from "react";
import { Loading } from "../Loading";
import { ISelectList } from "../select";
import { paneClasses } from "./pane-css";



export const generatePaneModel = (list: PaneModelConfig[]) => {
  const paneComponentLists = list.map(({ size, minSize, maxSize }, index) => {

    const onNormalSize =(id: string) => {
      console.log('v-- onNormalSize', id)
    }
    const onMinSize = (id: string, size: number) => {
      console.log('v-- onMinSize', id, size)
    }
    const onMaxSize = (id: string, size: number) => {
      console.log('v-- onMaxSize', id, size)
    }

    return (
      <Pane
      className={`${paneClasses[index].container} text-center text-2xl text-white rounded-lg`}
      id={`P${index}`}
      key={index}
      maxSize={maxSize}
      minSize={minSize}
      size={size}
      maxSizeClass={'bg-red-700'}
      minSizeClass={'opacity-50'}


    >
      <div className="mt-8 text-slate-700">
        {<h2>{`P${index}`}</h2>}
        <Loading />
      </div>
    </Pane>
    )
  }

  );

  return paneComponentLists;
};

export const getInitialVisibility = (list: any[]) => {
  const initalVisibility: any = {};

  list.forEach((_, index) => {
    initalVisibility[`P${index}`] = true;
  });

  return initalVisibility;
};

export const getSelectListForPaneIds = (list: PaneModelConfig[]) => {
  const selectList: ISelectList[] = [];
  list.forEach((_, index) => {
    selectList.push({
      paneClasses: paneClasses[index],
      label: `P${index}`,
      value: `P${index}`,
    });
  });
  return selectList;
};
