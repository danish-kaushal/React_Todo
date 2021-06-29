import React from "react";

const Plan = (props) => {
  return (
    <>
      {/* {console.log("plan")} */}
      <div className="row">
      <li className="shadow p-2 my-3 col-md-6 col-9">{props.value}</li>
      <button className="btn btn-danger my-3 col-2 col-md-2 col-lg-1 offset-1 fw-bold" onClick={()=>{props.delete(props.id)}}>-</button>
      </div>
    </>
  );
};
export default Plan;
