import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets"

export const storageApiFlagKey = 'storageApiFlag'

export const getSstorageApiFlagValue = (key: string) => JSON.parse(localStorage.getItem(key) as string) ?? false
export const storeBooleanKey = (key: string, value: boolean) => localStorage.setItem(key, value + '')

export const INITIAL_CONFIG = {
  zipping: true,
  vertical: true,
  unmounOnHide: true,
  storageApiFlag: getSstorageApiFlagValue(storageApiFlagKey),
  resizerSize: 1,
  activePanesSet: PanesCollectionListRatioMode[5].value
}

export const initialResizableFormValues = {
    paneId: 'P0',
    newSize: 0,
    zipping: true,
    vertical: true,
    destroyOnHide: true,
    storageApi: false,
    resizerSize: 1
  }