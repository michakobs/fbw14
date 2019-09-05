import React from 'react';

class MyHeading extends React.Component {
    render() {
        const titles = ['A header will be rendered!!!!!', 'second Title', 'third Title'];
        const showParagraph = false;
        return (/**statt DIV */
            <React.Fragment>
                <h1>{titles[0]}</h1>
                {/* Kommentar im React */}
                {titles.map((title, index) => <h1 key={index}> {title} </h1>)}
                {/* Conditional im React */}
                {showParagraph && <p>A paragraph will be added</p>}
            </React.Fragment>
        );/**statt DIV */
    }
}

export default MyHeading;