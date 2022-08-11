import {Modal, ModalOpenButton, ModalContents} from './components/common/Modal';
import LoginForm from './LoginForm';

const App = () => {
	return <div>
    <Modal>
    <ModalOpenButton>
      <button id="open">Click me please</button>
    </ModalOpenButton>
    <ModalContents>
        this is modal
    </ModalContents>
  </Modal>
  </div>
  // return <div> hisd </div>
}

export default App