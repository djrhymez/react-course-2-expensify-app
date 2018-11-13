import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>
      Info
    </h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {

  return (props) => (
    <div>
      {props.isAdmin && <p>Warning: This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (ComponentToWrap) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <ComponentToWrap {...props}/> : <p>ERROR: User is not authenticated. Please log in first.</p>}
    </div>
  );
}; 

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Here are some details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Here are some details"/>, document.getElementById('app'));