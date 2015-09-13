(function(w, doc) {
    var tabContainer = doc.querySelector('.tab-container');
    var tabNavItems = doc.querySelectorAll('.tab-nav-item');
    var tabContent = doc.querySelectorAll('.tab-contents');
    tabContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-nav-item')) {
            var activeIndex = getActiveIndex(e, tabNavItems);
            initClassStatus(tabNavItems, 'tab-nav-item-active');
            initClassStatus(tabContent, 'tab-contents-active');
            tabNavItems[activeIndex].classList.add('tab-nav-item-active');
            tabContent[activeIndex].classList.add('tab-contents-active');
        }

    });

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
})(window, document);