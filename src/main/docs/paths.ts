import { breweryPath } from './paths/brewery-path'

export default {
  '/brewery': { get: breweryPath.get, put: breweryPath.put, post: breweryPath.post },
  '/brewery/{breweryId}': { delete: breweryPath.delete }
}
