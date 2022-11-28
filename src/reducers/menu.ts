import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  ASYNC_START,
} from '../constants/actionTypes';

const menuList = [
  // {
  //   label: '数据管理',
  //   key: 'dataManager',
  //   path: 'dataManager',
  // },
  // { label: '研究项目', key: 'researchProjects', path: 'researchProjects' },
  // {
  //   label: '分析结果',
  //   key: 'analysisResults',
  //   path: 'analysisResults',
  //   children: [
  //     {
  //       label: '组分析',
  //       key: 'groupAnalysis',
  //       path: 'analysisResults/groupAnalysis',
  //     },
  //     {
  //       label: '单被试',
  //       key: 'singleSubject',
  //       path: 'analysisResults/singleSubject',
  //     },
  //   ],
  // },
  {
    label: '传输列表',
    key: 'transferList',
    path: 'transferList',
    children: [
      {
        label: '正在上传',
        key: 'uploading',
        path: 'transferList/uploading',
      },
      {
        label: '正在下载',
        key: 'downloading',
        path: 'transferList/downloading',
      },
      {
        label: '传输完成',
        key: 'transferComplete',
        path: 'transferList/transferComplete',
      },
    ],
  },
];

const initState = {
  menuList: menuList,
};
export default (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
