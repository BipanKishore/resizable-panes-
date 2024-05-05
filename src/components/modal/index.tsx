import React, { ReactElement } from 'react';
import Modal from 'react-modal';
import Button from '../button';
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
  children: ReactElement,
  onConfirm: any
}


export function AppModal(props: IAppModal) {

  const { isOpen, closeModal, title, children, onConfirm } = props

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={() => { }}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='p-4' >
          <h2 className='text-3xl bold mb-6 '>{title}</h2>
          <div>
            {children}
          </div>

          <div className='float-right'>
            
            <Button
            label='Apply'
            onClick={onConfirm}
            >

            </Button>
            </div>
        </div>
      </Modal>
    </div>
  );
}


