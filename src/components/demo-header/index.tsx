import React, { useState } from "react";
import { AppModal } from "../modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { PanesCollectionListRatioMode } from "../../shared/pane-model-config-sets";
import { Select } from "../form-controls/select";
import { CheckBox } from "../form-controls/check-box";
import TextField from "../form-controls/textfield";
import { NPM_URL } from "../header/constant";

export const DemoHeader = ({ onUpdateInitalConfig, initialConfig }: any) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [storageApiFlag, setStorageApiFlag] = useState<boolean>(
    initialConfig.storageApiFlag
  );

  const [zipping, setZipping] = useState<boolean>(initialConfig.zipping);
  const [unmounOnHide, setUnmounOnHide] = useState(initialConfig.unmounOnHide);
  const [vertical, setVertical] = useState(initialConfig.vertical);
  const [resizerSize, setResizerSize] = useState(initialConfig.resizerSize);
  const [activePanesSet, setActivePanesSet] = useState(
    initialConfig.activePanesSet
  );

  const onConfirm = () => {
    const updatedInitalConfig = {
      storageApiFlag,
      zipping,
      unmounOnHide,
      vertical,
      resizerSize,
      activePanesSet: activePanesSet,
    };

    onUpdateInitalConfig(updatedInitalConfig);
    closeModal();
  };

  const onChangeResizer = (value: string) => {
    const numValue = Number(value);
    if (numValue > 0) {
      setResizerSize(numValue);
    }
  };

  const onChangeStorageApiFlag = (flag: boolean) => {
    setStorageApiFlag(flag);
  };

  return (
    <div>
      <div>
        <div className="text-2xl" >
          Why to use{" "}
          <a className="text-blue-600" href={NPM_URL}>
            resizable-panes-react
          </a>
          :
        </div>
        <div className="text-orange-600">
          <p >
            - In build api methods to control visibility, resizing of panes and
            to get state of panes.
          </p>
          <p>
            - No Unnecessary Rerenderring while resizing and visibility operations and can keep component rendered in hidden state.
          </p>
          <p>- Other features Custom resizer, responsive, auto save layout in browser's memory, handles partial visibility and etc.</p>
        </div>
      </div>
      <div className="grid grid-cols-7 mt-4">
        <h2 className="text-3xl bold text-slate-800 col-span-6">
          Edit Inital Config
        </h2>
        <div className="justify-self-end text-xl self-center cursor-pointer">
          <FontAwesomeIcon
            onClick={openModal}
            icon={faFilePen}
            className="text-cyan-600 hover:text-cyan-500"
            size="lg"
          />
        </div>
      </div>
      <AppModal
        title="Initial Config"
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
      >
        <div className="grid grid-cols-1 gap-20">
          <div className="grid grid-cols-1 gap-20">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Select Panes set"
                  className="w-full"
                  list={PanesCollectionListRatioMode}
                  id="panesSet"
                  value={activePanesSet}
                  onChange={setActivePanesSet}
                />

                <TextField
                  className=""
                  label="Resizer Size"
                  name="resizerSize"
                  onChange={onChangeResizer}
                  value={resizerSize}
                  type="number"
                />

                <CheckBox
                  cyId="btn-zipping"
                  name="zipping"
                  value={zipping}
                  onChange={setZipping}
                  label="Zipping"
                />

                <CheckBox
                  cyId="btn-zipping"
                  name="destroyOnHide"
                  value={unmounOnHide}
                  onChange={setUnmounOnHide}
                  label="Unmount on Hide"
                />

                <CheckBox
                  cyId="vertical"
                  name="vertical"
                  value={vertical}
                  onChange={setVertical}
                  label="Vertical"
                />

                <CheckBox
                  cyId="btn-storage-api"
                  name="storageApi"
                  value={storageApiFlag}
                  onChange={onChangeStorageApiFlag}
                  label="Storage Api"
                />
              </div>
            </div>
          </div>
        </div>
      </AppModal>
    </div>
  );
};
