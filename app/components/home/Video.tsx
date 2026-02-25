type VideoProps = {
    loadBigger: boolean;
}


// ASK: DesktopVideo and MobileVideo for home page
const DesktopVideo = "/home/video/d.mp4";
const MobileVideo = "/home/video/m.mp4";


export default function Video(props: VideoProps) {
    const { loadBigger } = props;
    return (
        <video
            src={loadBigger ? DesktopVideo : MobileVideo}
            className="w-full h-auto"
            autoPlay={true}
            loop={true}
            playsInline={true}
            preload="auto"
            muted
          ></video>
    )
}