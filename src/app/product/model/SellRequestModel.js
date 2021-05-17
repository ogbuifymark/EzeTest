import mongoose from 'mongoose';

class SellRequest extends mongoose.Schema {
  constructor () {
    const SellSchema = {
      product: { type: String, lowercase: true, trim: true },
      storage: [],
      price: [{}]
      
    };
    const buy = super(SellSchema, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
    
    return buy;
  }
}
export default mongoose.model('SellRequest', new SellRequest());
