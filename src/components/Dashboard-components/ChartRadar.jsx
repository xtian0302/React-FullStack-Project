import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Spinner } from "react-bootstrap";
import { Radar } from "react-chartjs-2";

const ChartRadar = ({ ...rest }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = async () => {
    await axios({
      method: "GET",
      url: "/getChartData",
    }).then((res) => {
      setChartData({
        labels: res.data.labels,
        datasets: [
          {
            label: res.data.datasetname,
            backgroundColor: "rgba(159,243,229,0.2)",
            borderColor: "rgba(159,243,229,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(159,243,229,0.4)",
            hoverBorderColor: "rgba(159,243,229,1)",
            data: res.data.data,
          },
        ],
      });
    });
  };
  if (Object.keys(chartData).length !== 0) {
    return (
      <Col {...rest}>
        <Card id="pie">
          <Card.Body>
            <Radar data={chartData} options={{ maintainAspectRatio: false }} />
          </Card.Body>
        </Card>
      </Col>
    );
  } else {
    return (
      <Col {...rest}>
        <Card>
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

export default ChartRadar;
