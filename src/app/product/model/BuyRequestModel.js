import mongoose from 'mongoose';

class BuyRequest extends mongoose.Schema {
  constructor () {
    const BuySchema = {
      product: { type: String, lowercase: true, trim: true },
      storage: [],
      price: [{}]
      
    };
    const buy = super(BuySchema, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
    
    return buy;
  }
}
export default mongoose.model('BuyRequest', new BuyRequest());
