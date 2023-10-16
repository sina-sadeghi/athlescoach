import React from 'react';

const Button = props => {

    const action = () => {

    }

    switch (props.type) {
        case 'disable':
            return <div tabIndex={0} className={'rounded p-2 border-2 border-third_color' +
            ' text-slate-100 text-lg cursor-not-allowed text-center'}>
                {props.children}</div>
        case 'cancel':
            return <div tabIndex={0} className={'rounded p-2 border-2 border-third_color bg-background text-text' +
            ' text-slate-100 text-lg cursor-pointer text-center'}
                        onClick={props.onClick} onKeyDown={e => e.key === 'Enter' ? () => props.onClick : false}>
                {props.children}</div>
        case 'ok':
        default:
            return <div tabIndex={0} className={'rounded p-2 bg-third_color hover:bg-third_color-light' +
            ' text-slate-100 text-lg cursor-pointer text-center'}
                        onClick={props.onClick} onKeyDown={e => e.key === 'Enter' ? () => props.onClick : false}>
                {props.children}</div>
    }
}
export default Button;