import React, { Component } from "react";
import "./index.css";
import { ChartComponent } from "./ChartComponent";
import { NewProgram } from "./NewProgram";
import { TabHeader } from "./TabHeader";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    // Removing API call and using dummy data instead
    // this.loadAPI({
    //   pricingData: "https://api.myjson.com/bins/47axv",
    //   programData: "https://api.myjson.com/bins/5bdb3",
    // });
    this.loadSeedData();
  }

  async loadAPI(urls) {
    // create a temporary stateObj to store API data in as to avoid repeated setState calls and re-renders
    let stateObj = {};
    for (let key in urls) {
      await fetch(urls[key]).then(function(response) {
        return response.json().then(function(data) {
          stateObj[key] = data;
        });
      });
    }
    this.setState(stateObj);
  }

  loadSeedData(){
    // Dummy data since the api has been taken down
    let programData = [{ programID: 1, Name: 'Yoga Classes', TotalMonthlySales: 23483 },
    { programID: 2, Name: 'Yoga Privates', TotalMonthlySales: 23483 },
    { programID: 3, Name: 'Yoga Duets', TotalMonthlySales: 23483 }]


    let pricingData = [{ programID: 1, Sales: 4260, Name: 'Monthly Unlimited' },
    { programID: 1, Sales: 1750, Name: 'Student 1 month' },
    { programID: 1, Sales: 560, Name: 'Single Visit' },
    { programID: 1, Sales: 475, Name: '10 class pass' },
    { programID: 1, Sales: 445, Name: 'Student Single' },
    { programID: 1, Sales: 230, Name: '20 class pass' },
    { programID: 1, Sales: 520, Name: '5 class pass' }]

    this.setState({ programData, pricingData });
  }

  render() {
    if (!this.state.programData) {
      return <div>Loading...</div>;
    }
    return (
      <div className='App'>
        <TabHeader className='tab-header' />
        <NewProgram />
        <div id='card-container'>
          {this.state.programData.map(program => {
            console
            return (
              <ChartComponent
                program={program}
                key={program.ProgramID}
                // this will only pass pricingData to the component where the programID's match
                pricingData={this.state.pricingData.filter(priceOption => {
                  return priceOption.ProgramID === program.ProgramID;
                })}
              />
            );
          })}
        </div>
        <table id='bottom-table'>
          <tbody>
            <tr>
              <td className='light-text left-text'>All Programs</td>
              <td className='light-text left-text'>Monthly Sales</td>
              <td className='light-text left-text'>Monthly Attendance</td>
              <td id='wide-col'> </td>
            </tr>
            <tr>
              <td className='left-text'>
                <p>
                  <span className="program-title">Open Practice </span>
                  <br />
                  <font className='little-more light-text'>more</font>
                </p>
              </td>
              <td>
                <b>$572.00</b>
              </td>
              <td>
                <b>276 visits</b>
              </td>
            </tr>
            <tr>
              <td className='left-text'>
                <span className="program-title">Yoga Videos</span> <br />
                <font className='little-more light-text'>more</font>
              </td>
              <td>
                <b>$391.32</b>
              </td>
              <td>
                <b>82 views</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
