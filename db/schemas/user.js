export function user(Schema) {
  return new Schema({
  	user_id			   : { type: String, required: true	 },
    
    name           : { type: String, required: true  },
  	last_name	     : { type: String, required: true	 },
    cell_phone     : { type: String, required: true  }, //telefone celular
    email          : { type: String, required: true  }, //email
    idol           : { type: String, required: false  }, //idilo
    leg             : { type: String, required: true  }, //perna de jogo
    username        : { type: String, required: true  }, // apelido
    birthday        : { type: Date,   required: true  }, // nascimento
    cep             : { type: String, required: false }, // cep
    country         : { type: String, required: false }, // pais
    sex             : { type: String, required: true  }, // sexo
    origin_state    : { type: String, required: false }, // estado de natal
    origin_city     : { type: String, required: false }, // cidade natal
    origin_country  : { type: String, required: false }, // pais natal
    guardian_name   : { type: String, required: false }, // nome do responsável
    guardian_phone  : { type: String, required: false }, // telefone do responsável
    formation       : { type: String, required: false }, // escolaridade
    find_us         : { type: String, required: false }, // nos encontrou de onde
    height          : { type: String, required: false }, // altura
    weight          : { type: String, required: false }, // peso
    team            : { type: String, required: false }, // time
    position_1      : { type: String, required: false }, // posição 1
    position_2      : { type: String, required: false }, // posição 2
    position_3      : { type: String, required: false }, // posição 3
    about_user      : { type: String, required: false }, // sobre o craque
    
    password       : { type: String, required: true  }, //senha
    
    image          : { type: String, required: false }, //imagem
    
    
    role           : { type: String, required: true  }, //regra/tipo de usuario
    active         : { type: Boolean, default: true  },  //ativo
    
    street         : { type: String, required: false  }, //rua
    number         : { type: String, required: false  }, //numero
    complement     : { type: String, required: false  }, //complemento
    neighborhood   : { type: String, required: false  }, //bairro
    city           : { type: String, required: false  }, // cidade
    state          : { type: String, required: false  }, //estado
    

  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}
