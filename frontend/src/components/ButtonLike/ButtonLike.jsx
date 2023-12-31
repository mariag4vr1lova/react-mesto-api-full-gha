// import { useEffect, useState } from "react"
// import api from "../../utils/api.js"
import React from "react";

// function ButtonLike({likes, myid, cardid}) {
//     const[isLike, setIsLike] = useState(false)
//     const [count, setCount] = useState(likes.length)
//     useEffect( () => {
//         setIsLike(likes.some (element => myid === element._id))
//     }, [likes, myid])
//     function handelLike() {
//         if (isLike){
//             api.deleteLike(cardid)
//             .then(res => {
//                 setIsLike(false)
//                 setCount(res.likes.length)
//             })
//             .catch((error => console.error('Ошибка при снятии лайка' `${error}`)))
//         } else {
//             api.addLike(cardid)
//             .then(res => {
//                 setIsLike(true)
//                 setCount(res.likes.length)
//             })
//             .catch((error => console.error('Ошибка при установке лайка' `${error}`)))
//         }
//     }
//     return(
//     <div className="element__like-container">
//         <button className={`element__like ${isLike ? 'element__like_active' : ''}`} aria-label="Лайк" type="button" onClick={handelLike}/>
//         <p className="element__counter"> {count} </p>          
//     </div>
//     )
// }
// function ButtonLike({ card, myId, onCardLike }) {
//     const isLike = card.likes.some((element) => myId === element);
//     return (
//         <div className="element__like-container">
//             <button
//             className={`element__like ${isLike ? `element__like_active` : ""}`}
//             type="button"
//             onClick={() => onCardLike(card)}
//             />
//             <p className="element__counter">{card.likes.length}</p>
//         </div>
//     );
// }
function ButtonLike({ myid, card, onCardLike }) {
    const isLike = card.likes.some(element => myid === element)
    return (
        <div className="element__like-container">
            <button type="button" className={`element__like ${isLike ? 'element__like_active' : ''}`}  onClick={() => onCardLike(card)} />
            <span className="elements__counter" >{card.likes.length}</span>
        </div>
    )
}
export default ButtonLike
