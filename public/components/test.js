class LoginBar extends React.Component {
    render() {
        return <div>
            {
                React.Children.map(this.pros.children, function(child) {})
            }
        </div>
    }
}
ReactDOM.render(
    <LoginBar>
        <input type="text" name="username" id="username"/>
        <input type="password" name="password" id="password"/>
    </LoginBar>
);