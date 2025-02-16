import React from "react";
import Button from '@mui/material/Button';

const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2     ">
      


      <div className="bg-blue-400 rounded shadow-md p-10 m-2">
            <div>{title}?</div>
            <div className="flex justify-between ">
            <div className="text-2xl pt-4 font-bold">{amount}</div>
            {orderCount ? (
                <div className="flex cursor-pointer underline font-medium  flex-col justify-center">
                <div>
                    <div className="text-blue-800">
                    {orderCount} order(s) {">"}
                    </div>
                </div>
                </div>
            ) : null}
            </div>
      </div>
      <div className="bg-white rounded shadow-md p-10 m-2 ">
            <div>{title}?</div>
            <div className="flex justify-between ">
            <div className="text-2xl pt-4 font-bold">{amount}</div>
            {orderCount ? (
                <div className="flex cursor-pointer underline font-medium  flex-col justify-center">
                <div>
                    <div className="text-blue-800">
                    {orderCount} order(s) {">"}
                    </div>
                </div>
                </div>
            ) : null}
            </div>
      </div>
      <div className="bg-white rounded shadow-md p-10 m-2">
            <div>{title}?</div>
            <div className="flex justify-between ">
            <div className="text-2xl pt-4 font-bold">{amount}</div>
            {orderCount ? (
                <div className="flex cursor-pointer underline font-medium  flex-col justify-center">
                <div>
                    <div className="text-blue-800">
                    {orderCount} order(s) {">"}
                    </div>
                </div>
                </div>
            ) : null}
            </div>
      </div>

      
    </div>
  );
};

export default RevenueCard;
