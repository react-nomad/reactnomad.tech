import * as React from 'react'
import { Link } from 'gatsby'

const Contact = () => {
    return (
        <div className="p-4 md:p-8 my-16 mx-2">
          <h2 className="page-header text-center my-2">
            Ready To Get Started?
          </h2>
          <p className="my-8 text-center">
            <strong title="ReactNomad - Your #1 React Development Solutions Provider">ReactNomad is your #1 React development solutions provider</strong>. Get in touch with us today to start making your tech dreams come true!
          </p>
          <Link 
                    to="/contact/" 
                    className="flex flex-col w-full md:w-fit mx-auto"
                    title="Contact ReactNomad To Get Started Today!"
                  >
                    <button className="text-xl button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                      Contact ReactNomad Today
                    </button>
                </Link>
                
        </div>
    )
}

export default Contact