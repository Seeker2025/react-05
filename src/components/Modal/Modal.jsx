import css from './Modal.module.css';

export const Modal = ({children, onClose})=>{
    return(
        <>
            <div className={css.modalBackdrop}/>
                <div  className={css.modal} style={{ display: 'block' }}>
                    <div  className="modal-content">
                        <div  className="modal-header">
                            <h5 className="modal-title">
                                Create new user
                            </h5>

                            <button
                             type="button"
                             className="btn-close"
                             aria-label="Close"
                             onClick={onClose}
                             />

                        </div>   

                        <div className="modal-body">{children}</div>

                    </div>    



                </div>

          
        </>
    )
}