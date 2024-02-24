import { type MouseEventHandler, useRef, useState } from "react";

interface Props {
  value: number;
  setValue: React.Dispatch<number>;
}

const Slider = ({ value, setValue }: Props) => {
  const sliderBarRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(true);
    updateValue(e.clientX);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isDragging) {
      updateValue(e.clientX);
    }
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    setIsDragging(false);
  };

  const updateValue = (clientX: number) => {
    if (sliderBarRef.current === null) return;

    const rect = sliderBarRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newValue = Math.round((offsetX / sliderBarRef.current.offsetWidth) * 100);
    setValue(newValue);
  };

  return (
    <div
      className="relative flex h-1 w-64 items-center rounded-full bg-neutral-300"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      ref={sliderBarRef}
    >
      <div
        className="absolute left-0 top-0 h-1 rounded-full bg-primary-500"
        style={{ width: `${value}%` }}
      />
      <div
        className="absolute top-0 -ml-1 -mt-1 h-3 w-3 rounded-full bg-primary-500"
        style={{ left: `${value}%` }}
      />
    </div>
  );
};

export default Slider;
