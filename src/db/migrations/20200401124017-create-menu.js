/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize/types/lib/data-types')} Sequelize
 */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("menus", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    menu_code: {
      type: Sequelize.SMALLINT
    },
    name: {
      type: Sequelize.STRING
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
  return queryInterface.dropTable("menus");
}
