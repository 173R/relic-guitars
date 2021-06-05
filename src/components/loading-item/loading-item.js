import React from "react"
import ContentLoader from "react-content-loader"

const LoadItem = (props) => (
  <ContentLoader
    speed={1}
    width={300}
    height={460}
    viewBox="0 0 300 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="300" height="300" />
    <rect x="20" y="310" rx="10" ry="10" width="250" height="40" />
    <rect x="77" y="375" rx="10" ry="10" width="140" height="20" />
  </ContentLoader>
)

export default LoadItem;