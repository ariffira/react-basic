import React from 'react';

// functional component
const Basic = ()=> {
    return (
        <p>
            Basic: This is My first React app. Hello world!!
            {
              //comments using curly brackets which not work in one line
            }
            {/** multi line comments in one line possible */}

            { /** JS should be in curly brackets */}
            Javascript result: {1+1} or string result: 1+1
        </p>
    );
}

export default Basic;