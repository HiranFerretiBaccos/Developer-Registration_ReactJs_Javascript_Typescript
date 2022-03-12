import styled from 'styled-components';

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #999;
    }

    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 20px 0;
    }

    label{
        font-size: 13px;

        input{
            display: block;
            margin-top: 6px;
            border-box: box-sizing;
            width: 100%; 
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            background-color: #02044A;
            color: #FFF;
            outline: 0;
            font-size: 15px;
        }
    }

    button{
        background-color: #25CD89;
        color: #FFF; 
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 1rem;

        &:hover{
            background-color: rgb(0, 160, 160);
        }
    }

    .backButton{
        background-color: #777;
        color: #FFF; 
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 1rem;
        margin-right: 1.4rem;
        text-decoration: none;

        &:hover{
            background-color: #555;
        }
    }
`;