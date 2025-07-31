import React, { useState, ChangeEvent } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

interface PopUpProps {
  setRowToSelect: (count: number) => void;
  isClicked: boolean;
  setisClicked: (value: boolean) => void;
  onSubmit: (count: number) => void;
}

export const PopUp: React.FC<PopUpProps> = ({
  setRowToSelect,
  isClicked,
  setisClicked,
  onSubmit,
}) => {
  const [selectCount, setselectCount] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setselectCount(Number(e.target.value));
  };

  return (
    <div className="relative">
      {isClicked ? (
        <FaAngleDown
          className="cursor-pointer text-2xl"
          onClick={() => setisClicked(!isClicked)}
        />
      ) : (
        <FaAngleUp
          className="cursor-pointer text-2xl"
          onClick={() => setisClicked(!isClicked)}
        />
      )}

      {isClicked && (
        <div className="absolute flex flex-col gap-2 bg-gray-50 border-2 p-3 mt-3 rounded-md">
          <input
            value={selectCount}
            onChange={handleInputChange}
            className="px-3 py-1 bg-gray-150"
            type="number"
            placeholder="Select Rows"
          />
          <button
            className="bg-sky-400 px-3 py-1 rounded-md cursor-pointer"
            onClick={() => onSubmit(selectCount)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
