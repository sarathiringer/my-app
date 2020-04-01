import React, { Component } from 'react';
// import { Text, StyleSheet } from 'react-native';
import './display.css';

let text = "Incoming text.";

export default class Display extends React.Component {
    render() {
      return (
        <div>
            <h2>This is were your text will be displayed:</h2>
            <h4>   </h4>
          {text}
        </div>
      );
    }
  }


/*
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Title",
            bodyText: "Body",
        };
    }

    render() {
        return (
          <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                  {this.state.titleText}
                  {"\n"}
                  {"\n"}
              </Text>
              <Text numberOfLines={200}>{this.state.bodyText}</Text>
          </Text>
        )
        }
}

*/