import React, { ReactElement } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface IAppModal {
  isOpen: boolean,
  closeModal: any,
  title: string,
  children: ReactElement
}


export function AppModal(props: IAppModal) {

const {isOpen, 
  closeModal,
  title,
  children
} = props

  






  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={() => {}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-xl bold ' >{title}</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
    <div>
      {children}
    </div>
      </Modal>
    </div>
  );
}


