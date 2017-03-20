import React from 'react';

const ConfirmBattle = (props) => {
  let data;
  if (props.isLoading) {
    data = <h1>Loading...</h1>;
  }
  else {
    data = <p>Battle</p>;
  }
  return (
    <div>{data}</div>
  );
};

export default ConfirmBattle;