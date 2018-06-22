const createRoute = ({ file, name, path }, config = {}) => ({
  ...config,
  component: () => import(`@/pages/${file}`),
  name,
  path
})

export { createRoute }
