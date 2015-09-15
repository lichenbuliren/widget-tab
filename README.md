# Tab 选项卡

<img src="https://github.com/nimojs/learn-js/blob/gh-pages/package/tab/tab.png" >

## 阶段 1

实现上图 JS 效果，CSS样式随意。


## 阶段 2

封装成一个 `tab` 函数，提供如下 api ：

```js
tab({
    element: '.tab-container',
    triggers: '.tab-nav-item',
    contents '.tab-contents'
})
```

```html
<div class="tab-container">
    <div class="tab-nav">
        <span class="tab-nav-item tab-nav-item-active">tabl</span>
        <span class="tab-nav-item">tab2</span>
        <span class="tab-nav-item">tab3</span>
    </div>
    <div class="tab-contents tab-contents-active">这是内容1</div>
    <div class="tab-contents">这是内容2</div>
    <div class="tab-contents">这是内容3</div>
</div>
```

可通过参数指定父级DOM、触发DOM、内容DOM。

## 阶段 3

`activeIndex`

初始化时，自动切换到指定面板，默认为0，也就是第一个。

```js
tab({
    element: '.tab-container',
    triggers: '.tab-nav-item',
    contents: '.tab-contents',
    // 显示第二个 content
    activeIndex: 1
})
```
---

`triggerActiveClass`

triggers被选中时的class,默认 `ui-tab-active`

```js
tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents',
    activeTriggerClass: 'ui-tab-active'
})
```


```css
.ui-tab-active{
    color: red;
}
```


## 阶段 4

添加触发类型

`triggerType`

默认是 `click` ，可选 `hover`

```js
tab({
    element: '.newtab',
    triggerType: 'hover',
    triggers: '.triggers',
    contents: '.contents'
})
```

## 阶段 5

可配置点击切换时触发的函数

```js
tab({
    element: '.newtab',
    triggerType: 'click',
    triggers: '.triggers',
    contents: '.contents',
    // click 或 hover trigger 时 onSwitch 会执行
    onSwitch: function (index, count) {
        /*
        index 是当前 trigger 的索引
        count 是 trigger 的总数
        */
    }
})
```

## 完成挑战

还有更多 API 可以实现，但以上五个阶段已经足够提高你 Tab 类型组件开发的经验。
