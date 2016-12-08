import React from 'react'

class User extends React.Component {
    render() {
        return (
            <div>
                <h1>User</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default User