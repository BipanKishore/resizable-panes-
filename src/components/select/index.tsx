import React from "react";
import { IPaneBgClass } from "../../shared/types";

export interface ISelectList {
    label: string,
    value: any,
    paneClasses?: IPaneBgClass,
    [key: string]: any
}

interface ISelect {
    id: string,
    label?: string,
    className?: string,
    value: any,
    onChange: any,
    list: ISelectList[]
}

export const Select = (props: ISelect) => {
    const { id, label, value, onChange, list, className } = props

    const onChangeSelect = (e: any) => {
        const value = list.find((item) => item.label === e.target.value)
        onChange(value)
    }

    return (
        <div className={className}>
            {label && <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>}
            <select
                value={value.label}
                id={id}
                onChange={onChangeSelect}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {
                    list.map(({ label }) => (
                        <option
                            key={label}
                            value={label}
                        >
                            {label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}