import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 0;
    cursor: pointer;    

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div`
    flex: 1;
    margin-right: 2rem;
`

export const Title = styled.div`
    text-align: right;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 4px;
    color: #fff;
`

export const Description = styled.div`
    text-align: right;
    font-size: 14px;
    color: #999;
`

export const IconArea = styled.div<{ active: boolean; }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : '#494a7c'};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Point = styled.div<{ active: boolean; }>`
    width: 1rem;
    height: 1rem;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -8px;
    background-color:  ${props => props.active ? '#25cd89' : '#494a7c'};
`