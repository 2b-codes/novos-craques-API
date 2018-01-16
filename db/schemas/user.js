export function user(Schema) {
  return new Schema({
  	user_id			   : { type: String, required: true	 },
    
    name           : { type: String, required: true  },
  	last_name	     : { type: String, required: true	 },
    cell_phone     : { type: String, required: true  }, //telefone celular
    email          : { type: String, required: true  }, //email
    idol          : { type: String, required: true  }, //email
    leg          : { type: String, required: true  }, //email

    sex            : { type: String, required: true  }, //sexo
    birthday       : { type: Date,   required: true  }, //nascimento
    username       : { type: String, required: true  }, //apelido
    password       : { type: String, required: true  }, //senha
    
    image          : { type: String, required: false }, //imagem
    
    
    role           : { type: String, required: true  }, //regra/tipo de usuario
    active         : { type: Boolean, default: true  },  //ativo
    
    cep            : { type: String, required: false  }, // cep
    street         : { type: String, required: false  }, //rua
    number         : { type: String, required: false  }, //numero
    complement     : { type: String, required: false  }, //complemento
    neighborhood   : { type: String, required: false  }, //bairro
    city           : { type: String, required: false  }, // cidade
    state          : { type: String, required: false  }, //estado
    country        : { type: String, required: false  }, //pais
    guardian_name  : { type: String, required: false  }, //tutor, responsável
    guardian_phone : { type: String, required: false  },
    formation      : { type: String, required: false  }, // formação
    
    hometown       : { type: String, required: false }, //cidade natal
    origin_state   : { type: String, required: false }, //estado de natal
    origin_city    : { type: String, required: false }, //cidade natal
    find_us        : { type: String, required: false }, //nos encontrou de onde
    weight         : { type: String, required: false }, //peso
    height         : { type: String, required: false }, //altura

  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}