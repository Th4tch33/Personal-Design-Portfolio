function LoadingScreen() {
  return (
    <>
      <div id="loadingScreen">
        <div id="loadingContentWrapper">
          <h3 className="white">Loading...</h3>
          <img
            className="loadingIcon"
            src="/Icons/loadingIcon.png"
            alt="loading..."
          />
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
