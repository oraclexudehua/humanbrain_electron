import { connect } from 'react-redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const mapStateToProps = (state: any) => {
  const { global } = state;
  console.log(state);
  return { global };
};
function Index(props: any) {
  const { dispatch } = props;
  const {
    global: { userInfo },
  } = props;
  const navigate = useNavigate();
  const handler = () => {
    dispatch({
      type: 'UPDATE_GLOBAL_SIDE_VISITABLE',
    });
    // navigate('/');
    // console.log('%cindex.tsx line:11 /props', 'color: #007acc;', props);
  };
  useEffect(() => {
	}, [userInfo.en]);
  return (
    <div>
    </div>
  );
}

export default connect(mapStateToProps)(Index);
