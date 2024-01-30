import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const { image_link, description, integrations, feature } = props.singleData; 
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="card lg:card-side bg-base-100 ">
                        <figure><img src={image_link && image_link[0]} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;