(function(w, doc) {
    // 构造函数模式
    function Tab(options) {
        this.options = {
            element: '.tab-container', //tab组件容器，必选
            triggers: '.tab-nav-item', //触发selector, 必选
            triggerClass: 'tab-nav-item',
            triggerActiveClass: 'tab-nav-item-active',
            contents: '.tab-contents',
            activeIndex: 0
        }
        this.init(options);
    };

    Tab.prototype = {
        init: function(options) {
            this._extend(options);
            this.showTab();
            this.bindEvent();
        },
        _extend: function(options) {
            if (options) {
                for (var key in options) {
                    this.options[key] = options[key];
                }
            }
        },
        /**
         * 显示指定索引的面板
         * @param  {[type]} index tab索引，如果为空，则取配置参数
         * @return {[type]}       [description]
         */
        showTab: function(index) {
            var tabTrigger = doc.querySelectorAll(this.options.triggers),
                tabContents = doc.querySelectorAll(this.options.contents),
                // 如果传入的激活索引大于元素最大索引值，则取默认的0
                activeIndex;

            if (index) {
                activeIndex = index;
            } else {
                activeIndex = this.options.activeIndex > tabTrigger.length - 1 ? 0 : this.options.activeIndex;
            }

            // 初始化激活tab
            for (var i = 0, len = tabTrigger.length; i < len; i++) {
                if (activeIndex == i) {
                    tabTrigger[i].classList.add(this.options.triggerActiveClass);
                    tabContents[i].style.display = 'block';
                } else {
                    tabTrigger[i].classList.contains(this.options.triggerActiveClass) && tabTrigger[i].classList.remove(this.options.triggerActiveClass);
                    tabContents[i].style.display = 'none';
                }
            }
        },
        bindEvent: function() {
            var tabContainer = doc.querySelector(this.options.element),
                tabTrigger = doc.querySelectorAll(this.options.triggers),
                tabContents = doc.querySelectorAll(this.options.contents);
            var that = this;
            tabContainer.addEventListener('click', function(e) {
                var triggerClass = that.options.triggerClass,
                    triggerActiveClass = that.options.triggerActiveClass;
                // 判断事件源对象是否是trigger对象
                if (e.target.classList.contains(triggerClass)) {
                    // 获取当前触发索引
                    for (var i = 0, len = tabTrigger.length; i < len; i++) {
                        if (tabTrigger[i] == e.target) {
                            that.showTab(i);
                            return;
                        }
                    }
                }
            }, false);
        }
    };
    // 绑定到window全局对象
    return w.Tab = Tab;
})(window, document);