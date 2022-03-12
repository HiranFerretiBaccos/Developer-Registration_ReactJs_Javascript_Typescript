import * as C from './styles';

type Props = {
    title: string,
    description: string,
    icon: string,
    selected: boolean,
    onClick: () => void
}

export const SelectOption = ({ title, description, icon, selected, onClick }: Props) => {        //5 props tipadas acima, chamadas aqui na 1ª Etapa e abaixo na 2ª
    return (
        <>
            <C.Container onClick={onClick} selected={selected}>
                <C.Icon>{icon}</C.Icon>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
            </C.Container>
        </>
    )
}