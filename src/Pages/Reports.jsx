import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

//Data-grid MUI
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

//Table data
import { reportsData } from "../data/report";

import transition from "../transition";

const Reports = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredDate] = useState(reportsData);
  const [error, setError] = useState(null);

  const onStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const onEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filerTable = () => {
    if (!startDate || !endDate) {
      console.log("Both start date and end date are required!");
      setError("Both start date and end date are required!");
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      console.log("Start date should be less than end date.");
      setError("Start date should be less than end date.");
      return;
    }

    const filteredData = reportsData.filter((row) => {
      const rowDate = new Date(row.date);
      return rowDate >= new Date(startDate) && rowDate <= new Date(endDate);
    });

    setFilteredDate(filteredData);
    setError("");
  };

  const reportsColumn = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "customer", headerName: "Customer", flex: 1 },
    { field: "product", headerName: "Product", flex: 1 },
    { field: "quantity", headerName: "Quantity", type: "number", flex: 1 },
    { field: "total", headerName: "Total", type: "number", flex: 1 },
  ];
  return (
    <div className="main p-3 p-lg-4">
      <Container>
        <div className="mb-5">
          <h4 className="main-title mb-0">Reports</h4>
        </div>
        <Row>
          <Col xl="12">
            <Card className="card-two">
              <Card.Header className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <h6>All over sales</h6>
                <div>
                  <Form className="d-flex flex-column flex-sm-row">
                    <div className="me-2">
                      <Form.Control
                        type="date"
                        name="start_date"
                        id="start_date"
                        onChange={onStartDateChange}
                      />
                    </div>
                    <div className="me-2">
                      <Form.Control
                        type="date"
                        name="end_date"
                        id="end_date"
                        onChange={onEndDateChange}
                      />
                    </div>
                    <Button variant="primary" onClick={filerTable}>
                      Apply Filter
                    </Button>
                  </Form>
                </div>
              </Card.Header>

              <Card.Body>
                <Box
                  sx={{
                    width: "100%",
                    border: 0,
                    "& .MuiDataGrid-cell": {
                      border: 1,
                      borderRight: 1,
                      borderTop: 0,
                      borderColor: "#ECECEC",
                    },
                    ".MuiTablePagination-displayedRows": {
                      "margin-top": "1em",
                      "margin-bottom": "1em",
                    },
                  }}
                >
                  <DataGrid
                    sx={{
                      border: 0,
                      "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
                        py: "8px",
                      },
                      "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
                        py: "15px",
                      },
                      "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell":
                        {
                          py: "22px",
                        },
                    }}
                    rows={filteredData}
                    columns={reportsColumn}
                    getRowHeight={() => "auto"}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    autoHeight
                    pageSizeOptions={[5]}
                    slots={{ toolbar: GridToolbar }}
                  />
                </Box>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default transition(Reports);
