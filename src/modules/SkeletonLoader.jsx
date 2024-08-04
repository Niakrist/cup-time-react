import ContentLoader from "react-content-loader";

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div className="skeleton-wrapper" key={index}>
            <ContentLoader
              speed={2}
              viewBox="0 0 420 600"
              backgroundColor="#f2f0f2"
              foregroundColor="#e6e6e6"
            >
              <rect x="0" y="0" width="100%" height="70%" />
              <rect x="24" y="calc(70% + 30px)" width="80%" height="30px" />
              <rect x="24" y="calc(70% + 80px)" width="40%" height="25px" />
            </ContentLoader>
          </div>
        ))}
    </>
  );
};

export default SkeletonLoader;
