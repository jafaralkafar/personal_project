import styled from 'styled-components'

export const FullStoryCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    background: white;
    border-radius: 6px;
    border: 1px solid black;
    color: black;
    box-shadow: 5px 10px 18px #888888;
    width: 99%;
    padding: 10px;
    margin: 1px;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`