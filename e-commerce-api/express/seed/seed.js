const productsSeedFile = 'products.json';
const discountsSeedFile = 'discounts.json';

const seed = function(repo) {
    const _self = this;

    _self.seedProducts = async function() {
        try {
            const doneSeedFile = await repo.getDoneSeedFile(productsSeedFile);

            if (doneSeedFile.length > 0) {
                return ;
            }

            const products = require(`../seed/${productsSeedFile}`);
            for (const product of products) {
                await repo.createProduct(product.uuid, product.name, product.price);
            }

            await repo.createDoneSeedFile(productsSeedFile);
        } catch (err) {
            console.error('Error in seeding products:', err);
        }
    }

    _self.seedDiscounts = async function() {
        try {
            const doneSeedFile = await repo.getDoneSeedFile(discountsSeedFile);

            if (doneSeedFile.length > 0) {
                return ;
            }

            const discounts = require(`../seed/${discountsSeedFile}`);
            for (const discount of discounts) {
                await repo.createDiscount(discount.uuid, discount.discountPercentage, discount.price);
            }

            await repo.createDoneSeedFile(discountsSeedFile);
        } catch (err) {
            console.error('Error in seeding discounts:', err);
        }
    }

    return _self;
  }
  
  module.exports = seed;