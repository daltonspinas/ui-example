import React, { Component } from "react";
import graph from "../assets/graph.png";
import pencilIcons from "../assets/pencil_icons.png";
import sparkLine from "../assets/spark_line.png";
import sparkLines from "../assets/spark_lines.png";

export class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false };
    this.program = props.program;
    this.pricingData = props.pricingData;
    this.showMoreToggle = this.showMoreToggle.bind(this);
  }

  showMoreToggle() {
    this.setState({ showMore: !this.state.showMore });
  }

  render() {
    return (
      <div className='chart-card'>
        <div className='card-header'>
          <h3>{this.program.Name}</h3>
          <div className='pencil-box'>
            <img src={pencilIcons} alt='' />
          </div>
        </div>
        <p className='light-text left-text'>sales by month</p>
        <img src={graph} alt='' />
        <div className='mid-box'>
          <span>
            <p className='light-text left-text'>
              Total Monthly
              <br />
              Sales
            </p>
          </span>
          <span>
            <p className='light-text'>
              Current
              <br />
              <b>${this.program.TotalMonthlySales}</b>
            </p>
          </span>
          <span>
            <p className='light-text'>1-Year</p>
            <img src={sparkLine} alt='' />
          </span>
        </div>
        <table id='pricing-table'>
          {this.state.showMore ? ( //// Begin top level ternary operator: show the extended data if showMore is true
            <tbody>
              <tr>
                <th className='light-text left-text'>Price Name</th>
                <th className='light-text'>Current</th>
                <th className='light-text'>1-Year</th>
              </tr>
              {this.pricingData.map((el, idx) => {
                return (
                  <tr>
                    <td id='pricing-name'>{el.Name}</td>
                    <td className='light-text '>${el.Sales}</td>
                    {idx === 0 ? ( /// this ternary creates a td which holds the sparkLines graph (only happens at the top most td)
                      <td rowSpan={this.pricingData.length}>
                        <img src={sparkLines} alt='' />
                      </td>
                    ) : null}
                  </tr>
                );
              })}{" "}
              <tr>
                <td
                  className='light-text left-text clickable'
                  colSpan='3'
                  onClick={this.showMoreToggle}
                >
                  {this.state.showMore ? "less" : "more"}
                </td>
              </tr>
            </tbody>
          ) : (
            //// End top level Ternary: if false, none of the extra data is rendered
            <tbody>
              <tr>
                <td
                  className='light-text left-text clickable'
                  colSpan='3'
                  onClick={this.showMoreToggle}
                >
                  {this.state.showMore ? "less" : "more"}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
