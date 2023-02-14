import { serverError } from './components/server-error'
import { addBreweryParamsSchema } from './schemas/add-brewery-params-schema'
import { brewerySchema } from './schemas/brewery-schema'
import { updateBreweryParamsSchemas } from './schemas/update-brewery-params-schema'

export default {
  brewery: brewerySchema,
  error: serverError,
  addBreweryParams: addBreweryParamsSchema,
  updateBreweryParams: updateBreweryParamsSchemas
}
