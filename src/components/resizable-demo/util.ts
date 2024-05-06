import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets"

export const storageApiFlagKey = 'storageApiFlag'

export const getSstorageApiFlagValue = (key: string) => JSON.parse(localStorage.getItem(key) as string) ?? false
export const storeBooleanKey = (key: string, value: boolean) => localStorage.setItem(key, value + '')

console.log(
  'getSstorageApiFlagValue(storageApiFlagKey)', getSstorageApiFlagValue(storageApiFlagKey)
)

export const INITIAL_CONFIG = {
  zipping: true,
  vertical: true,
  unmounOnHide: true,
  storageApiFlag: getSstorageApiFlagValue(storageApiFlagKey),
  resizerSize: 2,
  activePanesSet: PanesCollectionListRatioMode[5].value
}