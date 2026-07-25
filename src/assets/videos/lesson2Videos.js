export const lesson2Videos = {
  border: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013714/border_xy8o60.mp4",
  cellpadding: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013701/cellpadding_zw7alp.mp4",
  cellspacing: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013701/cellspacing_luj2nu.mp4",
  width: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013714/width_lkudoj.mp4",
  height: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013714/height_m1ob4z.mp4",
  align: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013713/align_ig7qam.mp4",
  id: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013710/id_jslwtn.mp4",
  class: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013704/class_nrlxsn.mp4",
  style: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013713/style_vfs2vj.mp4",
  title: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013700/tittle_welnuz.mp4",
  bgcolor: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013719/bgcolor_ox3hyg.mp4",
  background: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013722/background_e4leyr.mp4",
  bordercolor: "https://res.cloudinary.com/fci62b4m/video/upload/v1785013676/bordercolor_q6cqxw.mp4",
}

export function getLesson2Video(tagLabel) {
  return lesson2Videos[tagLabel] ?? ""
}
