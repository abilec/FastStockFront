const Modal = ({ isOpen, children, title, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className="modal-backdrop fade show" 
                style={{ display: 'block' }}
            ></div>

            {/* Modal */}
            <div 
                className="modal fade show" 
                style={{ display: 'block' }}
                tabIndex="-1" 
                role="dialog"
                aria-modal="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={onClose} 
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;