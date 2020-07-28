import React from "react";
import _ from "lodash";

const ErrorText = ({ email, password, confirm_password, err }) => {
  const text = (() => {
    if (!email) {
      return "Please fill in the email field.";
    } else if (!password) {
        return "Please fill in the password field."
    } else if (!_.isUndefined(confirm_password) && !confirm_password) {
        return "Please confirm your password."
    } else if (err) {
        if (err.status === 401) {
            return "Email or password is incorrect. Please try again."
        } else {
          return "An error has occured. Please try again later."
        }
    }
  })();

  return !_.isEmpty(err) ? <p style={{ color: "#ca0000" }}>{text}</p> : null;
};

export default ErrorText;
