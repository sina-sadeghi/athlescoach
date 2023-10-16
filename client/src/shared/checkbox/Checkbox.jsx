import React from 'react';

const Checkbox = ({value, action}) => {
    return <input  checked={value} onClick={action}
        className="checkbox appearance-none w-5 h-5 border-2 border-third_color rounded bg-transparent inline-block relative mr-2.5 cursor-pointer before:content-[''] before:bg-third_color before:block before:absolute before:top-2/4 before:left-2/4 before:w-2.5 before:h-2.5 before:rounded-sm before:transform before:-translate-y-2/4 before:-translate-x-2/4 before:scale-0 before:transition-all before:duration-300 before:ease-in-out checked:before:transform checked:before:-translate-y-2/4 checked:before:-translate-x-2/4 checked:before:scale-100"
        type="checkbox"/>
}
export default Checkbox;