import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';

export const RouterComponent = () => {
    return (
        <>
            <Router>                                              {/*Tudo q está aqui dentro pode trabalhar com as Rotas*/}
                <Routes>
                    <Route path="/" element={<FormStep1 />} />    {/*path é a url que terá lá em cima*/}
                    <Route path='step2' element={<FormStep2 />} />
                    <Route path='step3' element={<FormStep3 />} />
                </Routes>
            </Router>
        </>
    )
}

//react router v6 doesn't support exact anymore.
// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} />