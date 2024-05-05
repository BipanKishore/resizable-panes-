import React from "react"

interface IRatioList  {
    label: string,
    value: any,
    cyId: string
}

interface IToggle {
    formValues: any,
    name: string,
    onChange: any,
    list: IRatioList[]
}

export const Radios = ({ name, formValues, onChange, list }: IToggle) => {

    const selectedValue = formValues[name]

    const onChangeCheckBox = (e: any) => {
        const val = e.target.value
        onChange({
            name,
            value: [true, 'true'].includes(val)
        })
    }

    return (
        <div className="flex">
            {list.map(({cyId, label, value}) => {
                return (
                    <div className="flex items-center me-4">
                    <input
                        data-cy={cyId}
                        type="radio" 
                        checked={value === selectedValue}
                        value={value}
                        name={value}
                        onClick={onChangeCheckBox}

                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {label}
                    </label>
                </div>
                )
            })}

        </div>
    )
}

