import React from 'react'

class Root extends React.Component {
    render() {
        return (
            <div>
                <h1>Root</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Root