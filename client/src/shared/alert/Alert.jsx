import React, {useEffect} from 'react';
import disableScroll from 'disable-scroll';

const Alert = props => {
    useEffect(() => {
        disableScroll.on();
    }, [])

    useEffect(() => () => {
        disableScroll.off();
    }, [])

    return <div>
        <span className={'fixed top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-10'}
              onClick={e => props.onClick && props.onClick(false, e)}/>
        <div className={`w-5/6 fixed z-20 md:w-[calc(700px)] m-auto opacity-95 ${props.top || ''}`}
             onClick={e => props.onClick && props.onClick(true, e)}>
            <div className={'rounded m-auto border-4 border-third_color bg-third_color'}>
                <i className="fa-regular fa-circle-xmark float-left ml-3 cursor-pointer text-xl text-background my-2"
                   onClick={e => props.onClick && props.onClick(false, e)}/>
                <h3 className={'text-center bg-third_color mb-1 p-1 text-xl text-background'}>{props.header}</h3>
                <div className="rounded text-background bg-text pt-0.5 py-3">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
}

export default Alert;