import React, {useEffect} from 'react'
import Loading from './Loading';

export default function Page(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div role="main" className="main">
            <div className={props.className ? props.className : "container py-4"}>
                <div className={props.headerContainerClasses}>
                    <h1 className="mb-1" style={{fontWeight: 'bold'}}>
                        {props.title}
                    </h1>
                </div>
                <hr className="m-3" />
                {props.children}
            </div>
        </div>
    )
}
