import React from "react";
import styled from "styled-components"

const Button = styled.button`
    border: 2px solid black;
    background-color: aliceblue;
    color: aqua;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: aquamarine;
    color: dodgerblue;
    border-radius: 10px;

    &:hover {
        background: aquamarine;
        color: white;
    }
`;

 export default class Styled extends React.Component {

    render() {
        return (
            <div>
                <Button>Go Eduwork</Button>
            </div>
        )
    }
}