import React, { Component } from 'react';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={4}>Left </Col>
          <Col span={16}>Center</Col>
          <Col span={4}>Right</Col>
        </Row>
      </div>
    );
  }
}

export default App;
