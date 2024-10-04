
function OvalShape() {
    return (
        <svg
            className="blur-2xl"
            width="800" // You can adjust the width
            height="400" // You can adjust the height to modify the oval ratio
            viewBox="0 0 300 500" // Set the viewbox dimensions
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse cx="250" cy="75" rx="400" ry="75" fill="#126e7a" />
        </svg>
    )
}


export default OvalShape;