// 指定路径
require.config({
    paths: {
        react: '/lib/react.min',
        reactDOM: '/lib/react-dom.min'
    }
});

// 引用对象
require(['react', 'reactDOM'], function(React, ReactDOM) {
    /*var TestComponent = React.createClass({
        render: function() {
            return React.createElement(
                'div',
                {
                    className: 'testClass',
                    id: 'testId'
                },
                React.createElement('div', null, 'header'),
                React.createElement('div', null, 'content'),
                React.createElement('div', null, 'footer')
            );
        }
    });

    var el = React.createElement(TestComponent);
    ReactDOM.render(el, document.querySelector('#content'));*/
});