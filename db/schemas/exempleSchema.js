export function exemple(Schema) {
  return new Schema({
  	notification_id: { type: String, required: true },
  	type: { type: String, required: true },
  	seen: { type: Boolean, default: false },
  	user_id: { type: String, required: true },
  	property_id: { type: String, required: true },
  	their_property_id: { type: String }
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}