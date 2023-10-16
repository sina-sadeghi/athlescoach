import React, {useState} from 'react';

const Filed = props => {

    const [pass, setPass] = useState('password')

    const showFiled = (type) => {
        if (type === 'text' || type === 'phone')
            return <div><input type={props.type} className={'border-b-2 focus-visible:outline-0 bg-text'} dir={'auto'}
                               onChange={props.change} value={props.value}/> <i className="fa-thin fa-user"/></div>
        if (type === 'password')
            return (
                <div><input
                    type={pass} className={'border-b-2 focus-visible:outline-0 bg-text'} dir={'auto'}
                    onChange={props.change} value={props.value}/>
                    {pass === 'password' && <span onClick={() => setPass('text')} className={'px-1 cursor-pointer'}>
                        <i className="fa-thin fa-eye"/></span>}
                    {pass === 'text' && <span onClick={() => setPass('password')} className={'px-1 cursor-pointer'}>
                        <i className="fa-thin fa-eye-slash"/></span>}</div>
            )
    }

    return (
        <div className={'flex flex-row px-7 py-6'}>
            <div className={'basis-1/3 text-text-background'}>
                <span>
                    {props.name}
                </span>
            </div>
            <div className={'basis-2/3 text-center'}>
                {showFiled(props.type)}
            </div>
        </div>
    )
}
export default Filed;