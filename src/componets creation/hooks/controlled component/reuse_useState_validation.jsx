import React, { useState } from "react";
import { mobileValidation, userValidation } from "./validations";
import { indianStates } from "./info";

export const ReuseStateForm = () => {
  const [model, setModel] = useState({
    user: "",
    mobileno: "",
    state: "",
  });

  const [formerr, setFormErr] = useState({
    userErr: "",
    mobileErr: "",
  });

  const [submitteddata, setSubmittedData] = useState([]);

  const onChangeHandler = (event) => {
    // const formValue=event.target.value;
    const { name, value } = event.target;
    setModel({ ...model, [name]: value });

    if (name === "user") {
      const personNameErr = userValidation(value);
      setFormErr((prev) => ({ ...prev, userErr: personNameErr }));
    }
    if (name === "mobileno") {
      const mobileErr = mobileValidation(value);
      setFormErr((prev) => ({ ...prev, mobileErr: mobileErr }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const personNameErr = userValidation(model.user);
    const mobileErr = mobileValidation(model.mobileno);

    setFormErr({
      userErr: personNameErr,
      mobileErr: mobileErr,
    });

    if (!personNameErr && !mobileErr) {
      setSubmittedData((prevdata) => [...prevdata, model]);
      console.log(model);
      setModel({ user: "", mobileno: "", state: "" });
    } 
  };
  const deleteHandler = (index) => {
    const newarray = submitteddata.filter((_, id) => id != index);
    setSubmittedData(newarray);
    console.log(newarray);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h1>Samsung service form</h1>
          <label htmlFor="username">Enter device model</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="user"
            value={model.user}
            onChange={onChangeHandler}
          />

          {formerr.userErr && (
            <span style={{ color: "red" }}>{formerr.userErr}</span>
          )}
        </div>
        <div>
          <label htmlFor="mobilenumber">Enter mobile number</label>
          <input
            type="text"
            className="form-control"
            id="mobilenumber"
            name="mobileno"
            value={model.mobileno}
            onChange={onChangeHandler}
          />
          {formerr.mobileErr && (
            <span style={{ color: "red" }}>{formerr.mobileErr}</span>
          )}
        </div>
        <br></br>
        <div>
          <select
            value={model.state}
            onChange={onChangeHandler}
            name="state"
            style={{ width: "370px" }}
          >
            {indianStates.map((each, index) => {
              return (
                <React.Fragment key={index}>
                  <option value={each.name}>{each.name}</option>
                </React.Fragment>
              );
            })}
          </select>
        </div>
        <br></br>

        <button type="submit" className="btn btn-default border">
          Submit
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>User name</th>
              <th>Mobile no</th>
              <th>State-Population</th>
            </tr>
          </thead>
          <tbody>
            {submitteddata.map((each, index) => {
              return (
                <tr key={index}>
                  <td>{each.user}</td>
                  <td>{each.mobileno}</td>
                  <td>{each.state}</td>
                  <td>
                    {" "}
                    <button
                      style={{ margin: "auto" }}
                      onClick={() => deleteHandler(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </>
  );
};
