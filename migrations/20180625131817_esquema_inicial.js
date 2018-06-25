
exports.up = knex => knex.schema.createTable("pessoa", tb => {
    tb.increments("idpessoa")
    tb.string("nomepessoa").notNullable()
    tb.timestamp("telefonepessoa").notNullable().defaultTo(knex.fn.now())
  })
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("pessoa")
  };