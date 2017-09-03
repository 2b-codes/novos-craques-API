export function video(Schema) {
  return new Schema({
  	video_id	: { type: String, required: true }	
  	user_id		: { type: String, required: true }
  	sport_id	: { type: String, required: true }
  	URL			: { type: String, required: true }	
  	likes		: { type: Number, required: true }		
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}