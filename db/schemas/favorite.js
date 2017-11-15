export function favorite(Schema) {
  return new Schema({
  	favorite_id	: { type: String, required: true },
  	followed	: { type: String, required: true }, //seguido
  	follower	: { type: String, required: true }, //seguidor
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}