
const ErrorMessage = () => {
  return (
    <div>
        <div id="floatingDiv" className=" absolute top-0 right-0 p-4 bg-red-200 text-red-400 bg-opacity-70 rounded-lg shadow-md animate-wiggle">
            <ul className="list-disc list-inside">
            <li className="mb-2">Error 1: This is the first error message.</li>
            <li className="mb-2">Error 2: This is the second error message.</li>
            <li className="mb-2">Error 3: This is the third error message.</li>
            <li className="mb-2">Error 3: This is the third error message.</li>
            <li className="mb-2">Error 3: This is the third error message.</li>
            <li className="mb-2">Error 3: This is the third error message.</li>
            </ul>
        </div>
    </div>
  )
}

export default ErrorMessage