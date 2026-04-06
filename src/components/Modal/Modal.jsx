export const Modal = ({children})=>{
    return(
        <>
            <div className="modal-backdrop"/>
                <div  className="modal" style={{ display: 'block' }}>
                    <div  className="modal-content">
                        <div  className="modal-header">
                            <h5 className="modal-title">
                                Modal title
                            </h5>

                            <button type="button" className="btn-close" aria-lanel="Close"/>

                        </div>   

                        <div className="modal-body">{children}</div>

                    </div>    



                </div>

          
        </>
    )
}