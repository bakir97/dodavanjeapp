import React from 'react';
import Modal from 'react-modal';
const OpcijaModal = ({izabranaopcija, zatvoriModal})=>(
      <Modal
     isOpen={!!izabranaopcija}
     onRequestClose={zatvoriModal}
     contentLabel='Izabrana opcija'
     closeTimeoutMS={200}
     className='modal'
     >
          <h3 className='modal__text' >Izabrana Opcija</h3>
          {izabranaopcija && <p className='modal__body' >{izabranaopcija}</p> }
          <button className='dugme' onClick={zatvoriModal} >Okay</button>
    </Modal>
);
export default OpcijaModal;