export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
