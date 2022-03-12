//CONTEXT - A Caixinha que vai Armazenar os Dados dentro.
//REDUCER - Se já estudou React um pouquinho mais avançado sabe oq que é um Reducer: Basicamente é um cara que 
//executa ações específicas. Ex: Quero fazer tal coisa... Ele terá lá um agrupamento de ações/funções especificamente para isso.
//PROVIDER - Basicamente o Ambiente e dentro desse ambiente eu tenho acesso aos meus Dados/Dados do meu contexto.
//HOOK.

import { createContext, useContext, useReducer, ReactNode } from "react";
//Cria o contexto e Usa o contexto(Já são nativos dentro da Biblioteca do React), Cria/Usa o reducer.

type State = {                                                               //7ª type para o meu 'state', 1ª Parâmetro do formReducer.
    currentStep: number;                                                     //Os  Valores que tem lá no state.
    name: string;
    level: 0 | 1;
    email: string;
    linkedin: string;
    github: string;
};

type Action = {                                                              //8ª type para o meu 'action', 2ª Parâmetro do formReducer.
    type: FormActions;                                                       //O 'action' tem o 'type' e o 'payload' apenas. O 'type' recebe meu enum FormActions que é um Objeto com esses Estados aí.
    payload: any;
};

type ContextType = {                                                         //9ª type que vai para o meu formContext que recebe o 'createContext'
    state: State;                                                            //o formContext recebe um value com o 'state' e o 'dispatch'. É aí que liga.
    dispatch: (action: Action) => void;
};

type FormProviderProps = {                                                  //10ª type para o 'children' do formProvider parar de reclamar.
    children: ReactNode;
}

const initialData: State = {                                                 //5ª Um Objeto que dá os Dados Iniciais aos valores do Reducer abaixo.
    currentStep: 0,                                                          //Esse Objeto será do tipo 'State', criado acima para tipar o 'state', parâmetro do formReducer.
    name: '',
    level: 0,
    email: '',
    linkedin: '',
    github: '',
}

//Crio o CONTEXT com 'createContext'                                     
const FormContext = createContext<ContextType | undefined>(undefined);       //1ª Precisa de um valor padrão inicial.

export enum FormActions {                                                    //2ª enum é JS. Enumeração/Enumerações vem do ato de listar/contar de 1 a 1. Será USADO ABAIXO.
    setCurrentStep,                                                          //Aqui diz qual o passo atual etc.
    setName,
    setLevel,
    setEmail,
    setLinkedin,
    setGitHub,
}

//REDUCER
const formReducer = (state: State, action: Action) => {                     //3ª Recebe os Dados(state) e qual ação eu quero executar nesses dados(action).
    switch (action.type) {                                                  //Digo qual é o tipo(type) da minha ação.
        case FormActions.setCurrentStep:                                    //Caso(case) seja meu Objeto Enumerado (FormActions) e os valores passados nele...
            return { ...state, currentStep: action.payload };               //Retorno(Reducer sempre retorna os dados) um Clone do meu (state/dados) com Spread Operador... e troco apenas o valor passado(currentStep). Payload é basicamente os dados.
        //Retorno um Novo (state) com o currentStep Modificado.
        case FormActions.setName:                                           //Ou seja, (action.type é a ação que eu quero executar) que vem logo em seguida com o (case/Caso) e Payload é qual dado/informação eu quero mandar/executar.
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setLinkedin:
            return { ...state, linkedin: action.payload };
        case FormActions.setGitHub:
            return { ...state, github: action.payload };
        default:                                                            //Se ñ existe essa action/ação, retorna do jeito que tá.
            return state;
    }
}

//4ª PROVIDER - Ambiente que vai Gerenciar os Dados. 
//PROVIDER vai pro App.tsx acima do 'RouterComponent', sendo um Componente Principal/Pai e trará dentro dele um Ambiente que dará acesso aos Dados do Contexto.
export const FormProvider = ({ children }: FormProviderProps) => {          //{children} é React Básico. Possibilita chamar props Filhas lá no App.

    const [state, dispatch] = useReducer(formReducer, initialData);         //Uso padrão do Reducer pelo React: 'state' e 'dispatch' 
    //Eles recebem o 'useReducer()' trazendo o 'formReducer' criado manualmente acima e os Dados iniciais(Ñ os 'set') criado lá em cima e aqui como 2ª Parâmetro.
    //Em 'state' eu tenho os Dados e em 'dispatch' eu tenho uma Função que executa as ações.

    const value = { state, dispatch };                                      //Uma const que é um Objeto que recebe esses 2 carinhas. 

    return (
        <FormContext.Provider value={value} >                               {/*Recebe um 'value' Oficial com a minha const 'value' q possui os 2 items */}
            {children}
        </FormContext.Provider>
    )
}

//6ª Já criei o CONTEXT com 'createContext' acima e aqui eu Uso o CONTEXT com o 'useContext'.
export const useForm = () => {
    const context = useContext(FormContext);                           //(useContext) recebe meu FormContext criado que já recebeu o (createContext)
    if (context === undefined) {                                       //Ou seja, se estiver fora do meu Provider(Se tiver fora vem como undefined)
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}