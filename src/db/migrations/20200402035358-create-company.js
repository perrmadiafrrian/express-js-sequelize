/**
 * Create Company Table
 *
 * @export
 * @param {import('sequelize/types').QueryInterface} queryInterface
 * @param {import('sequelize/lib/data-types')} Sequelize
 */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("companies", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}

/**
 * Create Company Table
 *
 * @export
 * @param {import('sequelize/types').QueryInterface} queryInterface
 * @param {import('sequelize/lib/data-types')} Sequelize
 */
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("companies");
}
