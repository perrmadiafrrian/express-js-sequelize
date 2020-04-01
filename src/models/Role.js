export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      name: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN
    },
    {
      underscored: true
    }
  );
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};
