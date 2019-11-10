import React, { Component } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import SimplePrivacyFilterBanner from "../../TemplateCommon/Privacy/SimplePrivacyFilterBanner";
import ObfuscatableValue from "../../TemplateCommon/Privacy/ObfuscatableValue";
import { formatDate } from "./common/functions";
import { transcriptBg } from "./common/backgrounds";
import "./common/demoStyles.scss";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
  }

  render() {
    const { editable } = this.state;
    const { document, handleObfuscation } = this.props;
    const documentName = get(document, "name");
    const documentId = get(document, "id");
    const issuanceDate = get(document, "issuedOn");
    const admissionDate = get(document, "admissionDate");
    const graduationDate = get(document, "graduationDate");

    const recipientName = get(document, "recipient.name");
    const recipientNric = get(document, "recipient.nric");
    const recipientCourse = get(document, "recipient.course");
    const studentId = get(document, "additionalData.studentId");

    const transcriptData = get(document, "transcript", []);

    const transcriptSection = transcriptData.map((t, i) => (
      <tr key={i}>
        <td>
          <ObfuscatableValue
            editable={editable}
            field={`transcript[${i}].courseCode`}
            value={t.courseCode}
            handleObfuscation={handleObfuscation}
          />
        </td>
        <td>
          <ObfuscatableValue
            editable={editable}
            field={`transcript[${i}].name`}
            value={t.name}
            handleObfuscation={handleObfuscation}
          />
        </td>
        <td>
          <ObfuscatableValue
            editable={editable}
            field={`transcript[${i}].grade`}
            value={t.grade}
            handleObfuscation={handleObfuscation}
          />
        </td>
        <td>
          <ObfuscatableValue
            editable={editable}
            field={`transcript[${i}].courseCredit`}
            value={t.courseCredit}
            handleObfuscation={handleObfuscation}
          />
        </td>
        <td>
          <ObfuscatableValue
            editable={editable}
            field={`transcript[${i}].semester`}
            value={t.semester}
            handleObfuscation={handleObfuscation}
          />
        </td>
      </tr>
    ));

    return (
      <div className="container">
        <SimplePrivacyFilterBanner
          toggleEditable={() => this.setState({ editable: !editable })}
        />
        <div
          className="p-2 container"
          style={{
            backgroundImage: `url('${transcriptBg}')`,
            backgroundRepeat: "repeat"
          }}
        >
          <div className="row root cert-title" style={{ paddingLeft: "3%" }}>
            <b>{documentName}</b>
          </div>

          <div
            className="row transcript"
            style={{
              paddingTop: "3%",
              paddingLeft: "2%"
            }}
          >
            <div className="col">
              <div className="row">
                <div className="col">NAME</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {recipientName}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">DOCUMENT ID</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {documentId}
                </div>
              </div>
              <div className="row">
                <div className="col">DATE OF ISSUANCE</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {formatDate(issuanceDate)}
                </div>
              </div>
            </div>
          </div>

          {transcriptData !== [] && (
            <div
              className="row mb-4"
              style={{ paddingLeft: "3%", paddingTop: "5%" }}
            >
              <div className="root cert-title">
                <b>Transcript</b>
              </div>
              <table className="w-100 transcript">
                <tbody>
                  <tr>
                    <th>Unit</th>
                    <th>Name</th>
                    <th>Grade</th>
                  </tr>
                  {transcriptSection}
                </tbody>
              </table>
            </div>
          )}

          <div className="row">
            <div className="col">
              {/* <img
                className="w-100"
                style={{
                  paddingTop: "40%",
                  paddingLeft: "3%",
                  width: "100%",
                  height: "auto"
                }}
                src={require("./common/blg.jpg")}
                alt="Govtech Logo"
              /> */}
            </div>
            <div className="col" />
            <div
              className="col text-center"
              style={{
                paddingTop: "5%",
                paddingRight: "5%",
                width: "100%",
                height: "auto"
              }}
            >
              {/* <img
                className="w-100"
                src={require('./common/chami-sig.png')}
              />
              <hr className="m-1" />
              <div className="transcript" style={{fontSize: 12}}>
                <b>Adam Lemmon</b>
                <br />
                VP, Technology and Operations
                <br />
                Blockchain Learning Group Inc.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Template.propTypes = {
  document: PropTypes.object.isRequired,
  handleObfuscation: PropTypes.func
};

export default Template;
