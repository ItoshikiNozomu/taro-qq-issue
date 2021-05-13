export default {
  pages: [
    'pages/index/index'
  ],
  subPackages:[
   {
    "root": "sub",
    "name": "sub",
    "pages": [
      "index/index",

    ]
   }
  ],
  preloadRule:{

  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
