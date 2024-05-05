import { Pane } from "resizable-panes-react"
import { PaneModelConfig } from "../../../src/shared/models"
import React from "react"
import { Loading } from "../Loading"

const bgClasses = [
    'bg-cyan-500',
    'bg-red-500', 'bg-orange-500', 'bg-lime-500',
    'bg-amber-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500']
  
  export const generatePaneModel = (list: PaneModelConfig[]) => {
    const paneComponentLists = list.map(({size, minSize, maxSize}, index) =>
      (
        <Pane
          className={`${bgClasses[index]} text-align-center`}
          id={`P${index}`}
          key={index}
          maxSize={maxSize}
          minSize={minSize}
          size={size}
        >
          {<h2>{`P${index}`}</h2>}
          <Loading />
        </Pane>
      )
    )
  
    const initalVisibility: any = {}
  
    list.forEach((_, index) => {
      initalVisibility[`P${index}`] = true
    })
  
    return {
      initalVisibility,
      paneComponentLists
    }
  }
  