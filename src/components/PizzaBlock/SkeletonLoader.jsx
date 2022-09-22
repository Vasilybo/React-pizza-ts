import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="271" rx="10" ry="10" width="280" height="27" />
        <rect x="225" y="333" rx="0" ry="0" width="0" height="1" />
        <rect x="6" y="320" rx="10" ry="10" width="268" height="76" />
        <rect x="123" y="420" rx="22" ry="22" width="152" height="45" />
        <rect x="0" y="428" rx="10" ry="10" width="91" height="27" />
        <circle cx="130" cy="130" r="130" />
    </ContentLoader>
)

export default MyLoader