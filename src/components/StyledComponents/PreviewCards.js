import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 6px;
    border: 1px solid black;
    color: black;
    box-shadow: 5px 10px 18px #888888;
    width: 25%;
    padding: 10px;
    margin: 1px;
    height: 200px;
    transition: all .2s ease-in-out;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }

    :hover {
        transform: scale(1.1)
    }
`