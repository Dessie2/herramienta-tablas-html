export default function LessonVideo({ src, title }) {
  if (!src) return null

  return (
    <div className="flex justify-center w-full min-w-0">
      <div className="lesson-video w-full max-w-[600px]">
        <video
          src={src}
          title={title}
          controls
          playsInline
          className="lesson-video__player"
        />
      </div>
    </div>
  )
}
