export function sport(Schema) {
  return new Schema({
  	sport_id	: { type: String, required: true  },
  	name		: { type: String, required: true  },	
  	user_id		: { type: String, required: true  },
  	position	: { type: Array,  required: true  },	
  	team		: { type: String, required: false },
  	about_user	: { type: String, required: false },	
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}