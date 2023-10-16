import React from 'react';

const Form = props => {

    return (
        <div className={'rounded m-auto border-4 border-third_color bg-third_color'}>
            <div className={'text-center bg-third_color p-1 text-xl text-background'}>
                {props.title}
            </div>
            <div className={'rounded text-background bg-text pt-0.5 py-3'}>
                {props.children}
            </div>
        </div>
    )
}

export default Form;