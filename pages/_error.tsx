import React from 'react'

function Error(props: ErrorProps) {
    const { statusCode } = props;

    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = (props: IntialProps) => {
    const { res, err } = props;
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

interface ErrorProps {
    statusCode: number;
}

interface Response {
    statusCode: number;
}

interface IntialProps {
    res: Response;
    err: Response;
}

export default Error