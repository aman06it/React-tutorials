import * as React from "react"

const ModalContext = React.createContext();

const callAll = (...fns)=>(...args)=>{
    fns.forEach(fn=> fn && fn(args))
}

const Modal=(props)=>{
    const [isOpen, setIsOpen] = React.useState(false);
    return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}


const ModalDismissButton=(props)=>{
    const [,setIsOpen] = React.useContext(ModalContext);
    return React.cloneElement(props.children, {
        onClick:callAll(()=>setIsOpen(false), props.children.props.onClick)
    })
}

const ModalOpenButton=(props)=>{
    const [,setIsOpen] = React.useContext(ModalContext);
    return React.cloneElement(props.children, {
        onClick:callAll(()=>setIsOpen(true), props.children.props.onClick)
    })
}

const Dialog =(props)=>{
    return props.open ? <div>
        {props.children}
    </div>:null
}

const ModalContentsBase = (props)=>{
    const [isOpen, setIsOpen]  = React.useContext(ModalContext);
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
            {props.children}
        </Dialog>
    )
}

const ModalDismissAsyncButton=(props)=> {
    const [, setIsOpen] = React.useContext(ModalContext)
    return React.cloneElement(props.children, {
      onClick: callAll(() => setIsOpen(false)),
    })
  }


function ModalContents({ title, children, ...props }) {
    return (
      <ModalContentsBase {...props}>
        <div className="modalContainer">
          <div className="modal">
            <h1>Modals are 😎</h1>
            <p>
            Try hard to achieve succeed. We are dancing. We are dancing. We are dancing. This generator should be used and succeed. Some women cry. We are extra cool dancing. Indeed so. Try hard to achieve succeed. Indeed so. We will not try to bow and go. Indeed so.
            </p>
            <ModalDismissButton>
                <button id="close">Close</button>
            </ModalDismissButton>
         </div>
        </div>
      </ModalContentsBase>
    )
  }


export { Modal, ModalOpenButton, ModalContents, ModalDismissButton, ModalDismissAsyncButton }