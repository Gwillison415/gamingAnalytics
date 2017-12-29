import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const DateButton = ({isLoading}) => {




  return (
    <Button
      bsStyle="primary"
      disabled={isLoading}
      onClick={!isLoading ? this.handleClick : null}
    >
      {isLoading ? 'Loading...' : 'Loading state'}
    </Button>
  );
},

handleClick() {
  this.setState({ isLoading: true });

  // This probably where you would have an `ajax` call
  setTimeout(() => {
    // Completed of async action, set loading state back
    this.setState({ isLoading: false });
  }, 2000);
},
}
