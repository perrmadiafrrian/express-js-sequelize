/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize/types/lib/data-types')} Sequelize
 */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("menu_roles", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    menu_id: {
      type: Sequelize.INTEGER
    },
    role_id: {
      type: Sequelize.INTEGER
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("menu_roles");
}
