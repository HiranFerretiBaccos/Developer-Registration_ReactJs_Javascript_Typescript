import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';                  //useNavigate foi substituído pelo useHistory.
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {

    const navigate = useNavigate();                              //useNavigate sendo declarado.
    const { state, dispatch } = useForm();

    useEffect(() => {                                             //Assim que entrar na reda, roda isso:
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {                                  //Se tiver algo preenchido, o 'navigate' funciona no button, senão dá o alert.
            navigate('./step2');                                  //Sendo chamado aqui para a Rota no Evento de onClick={}
        } else {
            alert('Preencha os dados.');
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <>
            <Theme>
                <C.Container>
                    <p>Passo 1/3</p>
                    <h1>Vamos começar com seu nome</h1>
                    <p>Preencha o campo abaixo com seu nome completo.</p>
                    <hr />
                    <label>
                        Seu nome completo
                        <input
                            type='text'
                            autoFocus
                            value={state.name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <button className='button-class' onClick={handleNextStep}>Próximo</button>
                </C.Container>
            </Theme>
        </>
    )
}