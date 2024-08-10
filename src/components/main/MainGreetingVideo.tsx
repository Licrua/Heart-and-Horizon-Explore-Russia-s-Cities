type MainGreetingVideoType = {
  styles: CSSModuleClasses;
};

function MainGreetingVideo({ styles }: MainGreetingVideoType) {
  return (
    <video autoPlay muted loop className={styles.background_video}>
      <source
        src="/src/assets/videos/4169986-hd_1920_1080_30fps.mp4"
        type="video/mp4"
      />
      <source
        src="/src/assets/videos/4169986-hd_1920_1080_30fps.webm"
        type="video/webm"
      />
    </video>
  );
}
export default MainGreetingVideo;
