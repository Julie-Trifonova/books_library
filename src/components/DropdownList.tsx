import React, {useState} from "react";
import {nanoid} from 'nanoid'

type PropsType = {
    trigger: any,
    menu: any,
}
export const DropdownList: React.FC<PropsType> = ({trigger, menu}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            {React.cloneElement(trigger, {
                onClick: handleOpen,
            })}
            {
                isOpen ? (
                    <ul>
                        {menu.map((menuItem: any) =>
                            <li key={nanoid()}>
                                {React.cloneElement(menuItem, {
                                    onClick: () => {
                                        menuItem.props.onClick();
                                        // setIsOpen(false);

                                    },
                                })}
                            </li> )}
                    </ul>
                ) : null
            }
        </div>
    )
}

// export {DropdownList};