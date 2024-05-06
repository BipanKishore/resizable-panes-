import React from 'react'
import { joinClassName } from '../../../src/shared/utils'
import { VISIBLE, ZIPPED } from '../../../src/shared/constant'


const stateClass: any = {
  hidden: 'text-slate-700 ',
  ring: '', //'ring-cyan-950',
  zipped: 'text-lime-500 border-lime-500',
  container: 'bg-cyan-300',
  visible: 'text-green-900 border-green-900',
}

export const MultiStateButton = ({ name, className, statesClass, state, onClick, label, sizeStates }: any) => {
  const onClickBtn = () => {
    const newState = ![VISIBLE, ZIPPED].includes(state)
    onClick({
      name,
      checked: newState
    })
  }

  const className1 = joinClassName({
    [className]: true,
    ' md:font-bold md:py-2 md:px-4 md:mx-4 mx-2 px-2 rounded border-solid border-b-4': true,
    [stateClass[state]]: true
  })

  const secondryLabel = sizeStates[name]
  const secondryLabelSize = sizeStates[name + 'Size']

  const secondryLabelClass = joinClassName({
    'text-blue-700': secondryLabel === 'Min',
    'text-red-700': secondryLabel === 'Max',
  })

  return (
    <button
      className={className1}
      data-cy={`checkbox-${name}`}
      onClick={onClickBtn}
    >
      {label || name}
      <div className={secondryLabelClass}>
        <div >{secondryLabel}
        </div>
        <div>{secondryLabelSize}</div>
      </div>
    </button>
  )
}

export const isOn = (value: string) => value === 'on'

const statesClassOrange = {
  on: 'bg-teal-500',
  off: 'bg-teal-100'
}

type IOnOff = 'on' | 'off'

