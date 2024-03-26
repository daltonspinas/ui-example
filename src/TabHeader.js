import React, { Component } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import logo from "../assets/logo.png";
//import "react-tabs/style/react-tabs.css";
// using custom css for this component in index.css

export class TabHeader extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        "Dashboard",
        "Sign In",
        "Classes",
        "Workshops",
        "Appointments",
        "Client Home",
        "Retail",
      ],
      subTabs: ["Dashboard", "Business Overview", "Schedule", "Reports"],
      activeSubTab: "Business Overview",
    };
    this.setActiveSubTab = this.setActiveSubTab.bind(this);
  }

  setActiveSubTab(subTab) {
    this.setState({ activeSubTab: subTab });
  }
  render() {
    return (
      <div>
        <div id='banner-div'>
          <img src={logo} alt='' />
          <Tabs>
            <TabList>
              {this.state.tabs.map((element, idx) => (
                <Tab key={idx}>{element}</Tab>
              ))}
            </TabList>
          </Tabs>
          {/* Not rendering TabPanels will generate a warning in browser but I consider it unnecessary overhead */}
        </div>
        <div id='sub-tabs'>
          <div>
            {this.state.subTabs.map((element, idx) => {
              return (
                <p
                  key={idx}
                  className={`${
                    this.state.activeSubTab === element ? "active" : ""
                  }`}
                  onClick={() => this.setActiveSubTab(element)}
                >
                  {element}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
