import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button ,Col,Row} from 'antd';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <Row>
      <Col span={12} offset={2}>
        <Button>测试</Button>
      </Col>
    </Row>
    </>
  );
};

export default App;
