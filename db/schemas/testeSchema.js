export function teste(Schema) {
  return new Schema({
  	name	: { type: String, required: true },
  	id		: { type: String, required: true },
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}