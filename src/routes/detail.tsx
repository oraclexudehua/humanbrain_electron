import { connect } from 'react-redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state: any) => {
  const {} = state;
  return state;
};
function Index(props: any) {
  const navigate = useNavigate();
  const handler = () => {
    navigate('/');
    // console.log('%cindex.tsx line:11 /props', 'color: #007acc;', props);
  };
  return (
    <div>
      <Button
        onClick={() => {
          handler();
        }}
      >
        返回
      </Button>
    </div>
  );
}

export default connect(mapStateToProps)(Index);
