export function getBackRoute(pathname) {
  const exactRoutes = {
    "/quiz": "/concepts",
    "/attributes": "/quiz",
    "/quiz2": "/attributes",
    "/filas-columnas": "/quiz2",
    "/quiz3": "/filas-columnas",
    "/combinar-celda": "/quiz3",
    "/quiz4": "/combinar-celda",
    "/reto": "/quiz4",
  }

  if (exactRoutes[pathname]) return exactRoutes[pathname]
  if (pathname.startsWith("/lessons/lesson1")) return "/concepts"
  if (pathname.startsWith("/lessons/lesson2")) return "/attributes"

  return null
}
