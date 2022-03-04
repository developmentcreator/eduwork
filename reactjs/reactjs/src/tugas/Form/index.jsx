import React from "react";
import FormElement from "./Validasi/FormElement";
import Validation from "./Validasi/Validation";

export default class Form extends React.Component { 
    render() { 
        return (
            <div>
                <FormElement />
                <Validation />
            </div>
        )
    }
}