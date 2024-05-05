import React from 'react'
import { joinClassName } from '../../../src/shared/utils'
import { VISIBLE, ZIPPED } from '../../../src/shared/constant'

export const MultiStateButton = ({name, statesClass, state, onClick, label}: any) => {
  const onClickBtn = () => {
    const newState = ![VISIBLE, ZIPPED].includes(state)
    onClick({
      name,
      checked: newState
    })
  }

  const className = joinClassName({
    'w-44 h-32 f-weight-700 br-5 mh-10': true,
    [statesClass[state]]: true
  })

  return (
    <button
      className={className}
      data-cy={`checkbox-${name}`}
      onClick={onClickBtn}
    >
      {label || name }
    </button>
  )
}

export const isOn = (value: string) => value === 'on'

const statesClassOrange = {
  on: 'bg-teal-500',
  off: 'bg-teal-100'
}

export const MultiStateButtonTealOnOff = ({cyId, name, onClick, state, label}: any) => {
  const onClickBtn = () => {
    onClick({
      name,
      value: state === 'on' ? 'off' : 'on'
    })
  }

  const className = joinClassName({
    'h-32 f-weight-700 br-5 mh-10': true,
    [statesClassOrange[state]]: true
  })

  return (
    <button
      className={className}
      data-cy={`${cyId}`}
      onClick={onClickBtn}
    >
      {label}
    </button>
  )
}
