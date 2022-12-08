const eCommerceRepository = function(db) {
  // repo 
  const repo = {
    createProduct: async function(id, name, price) {
      try {
        return await db.raw(`CALL create_product(?, ?, ?);`, [
          id,
          name,
          price
        ])
      } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
      }
    },
    getDoneSeedFile: async function(filename) {
      try {
        return await db.raw(`CALL get_done_seed_file(?);`, [
          filename
        ])
      } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
      }
    },
    createDoneSeedFile: async function(filename) {
      try {
        const doneSeedFile = await db.raw(`CALL create_done_seed_file(?);`, [
          filename
        ])
        return doneSeedFile[0][0];
      } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
      }
    }
  }

  return repo;
}

module.exports = eCommerceRepository;