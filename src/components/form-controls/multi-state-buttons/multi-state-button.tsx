import React from "react";
import { VISIBLE, ZIPPED } from "../../../shared/constant";
import { joinClassName } from "../../../shared/utils";

const stateClass: any = {
  hidden: "text-slate-700 ",
  ring: "", //'ring-cyan-950',
  zipped: "text-lime-500 border-lime-500",
  container: "bg-cyan-300",
  visible: "text-green-900 border-green-900",
};

export const MultiStateButton = ({
  name,
  className,
  state,
  onClick,
  label,
}: any) => {
  const onClickBtn = () => {
    const newState = ![VISIBLE, ZIPPED].includes(state);
    onClick({
      name,
      checked: newState,
    });
  };

  const className1 = joinClassName({
    [className]: true,
    " md:font-bold md:py-1 md:px-4 md:mx-4 mx-2 px-2 rounded border-solid border-b-4":
      true,
    [stateClass[state]]: true,
  });

  return (
    <button
      className={className1}
      data-cy={`checkbox-${name}`}
      onClick={onClickBtn}
    >
      {label || name}
    </button>
  );
};
