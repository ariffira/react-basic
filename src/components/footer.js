import React from 'react';

class Footer extends React.Component{
    render() {
        const footer_style = {
           color: 'green',
           background: 'grey',
           fontSize: '32px'
        }
        return (
            <div>
                <h1 style={footer_style}> 
                    Footer Page Here. copyright @2018, made by 
                    arif
                </h1>
            </div>
        );
    }
}

export default Footer;