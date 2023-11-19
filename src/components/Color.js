import React, { useState } from "react";

const Color = (props) => {
  const { colorData, setcolor } = props;
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
    setcolor(colorId);
  };
  return (
    <ul className="colors ps-0">
      {colorData &&
        colorData?.map((item, index) => {
          return (
            <li
              onClick={() => handleColorClick(item?._id)}
              style={{
                backgroundColor: item?.title,
                border:
                  selectedColor === item?._id
                    ? "3px solid gray"
                    : "none",
              }}
              key={index}
            ></li>
          );
        })}
    </ul>
  );
};

export default Color;
