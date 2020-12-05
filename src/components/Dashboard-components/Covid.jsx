import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Card, Col, Spinner } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const Covid = ({ handleClick }) => {
  const [globalData, setGlobalData] = useState({});
  const [philsData, setPhilsData] = useState({});
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    getCovidData();
    getChartData();
  }, []);

  const getCovidData = async () => {
    await axios({
      method: "GET",
      url: "https://api.covid19api.com/summary",
    }).then((res) => {
      if (res.data.Message === "Caching in progress") {
        setGlobalData({
          NewConfirmed: "API Caching In Progress",
        });
      } else {
        setGlobalData({
          TotalConfirmed: res.data.Global.TotalConfirmed,
          NewConfirmed: res.data.Global.NewConfirmed,
          TotalDeaths: res.data.Global.TotalDeaths,
          NewDeaths: res.data.Global.NewDeaths,
          TotalRecovered: res.data.Global.TotalRecovered,
          NewRecovered: res.data.Global.NewRecovered,
        });
      }
      try {
        var filteredObj = res.data.Countries.find(function (item, i) {
          if (item.Country === "Philippines") {
            return i;
          }
          return 0;
        });
        setPhilsData({
          TotalConfirmed: filteredObj.TotalConfirmed,
          NewConfirmed: filteredObj.NewConfirmed,
          TotalDeaths: filteredObj.TotalDeaths,
          NewDeaths: filteredObj.NewDeaths,
          TotalRecovered: filteredObj.TotalRecovered,
          NewRecovered: filteredObj.NewRecovered,
        });
      } catch (error) {
        console.error(error);
      }
    });
  };
  const getChartData = async () => {
    let dataArr = [];
    let labelArr = [];
    let deathDataArr = [];
    const currDate = new Date();
    let toStr = currDate.toISOString().split("T")[0];
    let fromDate = new Date();
    fromDate.setMonth(currDate.getMonth() - 1);
    let fromStr = fromDate.toISOString().split("T")[0];
    await axios({
      method: "GET",
      url:
        "https://api.covid19api.com/country/ph/status/confirmed/live?from=" +
        fromStr +
        "&to=" +
        toStr,
    }).then((res) => {
      res.data.forEach((element) => {
        let dt = new Date(element.Date);
        dataArr.push(element.Cases);
        labelArr.push(dt.toLocaleDateString());
      });
    });
    await axios({
      method: "GET",
      url:
        "https://api.covid19api.com/country/ph/status/deaths/live?from=" +
        fromStr +
        "&to=" +
        toStr,
    }).then((res) => {
      res.data.forEach((element) => {
        deathDataArr.push(element.Cases);
      });
    });
    setChartData({
      labels: labelArr,
      datasets: [
        {
          label: "Phils Covid Confirmed Cases",
          backgroundColor: "rgba(159,243,229,0.2)",
          borderColor: "rgba(159,243,229,1)",
          borderWidth: 0.5,
          data: dataArr,
        },
        {
          label: "Phils Covid Deaths",
          backgroundColor: "rgba(159,29,29,0.2)",
          borderColor: "rgba(159,29,29,1)",
          borderWidth: 0.5,
          data: deathDataArr,
        },
      ],
    });
  };

  if (Object.keys(chartData).length !== 0) {
    return (
      <Col id="page-content-wrapper">
        <button
          className="btn btn-outline-dark"
          style={{ margin: 5 }}
          onClick={handleClick}
        >
          <i className="fas fa-bars"></i>
        </button>
        <span className="m-3">Covid API</span>
        <button
          className="btn btn-outline-dark float-right"
          style={{ margin: 5 }}
        >
          Generate Report&nbsp;
          <i className="far fa-chart-bar"></i>
        </button>
        <hr />
        <Container fluid>
          <h2>
            <i class="fas fa-clinic-medical"></i> Global Statistics :
          </h2>
          <br />
          <Row>
            <Col>
              <h6>New Confirmed Cases:</h6>
              <span>{globalData.NewConfirmed}</span>
            </Col>
            <Col>
              <h6>Total Confirmed Cases:</h6>
              <span>{globalData.TotalConfirmed}</span>
            </Col>
            <Col>
              <h6>New Deaths:</h6>
              <span>{globalData.NewDeaths}</span>
            </Col>
            <Col>
              <h6>Total Deaths:</h6>
              <span>{globalData.TotalDeaths}</span>
            </Col>
            <Col>
              <h6>New Recovered Cases:</h6>
              <span>{globalData.NewRecovered}</span>
            </Col>
            <Col>
              <h6>New Recovered Cases:</h6>
              <span>{globalData.TotalRecovered}</span>
            </Col>
          </Row>
          <hr />
          <h4>Local Philippines Statistics :</h4>
          <br />
          <Row>
            <Col>
              <h6>New Confirmed Cases:</h6>
              <span>{philsData.NewConfirmed}</span>
            </Col>
            <Col>
              <h6>Total Confirmed Cases:</h6>
              <span>{philsData.TotalConfirmed}</span>
            </Col>
            <Col>
              <h6>New Deaths:</h6>
              <span>{philsData.NewDeaths}</span>
            </Col>
            <Col>
              <h6>Total Deaths:</h6>
              <span>{philsData.TotalDeaths}</span>
            </Col>
            <Col>
              <h6>New Recovered Cases:</h6>
              <span>{philsData.NewRecovered}</span>
            </Col>
            <Col>
              <h6>New Recovered Cases:</h6>
              <span>{philsData.TotalRecovered}</span>
            </Col>
          </Row>
          <hr />
          <h4>Charting Data</h4>
          <br />
          <Row>
            <Col>
              <Card>
                <Card.Header>Philippines Covid Statistics</Card.Header>
                <Card.Body style={{ height: 450 }}>
                  <Line
                    data={chartData}
                    options={{ maintainAspectRatio: false }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  } else {
    return (
      <Col>
        <br />
        <Card>
          <Card.Header>Chart</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Col>
    );
  }
};
export default Covid;
