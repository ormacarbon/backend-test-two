import { DataTypes, Model } from 'sequelize';
import db from '.';

class Beer extends Model {
  public id: string;
  public abv: string;
  public address: string;
  public category: string;
  public city: string;
  public coordinates: string;
  public country: string;
  public description: string;
  public ibu: number;
  public name: string;
  public state: string;
  public website: string;
}

Beer.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  abv: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  coordinates: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  ibu: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Beer',
  tableName: 'beers',
  timestamps: false,
});

export default Beer;