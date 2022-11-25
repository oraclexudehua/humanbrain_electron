import { connect } from 'react-redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet, ScrollRestoration } from "react-router-dom";
const mapStateToProps = (state: any) => {
  const {} = state;

  console.log('%cindex.tsx line:6 state', 'color: #007acc;', state);
  return state;
};
function Index(props: any) {
  const navigate = useNavigate();
  const handler = () => {
    navigate('/info');
  };
  const {children}=props
  console.log('%cindex.tsx line:17 object', 'color: #007acc;', children);
  return (
    <div>
      <Button
        onClick={() => {
          handler();
        }}
      >
        跳转
      </Button>
     <Outlet/>
    </div>
  );
}

export default connect(mapStateToProps)(Index);
