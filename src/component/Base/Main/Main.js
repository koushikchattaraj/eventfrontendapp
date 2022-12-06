import React from "react";
import { setBusinessCategory } from "../../../redux/action/action";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";

export const Main = () => {
  const dispatch = useDispatch();
  // dispatch(setBusinessCategory(['test','test']))
  const businessCategory = useSelector((state) => state.businessCategory);
  return (
    <div className="maincontainer">
      {businessCategory.map((category, key) => {
        return (
          <div key={key} className="bg1">
            <h2>
              {/* <i className="fas fa-battery-three-quarters"></i> */}
            </h2>
            <p className="threeD">{category}</p>
          </div>
        );
      })}
    </div>
  );
};
