import { createRef } from "react";
import { FaFileDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = createRef();

  return (
    <div className="text-center mb-4">
      <h2 className="mt-4 font-bold text-4xl text-dark-01">
        Download{" "}
        <Pdf targetRef={ref} filename="blog.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <FaFileDownload />
            </button>
          )}
        </Pdf>
      </h2>
      <div style={{ width: 500 }} className="mx-auto" ref={ref}>
        <div className="mt-4">
          <p>
            Q. The differences between uncontrolled and controlled components.
          </p>
          <p>
            A. Uncontrolled components manage their own state, while controlled
            components derive their state from the parent component and notify
            the parent when their state changes. Controlled components provide
            more control and predictability over the application state, while
            uncontrolled components provide simplicity and ease of use.
          </p>
        </div>
        <div className="mt-4">
          <p>Q. Validate React props using PropTypes.</p>
          <p>
            A. Import the PropTypes library. Declare the propTypes object within
            component. Pass props to component as usual.
          </p>
        </div>
        <div className="mt-4">
          <p>Q. Difference between nodejs and express js.</p>
          <p>
            A. NodeJS is a javaScript backend runtime built. On the other hand
            ExpressJS is a framework of NodeJS.
          </p>
        </div>
        <div className="mt-4">
          <p>Q. What is a custom hook, and why will create a custom hook?</p>
          <p>
            A. A custom hook is a reusable function in React that encapsulates
            stateful logic and can be shared between components. Custom hooks
            are a powerful tool in React that can help improve code reusability,
            maintainability, and readability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
