import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from 'react-router-dom';                  //useNavigate foi substituído pelo useHistory.
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const navigate = useNavigate();                              //useNavigate sendo declarado.
    const { state, dispatch } = useForm();

    useEffect(() => {                                             //Assim que entrar na reda, roda isso:
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email && state.linkedin && state.github !== '') {
            console.log(state);
        } else {
            alert('Preencha todos os campos com os dados!');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setLinkedin,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        });
    }

    return (
        <>
            <Theme>
                <C.Container>
                    <p className='ppp'>Passo 3/3</p>
                    <h1>Legal {state.name}, onde te achamos?</h1>
                    <p>Preencha com seus contatos para entrarmos em contato.</p>
                    <hr />

                    <label>
                        Qual seu e-mail?
                        <input
                            type='text'
                            value={state.email}
                            onChange={handleEmailChange}
                        />
                    </label>

                    <label>
                        Qual seu Linkedin?
                        <input
                            type='text'
                            value={state.linkedin}
                            onChange={handleLinkedinChange}
                        />
                    </label>

                    <label>
                        Qual seu GitHub?
                        <input
                            type='text'
                            value={state.github}
                            onChange={handleGithubChange}
                        />
                    </label>

                    <Link to='/step2' className='backButton'>Voltar</Link>
                    <button className='button-class' onClick={handleNextStep}>Finalizar Cadastro</button>
                </C.Container>
            </Theme>
        </>
    )
}