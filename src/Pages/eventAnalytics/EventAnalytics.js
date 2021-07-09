import React from "react";
import "./eventAnalytics.scss";
import PieChart from "../../components/eventAnalytics/PieChart";
import BarChart from "../../components/eventAnalytics/BarChart";

class EventAnalytics extends React.Component {
  render() {
    return (
      <>
        <h2 className='header'>Event Analytics</h2>
        <div className='event-analytics--main'>
          <section className='sidebar'>Sidebar</section>
          <section className='main-content'>
            <div className='people-cards'>
              <div className='card'>
                <p>156</p>
                <label>People Booked</label>
              </div>
              <div className='card'>
                <p>103</p>
                <label>People Attended</label>
              </div>
            </div>

            <div className='age-chart'>
              <h2>Age Chart</h2>
              <div className='chart-container'>
                <PieChart></PieChart>
              </div>
            </div>

            <div className='gender-chart'>
              <h2>Gender Chart</h2>
              <div className='chart-container'>
                <BarChart></BarChart>
              </div>
            </div>

            <div className='retention'>
              <h2>People Retention</h2>
              <div className='chart-container'></div>
            </div>

            <div className='ux-chart'>
              <h2>User Experience Chart</h2>
              <div className='chart-container'>
                <BarChart></BarChart>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default EventAnalytics;
