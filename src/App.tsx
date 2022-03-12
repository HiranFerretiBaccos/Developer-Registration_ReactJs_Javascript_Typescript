//Aqui só terá basicamente o RouterComponent e dentro de cada Componente específico que vamos estilizar.
import { RouterComponent } from './RouterComponent';
import { FormProvider } from './contexts/FormContext';

const App = () => {
  return (
    <>
      <FormProvider>                  {/*Vai criar o Ambiente em que todo o Sistema estará dentro do Provider*/}
        <RouterComponent />
      </FormProvider>
    </>
  )
}

export default App;