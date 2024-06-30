import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setUpdate, setIsShow}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setUpdate(user);
        setIsShow(true);
    }

  return (
    <article className='card'>
        <h2 className='card-name'>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className='card-list'>
            <li className='card-item'><span>CORREO </span><span>{user.email}</span></li>
            <li className='card-item'><span>CUMPLEAÑOS </span><span>{user.birthday}</span></li>
        </ul>
        <hr />
        <div className='card-btns'>
            <button className='card-btn' onClick={handleDelete}>Eliminar</button>
            <button onClick={handleEdit}>Editar</button>
        </div>
    </article>
  )
}

export default CardUser