import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    border-radius: 6px;
    border: 1px solid black;
    color: black;
    box-shadow: 5px 10px 18px #888888;
    width: 30%;
    padding: 10px;
    margin: 1px;
    height: auto;
    object-fit: contain;
    transition: all .2s ease-in-out;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }

    :hover {
        transform: scale(1.1)
    }

    @media screen and (max-width:900px) {
        font-size: .85em;
        width: 75%;
    }
`