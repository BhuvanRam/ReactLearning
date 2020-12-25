import React from 'react'

function ErrorBoundary(props) {
    const oopsText = () => (
        <h2>
            Something went wrong!!!
        </h2>
    )

    let isEverythingOk = true

    return <> {isEverythingOk ? props.children : oopsText()} </>
}

export default ErrorBoundary