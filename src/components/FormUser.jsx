import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';

const FormUser = ({createUser, update, updateUser, setUpdate, isShow, setIsShow}) => {

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
      reset(update);
    }, [update]);
    
    const submit = (data) => {
        if (update) {
            //Actuliza
            updateUser('/users', update.id, data);
            setUpdate();
        } else {
            //Crea
            createUser('/users', data);
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setIsShow(false);
    }

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setIsShow(false);
        setUpdate();
    }

  return (
    <div className={`form ${isShow && 'active'}`}>
        <form className='form-Form' onSubmit={handleSubmit(submit)}>
            <div className='form-header'>
                <h2>
                    {
                      update ?
                          'Editar usuario'
                          :
                          'Usuario nuevo'
                    }
                </h2>
             <button onClick={handleClose} className='form-close' type='button'>X</button>
            </div>
            <div className='form-item'>
                <label htmlFor="first_name">Nombre</label>
                <input {...register('first_name')} id='first_name' type="text" />
            </div>
            <div className='form-item'>
                <label htmlFor="last_name">Apellidos</label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div className='form-item'>
                <label htmlFor="email">Correo</label>
                <input {...register('email')} id='email' type="email" />
            </div>
            <div className='form-item'>
                <label htmlFor="password">Contraseña</label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div className='form-item'>
                <label htmlFor="birthday">Cumpleaños</label>
                <input {...register('birthday')} id='birthday' type="date" />
            </div>
            <button className='form-btn'>
                {
                    update ?
                        'Guardar edición'
                        :
                        'Guardar usuario'
                }
            </button>
        </form>
    </div>
  )
}

export default FormUser