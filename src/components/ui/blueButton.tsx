import React from "react";

interface Props {
  btn_text: any;
}

const BlueButton: React.FC<Props> = ({ btn_text }) => {
  return (
    <div
      className={` px-24 py-3 bg-[#1B88F4] hover:bg-[#1B88F4]/80 rounded-lg text-center text-white cursor-pointer `}
    >
      {btn_text}
    </div>
  );
};

export default BlueButton;
