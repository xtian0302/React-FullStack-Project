import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

const ChartPie = ({ ...rest }) => {
  useEffect(() => {
    setChartData({
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
  }, []);
  const [chartData, setChartData] = useState({});
  return (
    <Col {...rest}>
      <Card id="pie">
        <Card.Body>
          <Pie data={chartData} options={{ maintainAspectRatio: false }} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChartPie;
