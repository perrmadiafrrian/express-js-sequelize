export default (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      menuCode: DataTypes.SMALLINT,
      name: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};
