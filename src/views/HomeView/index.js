import React from 'react';
import radium from 'radium';
import styles from './styles';

@radium
export default class HomeView extends React.Component {
  state = {
    loaded: false,
  }
  render() {
    return (
      <div style={styles.base}>
        <section style={styles.content(this.state.loaded)}>
          <div style={styles.titleWrap}>
            <img
              role="presentation"
              onLoad={() => this.setState({ loaded: true })}
              src="https://dl.dropboxusercontent.com/s/o5wxjsxbz7q0gk0/hb-icon-transparent.png"
              style={styles.logo}
            />
            <h1 style={styles.title}>Hotbox</h1>
          </div>
          <h4 style={styles.description}>Building the future of web technology.</h4>
          <a href="mailto:sup@hotbox.tech" style={styles.contactBtn}>
            Get in touch
            <i className="material-icons" style={styles.contactBtnIcon}>email</i>
          </a>
        </section>
      </div>
    );
  }
}
