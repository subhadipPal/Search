import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { performSearch } from "../../actions";
import "./SearchForm.css";

class SearchForm extends React.PureComponent {
  state = {
    isWaitingForTimeout: false,
    timeoutId: null
  };
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <div className={className}>
          <label className="label">{label}: </label>
          <input className="input" {...input} autoComplete="off"></input>
        </div>
        {this.renderError(meta)}
      </div>
    );
  };
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="error-msg-cls">{error}</div>;
    }
  };
  handleChange = (e, newValue) => {
    newValue = newValue.trim();
    if (!newValue) {
      return;
    }
    const { performSearch } = this.props;
    if (this.state.isWaitingForTimeout) {
      clearTimeout(this.state.timeoutId);
    }
    let timeoutId = setTimeout(() => {
      this.setState({ isWaitingForTimeout: false });
      performSearch(newValue);
    }, 2000);
    this.setState({ isWaitingForTimeout: true, timeoutId: timeoutId });
  };
  render() {
    const { fieldLabel } = this.props;
    if (fieldLabel) {
      return (
        <Field
          name="searchField"
          label={fieldLabel}
          component={this.renderInput}
          onChange={this.handleChange}
        />
      );
    } else {
      return "Loading...";
    }
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.searchField) {
    errors.searchField = "*Search Field can not be empty.";
  }
  return errors;
};

var wrappedForm = reduxForm({
  form: "search-form",
  validate
})(SearchForm);

var mapStateToProps = state => {
  return {
    searchResults: state.search
  };
};

export default connect(mapStateToProps, { performSearch })(wrappedForm);
