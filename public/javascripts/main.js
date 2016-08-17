window.onload = function () {
    (function() {
        var btn = document.getElementById('btn');
        var userName = document.getElementById("userName");
        console.log(userName);
        var passWord = document.getElementById("passWord");
        console.log(passWord);
        // 创建Ajax的核心对象
        function getXhr () {
            var xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject("Microsoft.XMLHttp");
            }
            return xhr;
        }
        btn.addEventListener('click', function() {
            console.log(userName);
            console.log(passWord);
            var userNameValue = userName.value;
            var passWordValue = passWord.value;
            console.log(userNameValue);
            console.log(passWordValue);
            // var xhr = getXhr();
            // xhr.open("post","")
        }, false);
    })();
};
