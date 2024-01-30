import React from 'react';

const SingleData = (props) => {
    console.log(props.SingleData);
    const { id, image, features, published_in, name } = props.singleData;
   
    // console.log(features[0]);
    return (
        <>
            <div className="card w-full  bg-base-100 shadow-2xl">
                <figure className='w-full'>
                    <img className='' src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Features!</h2>
                    {
                        features.map((feature, index) =>
                            <p>
                                {index + 1}.{feature}
                            </p>
                        )
                    }
                    <hr className='border-2 border-info my-2' />
                    <p>If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, modi.</p>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <span className='mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>

                            </span>
                            <p>{published_in}</p>
                        </div>
                        <div>
                            <label onClick={()=>props.setUniqueId(id)} htmlFor="my_modal_6" 
                            className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </label>
                           
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleData;