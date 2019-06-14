import React, { Component, Button } from "react";
import Amplify, { Interactions } from "aws-amplify";
import { ChatBot, AmplifyTheme } from "aws-amplify-react";
import awsmobile from "./aws-exports";
import MyTheme from "./MyTheme";
import "./LexBot.css";

Amplify.configure(awsmobile);

class LexBot extends Component {
  constructor(props) {
    super(props);
    this.handleChat = this.handleChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }
  state = {
    visibility: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.visible != nextProps.visible) {
      this.setState({
        visibility: nextProps.visible
      });
    }
  }
  handleChat() {
    this.setState(state => ({
      visibility: true
    }));
    Interactions.send("Resume_webpage", "Download resume");
  }
  closeChat() {
    this.setState(state => ({
      visibility: false
    }));
  }
  handleComplete(err, confirmation) {
    if (err) {
      //alert("Bot conversation failed");
      return;
    }
    //alert("Success: " + JSON.stringify(confirmation, null, 2));

    return "Here is the resume. Thank you!";
  }
  render() {
    const visibility = this.state.visibility;
    return (
      <div>
        {visibility ? (
          <div className="chatWindow">
            {/*Do not want to customise chatbot only to add close button so using
          anchor to look like a close button */}
            <a class="chatClose" id="chatClose" onClick={this.closeChat}>
              x
            </a>
            <ChatBot
              theme={MyTheme}
              title="My React Bot"
              botName="Resume_webpage"
              welcomeMessage="Hello, Which langauage would you like to download the resume in English/Deutsch?"
              onComplete={this.handleComplete.bind(this)}
              clearOnComplete={true}
            />
          </div>
        ) : (
          <a href="#" className="float" onClick={this.handleChat}>
            <i className="fa fas fa-comments my-float" />
          </a>
        )}
      </div>
    );
  }
}

export default LexBot;
