import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets"

 const initialConfigKey = 'initial-config'


export const INITIAL_CONFIG = {
  zipping: true,
  vertical: true,
  unmounOnHide: true,
  storageApiFlag: false,
  resizerSize: 2,
  activePanesSet: PanesCollectionListRatioMode[4].label
}


export const clearAllResizableComponentData = () => {
  PanesCollectionListRatioMode.forEach((item) => {
    localStorage.removeItem(item.label)
  })
}

export const storeInitialConfig = (config: any) => {
  const value = JSON.stringify(config)
  localStorage.setItem(initialConfigKey, value)
}

export const getInitialConfig = () => {
  const stringifyValue = localStorage.getItem(initialConfigKey)

  return stringifyValue ? JSON.parse(stringifyValue) : INITIAL_CONFIG
}





