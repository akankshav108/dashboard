import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

import transition from "../transition";
Chart.register(annotationPlugin);

const Overview = () => {
  useEffect(() => {}, []);
  return (
    <div className="main p-3 p-lg-4">
      <Container>
        <div className="mb-4 d-flex justify-content-between">
          <h4 className="main-title mb-0">Overview</h4>
          <Button className="btn">
            <i className="bi bi-download me-2"></i>Generate Report
          </Button>
        </div>
        <Row>
          <Col xl="6">
            <Row>
              {[
                {
                  icon: "bi bi-earbuds",
                  amount: "39033",
                  type: "Total Products",
                },

                {
                  icon: "bi bi-cash-coin",
                  amount: "$20820",
                  type: "Total Sales",
                },

                {
                  icon: "bi bi-receipt",
                  amount: "20393",
                  type: "Product Sold",
                },

                {
                  icon: "bi bi-wallet",
                  amount: "$18400",
                  type: "Expenses",
                },
              ].map((item, index) => (
                <Col xl="6" className="mb-3" key={index}>
                  <Card className="card-one">
                    <Card.Body>
                      <div className="icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="amount mt-3">{item.amount}</div>
                      <div className="type mt-2">{item.type}</div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xl="6">
            <Card className="card-two">
              <Card.Header>Sales (2024)</Card.Header>
              <Card.Body>
                {" "}
                <Line
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                      {
                        id: 1,
                        label: "",
                        data: [5729, 6233, 7233, 4223],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false,
                      },
                      annotation: {
                        annotations: {
                          line1: {
                            type: "line",
                            yMin: 5000,
                            yMax: 5000,
                            borderColor: "rgb(255, 99, 132)",
                            borderWidth: 2,
                          },
                        },
                      },
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default transition(Overview);
