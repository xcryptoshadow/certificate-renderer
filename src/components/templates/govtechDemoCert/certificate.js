import PropTypes from "prop-types";
import { format } from "date-fns";
import { get } from "lodash";
import React from "react";
import { certificateBg } from "./common/backgrounds";
import "./common/demoStyles.scss";

const Template = ({ document }) => (
  <div
    className="p-2 container"
    style={{
      // backgroundImage: `url('${certificateBg}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      border: "10px solid #324353"
    }}
  >
    <div
      className="p-2"
      style={{
        border: "0px solid #324353"
      }}
    >
      <div className="my-5 m-lg-5 text-center">
        <img
          // src={require("./common/blg.jpg")}
          src={
            document.additionalData.imageUrl
            ?
            document.additionalData.imageUrl
            :
            require("./common/convergence.png")
          }
          alt="BLG Logo"
          style={{ maxHeight: "300px", maxWidth: "1000px" }}
        />
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-body"
        style={{ textAlign: "center" }}
      >
        <i>This is to certify that</i>
      </div>
      <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title">
        <b>{document.recipient.name}</b>
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-body"
        style={{ textAlign: "center" }}
      >
        <i>has successfully completed</i>
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-title"
        style={{ textAlign: "center" }}
      >
        {document.name}
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-body"
        style={{ textAlign: "center" }}
      >
        <i>
          issued by <b>{document.issuers[0].name}</b> at <b>{document.issuers[0].identityProof.location}</b></i>
      </div>
      <div className="row">
        <div className="col" />
        <div className="col">
          <img
            className="w-100"
            style={{ width: "100%", height: "auto", minWidth: "100px" }}
            src={
              document.additionalData.issuerImageUrl
              ?
              document.additionalData.issuerImageUrl
              :
              require("./common/convergence.png")
            }
            alt="BLG Logo"
          />
        </div>
        <div className="col" />
      </div>

      <div
        className="row"
        style={{
          paddingLeft: "8%",
          paddingTop: "2%"
        }}
      >
        <div className="col text-center transcript">
          <img
            style={{ width: "70%", height: "auto" }}
            src={require('./common/chami-sig.png')}
          />
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#333"
            }}
          />
          <div style={{fontSize: 12}}>
            <b>Chami Akmeemana</b>
            <br />
            Chief Executive Officer
            <br />
            Blockchain Learning Group Inc.
            {/* <b>{get(document, "additionalData.certSignatories[0].name")}</b>
            <br />
            {get(document, "additionalData.certSignatories[0].position")},{" "}
            {get(document, "additionalData.certSignatories[0].organisation")} */}
          </div>
        </div>

        <div className="col" />

        <div
          className="d-flex flex-row-reverse col transcript"
          style={{
            paddingTop: "5%",
            paddingRight: "5%"
          }}
        >
          Dated {format(document.issuedOn, "DD/MM/YYYY")}
        </div>
      </div>
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};
export default Template;
