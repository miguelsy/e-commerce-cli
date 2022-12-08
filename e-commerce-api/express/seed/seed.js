const productSeedFile = 'products.json'

const seed = function(repo) {
    const _self = this;

    _self.seedProducts = async function() {
        try {
            const doneSeedFile = await repo.getDoneSeedFile(productSeedFile);

            if (doneSeedFile.length > 0) {
                return ;
            }

            const products = require(`../seed/${productSeedFile}`);
            for (const product of products) {
                await repo.createProduct(product.uuid, product.name, product.price);
            }

            await repo.createDoneSeedFile(productSeedFile);
        } catch (err) {
            console.error('Error in seeding:', err);
        }
    }

    return _self;
  }
  
  module.exports = seed;