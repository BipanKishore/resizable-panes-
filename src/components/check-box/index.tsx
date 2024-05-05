import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import {  faSquare } from '@fortawesome/free-regular-svg-icons'



export const CheckBox = ({ name, formValues, onChange, label }: any) => {

    const state = formValues[name]

    const onClick = () => {
        onChange({
            name,
            value: !state
        })
    }

    return (
        <div className='flex' onClick={onClick} >
            {
                state
                    ? <FontAwesomeIcon icon={faSquareCheck} className='text-cyan-600' size="lg" />
                    : <FontAwesomeIcon icon={faSquare} className='text-slate    -600'size="lg"  />
            }
            <div>
                {label}
            </div>

        </div>
    )
}

