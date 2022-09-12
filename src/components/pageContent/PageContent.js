import React, { Component } from 'react';
import {ThemeContext} from '../../contexts/themeContext/ThemeContext';
// import withStyles from "@material-ui/core/styles/withStyles";
// import styles from "./styles/PageContentStyles";


class PageContent extends Component {
    static contextType = ThemeContext;
  render() {
    const {isDarkMode} = this.context;
    const styles = {
        backgroundColor: isDarkMode ? '#242424' : '#ffffff',
        height: '100vh',
        width: '100vw'
    };

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}

export default PageContent;