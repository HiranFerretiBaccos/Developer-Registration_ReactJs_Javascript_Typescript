import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from 'react-router-dom';                  //useNavigate foi substituído pelo useHistory.
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {

    const navigate = useNavigate();                              //useNavigate sendo declarado.
    const { state, dispatch } = useForm();

    useEffect(() => {                                             //Assim que entrar na reda, roda isso:
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {                                  //Se tiver algo preenchido, o 'navigate' funciona no button, senão dá o alert.
            navigate('/step3');                                  //Sendo chamado aqui para a Rota no Evento de onClick={}
        } else {
            alert('Preencha os dados.');
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <>
            <Theme>
                <C.Container>
                    <p>Passo 2/3</p>
                    <h1>{state.name}, o que melhor descreve você?</h1>
                    <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>
                    <hr />

                    <SelectOption
                        title='Sou iniciante'
                        description='Comecei a programar há menos de 2 anos'
                        icon='🥳'
                        selected={state.level === 0}
                        onClick={() => setLevel(0)}
                    />

                    <SelectOption
                        title='Sou Programador'
                        description='Já programo há 2 anos ou mais'
                        icon='😎'
                        selected={state.level === 1}
                        onClick={() => setLevel(1)}
                    />

                    <Link to='/' className='backButton'>Voltar</Link>
                    <button onClick={handleNextStep}>Próximo</button>
                </C.Container>
            </Theme>
        </>
    )
}