Page({
    data: {
        id: 0,
        content: ''
    },
    onLoad: function(params) {

        this.setData({
            id: params.id
        })
    },
    onReady: function() {
        // wx.setNavigationBarTitle({
        //   title: res.data.brandName
        // })
        console.log(this.data.id);
        var that = this;
        wx.request({
            url: 'http://service.ule.com/api/item/searchItemsByListId.do?listId=' + that.data.id + '&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1476785257211',
            success: function(res) {
                console.log(res.data.itemInfo[0].image);
                that.setData({
                    content: res.data
                })
            }
        })
    }
})
