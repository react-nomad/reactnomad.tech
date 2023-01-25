import * as React from 'react'
import Contact from '../contact'

const Page = ({ children, heading, caption, seo }) => {
    return (
        <div className="page-wrapper">
            {heading ?
                <h1 className="page-header mt-8 text-center">
                    {heading}
                </h1>
            : null }
            {caption ?
                <h2 className="text-center text-lg font-semibold mb-16">
                    {caption}
                </h2>
            : null }
            {children}
            <Contact />
        </div>
    )
}

export default Page