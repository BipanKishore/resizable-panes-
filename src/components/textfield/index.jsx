import React from 'react'

export default function TextField(props) {
    const { label, placeholder, id, type = 'text',
        value, onChange, className } = props



    const onTextChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className={` ${className}`}>
            <div>
                <label
                    htmlFor={id}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                </label>
                <input
                    value={value}
                    onChange={onTextChange}
                    type={type}
                    id={id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 active:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}