import React from 'react'

const Card = (props) => {
function isliked(){
        if (props.isLiked) {
        return <h4><i className="ri-heart-line cursor-pointer " ></i></h4>
    }else{
        return <h4><i className="ri-heart-3-fill text-red-500 cursor-pointer"></i></h4>
    }
    }

    
  return (
    <>
    <div className='bg-emerald-500 w-70 h-70 rounded-2xl flex justify-between p-10 items-center card'>
        <div className="user flex justify-between  gap-5 text-l ">
            <h3>{props.username}</h3>
        <h4 className='p-2'>{props.description}</h4>
        </div>

        <div className="count  flex justify-between gap-8 bg-amber-200 px-6 py-4 rounded-2xl">
            <div className="like">
                <h4 >{props.likes}</h4>
                 <h3>Likes</h3>

            </div>
            <div className="follow">
                <h4>{props.follow}</h4>
                                <h3>follows</h3>

            </div>
             <div className="isLiked" onClick={(e)=>{
                
                
             }}>
                  {isliked()}
            </div>
        </div>

    </div>

    </>
  )
}

export default Card