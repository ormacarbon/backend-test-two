import Brewery from '../models/Brewery';

module.exports = {
  async store(req, res) {
    try {
      const {
        abv, address, city, category, coordinates0, coordinates1,
        country, description, ibu, name, state, website,
      } = req.body;

      const CreateInfo = await Brewery.create({
        abv,
        address,
        city,
        category,
        coordinates0,
        coordinates1,
        country,
        description,
        ibu,
        name,
        state,
        website,
      });

      return res.json(CreateInfo);
    } catch (e) {
      return res.status(400).json('Something went wrong ');
    }
  },

  async show(req, res) {
    try {
      const specificId = await Brewery.findByPk(req.params.id);

      if (!specificId) {
        return res.json('This ID does not exist');
      }

      return res.json(specificId);
    } catch (e) {
      return res.status.json('Something went wrong');
    }
  },

  async delete(req, res) {
    try {
      const deleteInformation = await Brewery.findByPk(req.params.id);

      if (!deleteInformation) {
        return res.json('The information that you wanted to delete does not exist');
      }
      await deleteInformation.destroy();

      return res.json('Information deleted');
    } catch (e) {
      return res.status.json('Error! please try again later');
    }
  },

  async update(req, res) {
    try {
      const updatingInformation = await Brewery.findByPk(req.params.id);

      if (!updatingInformation) {
        return res.json('The id you entered is not valid');
      }

      const updatedInformation = await updatingInformation.update(req.body);
      return res.json(updatedInformation);
    } catch {
      return res.status.json('Error, updating this item was not possible');
    }
  },
};
