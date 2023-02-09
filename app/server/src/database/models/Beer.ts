import { DataTypes, Model } from 'sequelize';
import db from '.';

class Beer extends Model {
  public abv: number;
  public address: string;
  public category: string;
  public city: string;
  public coordinates: string[];
  public country: string;
  public description: string;
  public ibu: number;
  public name: string;
  public state: string;
  public website: string;
}

Beer.init({
  abv: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinates: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ibu: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Beer',
  tableName: 'beers',
  timestamps: false,
});

export default Beer;