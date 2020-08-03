// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex:0
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    //点击每一项
    itemClick(e){
      const {index} = e.currentTarget.dataset
      this.setData({
        activeIndex:index
      })
      this.triggerEvent("change",{index})
    }

  }
})
