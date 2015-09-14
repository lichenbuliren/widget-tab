(function(w, doc) {
    var tab = function(options) {
        this.options = {
            element: '.tab-container', //tab组件容器，必选
            trigger: '.trigger',
            contents: '.contents',
            tiggerActiveClass: '.trigger-active',
            activeIndex: 0
        }

    }

    // 绑定到window全局对象
    return w.tab = tab;


    // var tab = {
    //     init: function() {
    //         return function(options) {
    //             var keys, i, len;

    //             combineOptions(this.options, options);
    //             tab.bindEvent.call(this);
    //         }
    //     },
    //     bindEvent: function() {
    //         var tabContainer = doc.querySelector(this.options.element),
    //             tabTrigger = doc.querySelectorAll(this.options.trigger),
    //             tabContents = doc.querySelectorAll(this.options.contents),
    //             that = this;
    //         tabContainer.addEventListener('click', function(e) {
    //             var triggerClass = that.options.trigger.substring(1),
    //                 triggerActiveClass = that.options.triggerActiveClass.substring(1),
    //                 contentsActiveClass = (that.options.contents + '-active').substring(1);
    //             if (e.target.classList.contains(triggerClass)) {
    //                 var activeIndex = getActiveIndex(e, tabTrigger);
    //                 initClassStatus(tabTrigger, triggerActiveClass);
    //                 initClassStatus(tabContents, contentsActiveClass);
    //                 tabTrigger[activeIndex].classList.add(triggerActiveClass);
    //                 tabContents[activeIndex].classList.add(contentsActiveClass);
    //             }
    //         });
    //     }
    // }


    function getActiveIndex(e, objList) {
        for (var i = objList.length - 1; i >= 0; i--) {
            if (objList[i] == e.target) {
                return i;
            }
        };
    }

    // init class status
    function initClassStatus(arr, clasName) {
        for (var i = arr.length - 1; i >= 0; i--) {
            arr[i].classList.remove(clasName);
        };
    }



    /**
     * 合并参数
     * @param  {[type]} optDesc 原始参数
     * @param  {[type]} optSrc  新参数
     * @return {[type]}         返回新的参数对象
     */
    function combineOptions(optDesc, optSrc) {
        var keys, i, len;
        optDesc = optDesc || {};
        if (!optSrc) return;

        for (keys = Object.keys(optSrc), i = 0, len = keys.length; i < len; i++) {
            optDesc[keys[i]] = optSrc[keys[i]];
        }
    }
})(window, document);