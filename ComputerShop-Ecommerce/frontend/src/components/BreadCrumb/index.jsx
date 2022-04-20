import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "react-bootstrap";


const BreadCrumb = () => {
    return (
        <div>
            <h5>Tags</h5>
            <Breadcrumb className="sm">
                <BreadcrumbItem><a href="/"><Button variant="primary">Home</Button>{' '}</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/"><Button variant="primary">Laptop</Button>{' '}</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/"><Button variant="primary">Dekstop</Button>{' '}</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/"><Button variant="primary">Mouse</Button>{' '}</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/"><Button variant="primary">Keyboard</Button>{' '}</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/"><Button variant="primary">Monitor</Button>{' '}</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/"><Button variant="primary">Headphone</Button>{' '}</a></BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}


export default BreadCrumb;