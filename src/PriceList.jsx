import "remixicon/fonts/remixicon.css";
import "./App.css";
import React from "react";

function PriceList(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <h5>{props.plan}</h5>
            <h1>${props.price}/month</h1>
          </div>
          <div className="content">
            <h6>
              <i className="ri-check-fill"></i> {props.user}
            </h6>
            <h6>
              <i className="ri-check-fill"></i> {props.storage}
            </h6>
            <h6>
              <i className="ri-check-fill"></i> {props.publicProjects}
            </h6>
            <h6>
              <i className="ri-check-fill"></i> {props.communityAccess}
            </h6>
            <h6
              style={{
                color: props.isPrivateProjects && true ? "black" : "gray",
              }}
            >
              {props.isPrivateProjects && true ? (
                <i className="ri-check-fill"></i>
              ) : (
                <i className="ri-close-fill"></i>
              )}{" "}
              Unlimited Private Projects
            </h6>
            <h6
              style={{ color: props.isPhoneSupport && true ? "black" : "gray" }}
            >
              {props.isPhoneSupport && true ? (
                <i className="ri-check-fill"></i>
              ) : (
                <i className="ri-close-fill"></i>
              )}{" "}
              Dedicated Phone Support
            </h6>
            <h6 style={{ color: props.isSubDomain && true ? "black" : "gray" }}>
              {props.isSubDomain && true ? (
                <i className="ri-check-fill"></i>
              ) : (
                <i className="ri-close-fill"></i>
              )}{" "}
              Free Subdomain
            </h6>
            <h6 style={{ color: props.isReports && true ? "black" : "gray" }}>
              {props.isReports && true ? (
                <i className="ri-check-fill"></i>
              ) : (
                <i className="ri-close-fill"></i>
              )}{" "}
              Monthly Status Reports
            </h6>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceList;
