import React, { useRef, useState } from 'react'
import { BUTTOM_FIRST, rScontainerId } from '../../../src/shared/constant'
import { generatePaneModel, getInitialVisibility, getSelectListForPaneIds } from '../panes-generator'
import { ResizablePanes } from 'resizable-panes-react'
import { _4PanesWithMinMax } from '../../shared/pane-model-config-sets'
import { DemoHeader } from '../demo-header'
import { DemoFooter } from '../demo-footer'
import { initialResizableFormValues } from './util'


interface IIDMap {
  [id: string]: boolean
}

export const ResizableDemo = () => {

  const [activePanesSet, setActivePanesSet] = useState(_4PanesWithMinMax)
  
  const [paneComponentLists, setPaneComponentLists] = useState(generatePaneModel(activePanesSet))
  const [paneIdsList, setPaneIdsList] = useState(getSelectListForPaneIds(activePanesSet))
  const [paneVisibilityState, setPaneVisibilityState] = useState(getInitialVisibility(activePanesSet))

  const [visibilityMap, setVisibilityMap] = useState<IIDMap>(paneVisibilityState)

  const [shouldMountResizable, setSholdMountResizable] = useState(true)

  const [formValues, setFormValues] = useState<any>(initialResizableFormValues)

  const onBtnChange = (e: any) => {
    const { name, value } = e
    setFormValues((preFormValues: any) => ({
      ...preFormValues,
      [name]: value
    }))
  }

  const onFormChange = (e: any) => {
    const { name, value } = e.target
    setFormValues((preFormValues: any) => ({
      ...preFormValues,
      [name]: value
    }))
  }

  const onChangeSize = (e: any)  => {
    const { name, value } = e.target
    setFormValues((preFormValues: any) => ({
      ...preFormValues,
      [name]: value > 0 ? value : preFormValues[name]
    }))
  }


  const rerenderResizable = () => {
    setSholdMountResizable(false)
    setTimeout(() => setSholdMountResizable(true), 1)
}

  const onChangePanesSet = (newPanesPayload: any) => {
    setSholdMountResizable(false)


    const newPaneIdsList = getSelectListForPaneIds(activePanesSet)
    setPaneIdsList(newPaneIdsList)
    const newPaneVisibilityState = getInitialVisibility(activePanesSet)
    setPaneVisibilityState(newPaneVisibilityState)
    const newpPaneComponentLists = generatePaneModel(activePanesSet)
    setPaneComponentLists(newpPaneComponentLists)
    rerenderResizable()
  }


  const onRestore = () => {
    setVisibilityMap(getInitialVisibility(activePanesSet))
    apiRef.current.restoreDefault()
  }

  const apiRef = useRef<any>({})

  const updateVisibilityMap = (e: any) => {
    const {name, checked} = e
    const previousVisibilityState =  apiRef.current.getVisibilitiesMap()
    const previousState = previousVisibilityState[name]
    if(previousState === 'zipped'){
      apiRef.current.setSize(name, 150, BUTTOM_FIRST)
    } else{
      const newVisibilityMap = {
        ...paneVisibilityState,
        [name]: checked
      }
      apiRef.current.setVisibility(newVisibilityMap)
    }
  }

  return (
    <div className='h-100p w-100p px-6' >
      
      <DemoHeader
        apiRef={apiRef}
        formValues={formValues}
        selectIdsOption={paneIdsList}
        onBtnChange={onBtnChange}
        onFormChange={onFormChange}
        onChangeSize={onChangeSize}
        onRestore={onRestore}
        onChangePanesSet={onChangePanesSet}
        rerenderResizable={rerenderResizable}
        setActivePanesSet={setActivePanesSet}
      />


      <div className='h-80 w-100p mt-5'>
        {
          shouldMountResizable &&
          <ResizablePanes
            visibility={visibilityMap}
            onReady={(api) => {
              apiRef.current = api
            }}
            activeResizerClass=''
            uniqueId={rScontainerId}
            destroyOnHide={formValues.destroyOnHide}
            resizerClass={`bg-slate-500 ${formValues.vertical ?  'h-5/6 my-auto' : 'w-5/6 mx-auto'}`}
            zipping={formValues.zipping}
            vertical={formValues.vertical}
            storageApi={formValues.storageApi ? localStorage : null}
            onChangeVisibility={setPaneVisibilityState}
            resizerSize={Number(formValues.resizerSize)}
          >
            {paneComponentLists}
          </ResizablePanes>
        }

      </div>

      <DemoFooter
        selectIdsOption={paneIdsList}
        paneVisibilityState={paneVisibilityState}
        updateVisibilityMap={updateVisibilityMap} 
        
        formValues={formValues}
        onRestore={onRestore} 
        onChangeSize={onChangeSize} 
        apiRef={apiRef} 
        onBtnChange={onBtnChange}         
        />

    </div>
  )
}
