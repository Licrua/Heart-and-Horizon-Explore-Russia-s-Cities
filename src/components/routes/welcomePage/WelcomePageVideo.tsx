type WelcomePageVideoType = {
  styles: CSSModuleClasses;
};

function WelcomePageVideo({ styles }: WelcomePageVideoType) {
  return (
    <video autoPlay muted loop className={styles.background_video}>
      <source
        src="/src/assets/videos/4169986-hd_1920_1080_30fps_(online-video-cutter.com).mp4"
        type="video/mp4"
      />
      <source
        src="/src/assets/videos/4169986-hd_1920_1080_30fps (online-video-cutter.com).webm"
        type="video/webm"
      />
    </video>
  );
}
export default WelcomePageVideo;
