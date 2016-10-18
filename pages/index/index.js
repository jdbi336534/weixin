//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 300,
		imgUrls: [
			'/images/banner1.jpg',
			'/images/banner2.jpg',
			'/images/banner3.jpg',
			'/images/banner4.jpg',
			'/images/banner5.jpg',
			'/images/banner6.jpg'
		],
		selectul: [],
		pingpaicla: [
			'venues_item1',
			'venues_item',
			'venues_item'
		]

	},
	onLoad: function() {
		var that = this;
		this.setData({
				selectul: [{
					"cls": "npli",
					"title": "邮乐农品"
				}, {
					"cls": "spli",
					"title": "商品分类"
				}, {
					"cls": "lqli",
					"title": "领券"
				}, {
					"cls": "tmli",
					"title": "邮乐特卖"
				}]
			})
			//onlyphone
		wx.request({
				url: 'http://www.woline.top/weixinlittlepro/onlyphone.php',
				method: 'GET',
				data: {},
				header: {
					'Accept': 'application/json'
				},
				success: function(res) {
					//console.log(res.data[0].customAttribute);
					that.setData({
						onlyphone: res.data
					})

				}
			})
			//pingpai
		wx.request({
				url: 'http://www.woline.top/weixinlittlepro/pingpai.php',
				method: 'GET',
				data: {},
				header: {
					'Accept': 'application/json'
				},
				success: function(res) {
					//	console.log(res.data);
					that.setData({
						pingpai: res.data
					})

				}
			})
			//tesenp
		wx.request({
				url: 'http://www.woline.top/weixinlittlepro/tesenp.php',
				method: 'GET',
				data: {},
				header: {
					'Accept': 'application/json'
				},
				success: function(res) {

					that.setData({
						tesenp: res.data
					})

				}
			})
			//goodshoptoday
		wx.request({
				url: 'http://www.woline.top/weixinlittlepro/goodshoptoday.php',
				method: 'GET',
				data: {},
				header: {
					'Accept': 'application/json'
				},
				success: function(res) {
					//console.log(res.data);
					that.setData({
						goodshoptoday: res.data,

					})

				}
			})
			//gussyoulike
		wx.request({
			url: 'http://www.woline.top/weixinlittlepro/gussyoulike.php',
			method: 'GET',
			data: {},
			header: {
				'Accept': 'application/json'
			},
			success: function(res) {
				console.log(res.data);
				that.setData({
					gussyoulike: res.data
				})

			}
		})

	},
	//事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},

})


