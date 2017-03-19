import React, { Component, PropTypes } from 'react';

const Prompt = (props) => {
  return (
    <div className="jumpbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.submitUser}>
          <div className="form-group">
           <input 
            className="form-control" 
            placeholder="Github username" 
            type="text" 
            onChange={props.updateValue}
            value={props.username}
          />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
           <button className="btn btn-block btn-success" type="submit">Continue</button> 
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  submitUser: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default Prompt;