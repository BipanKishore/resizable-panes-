import { ReactElement } from "react";
import { joinClassName } from "../../shared/utils";

const SkeletonItem = ({ sizeStates, currentSizes, paneId }: any) => {
  const className = joinClassName({
    "text-xs text-center text-xs font-bold": true,
    "text-blue-700": sizeStates[paneId] === "Min",
    "text-red-700": sizeStates[paneId] === "Max",
    "text-slate-600": !["Min", "Max", ""].includes(sizeStates[paneId]),
  });

  return (
    <div
      className={className}
      style={{
        width: `${currentSizes[paneId]}px`,
      }}
    >
      {currentSizes[paneId] !== 0 ? currentSizes[paneId] : ""}
    </div>
  );
};

export const SizeStateBar = (props: any) => {
  const { resizerSize, currentSizes, sizeStates } = props;

  const skeleton: ReactElement[] = [];

  console.log(sizeStates, currentSizes);

  Object.keys(currentSizes).forEach((key, i) =>
    skeleton.push(
      <SkeletonItem
        paneId={key}
        sizeStates={sizeStates}
        currentSizes={currentSizes}
      />,
      <div
        className="h-1"
        style={{
          width: `${resizerSize}px`,
        }}
      ></div>
    )
  );
  skeleton.pop();

  return <div className="flex mt-1 h-4">{skeleton}</div>;
};
