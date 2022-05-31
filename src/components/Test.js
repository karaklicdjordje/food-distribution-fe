import React, { useState, useEffect } from 'react';
import TestService from "../services/test.service";

const Test = () => {
    const [content, setContent] = useState("")
    useEffect(() => {
        TestService.getTestContext().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = 
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        )
    }, []);
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    )
}

export default Test;