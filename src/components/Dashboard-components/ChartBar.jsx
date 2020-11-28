import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { Bar, Line, Pie } from "react-chartjs-2";

const ChartBar = ({ ...rest }) => {
  useEffect(() => {
    setChartData({
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(159,243,229,0.2)",
          borderColor: "rgba(159,243,229,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(159,243,229,0.4)",
          hoverBorderColor: "rgba(159,243,229,1)",
          data: [1, 2, 3, 1.5, 2.5, 3.5, 0.6],
        },
      ],
    });
  }, []);
  const [chartData, setChartData] = useState({});
  return (
    <Col {...rest}>
      <Card>
        <Card.Header>Chart</Card.Header>
        <Card.Body>
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChartBar;
