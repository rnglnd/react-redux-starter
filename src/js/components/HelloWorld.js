import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from 'actions/appActions';

class HelloWorld extends React.PureComponent {
  componentDidMount() {
    this.props.fetchText();
  }

  render() {
    const {
      app: {
        initialText,
      },
    } = this.props;

    return (
      <h1>{initialText}</h1>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  app,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...appActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
