import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Chart } from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import zoom from "chartjs-plugin-zoom";

import { generateDataPoints } from "../data/analytics";

import transition from "../transition";

const Analytics = () => {
  const { labels, data } = generateDataPoints(200);
  useEffect(() => {
    Chart.register(annotationPlugin, zoom);
  }, []);
  return (
    <div className="main p-3 p-lg-4">
      <Container>
        <div className="mb-4 d-flex justify-content-between">
          <h4 className="main-title mb-0">Analytics</h4>
        </div>
        <Row className="g-3 mb-5">
          <Col xl="4">
            <Card className="card-two">
              <Card.Header>Product sales comparison</Card.Header>
              <Card.Body>
                {" "}
                <Pie
                  data={{
                    labels: ["Earbuds", "Phone", "Keyboard"],
                    datasets: [
                      {
                        id: 1,
                        label: "",
                        data: [2994, 3874, 782],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: true,
                      },
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col xl="8">
            <Card className="card-two">
              <Card.Header></Card.Header>
              <Card.Body>
                {" "}
                <Line
                  data={{
                    labels: ["Jan", "Feb", "Mar", "April"],
                    datasets: [
                      {
                        id: 1,
                        label: "Earbuds",
                        data: [342, 730, 712, 123],
                      },
                      {
                        id: 1,
                        label: "Phone",
                        data: [473, 646, 537, 356],
                      },
                      {
                        id: 1,
                        label: "Keyboard",
                        data: [53, 492, 200, 42],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: true,
                      },
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl="12">
            <Card className="card-two">
              <Card.Header>Products sold</Card.Header>
              <Card.Body>
                {" "}
                <Line
                  data={{
                    labels: labels,
                    datasets: [
                      {
                        id: 1,
                        label: "",
                        data: data,
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
                            yMin: 40,
                            yMax: 40,
                            borderColor: "rgb(255, 99, 132)",
                            borderWidth: 2,
                          },
                        },
                      },

                      zoom: {
                        pan: {
                          enabled: true,
                          mode: "x",
                        },
                        zoom: {
                          wheel: {
                            enabled: true,
                          },
                          pinch: {
                            enabled: true,
                          },
                          mode: "x",
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

export default transition(Analytics);
