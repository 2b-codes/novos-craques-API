export function user(Schema) {
  return new Schema({
  	user_id			   : { type: String, required: true	}
  	name			     : { type: String, required: true	}
  	password		   : { type: String, required: true	} //senha
  	email          : { type: String, required: true	} //email
  	cell_phone	   : { type: String, required: false	} //telefone celular
  	sex				     : { type: String, required: true	} //sexo
  	role			     : { type: String, required: true	} //regra/tipo de usuario
  	active			   : { type: String, required: true	}  //ativo
  	username		   : { type: String, required: true	} //apelido
  	birthday		   : { type: sljdhg  required: true	} //nascimento
  	cep				     : { type: String, required: true	} // cep
  	street			   : { type: String, required: true	} //rua
  	number			   : { type: String, required: true	} //numero
  	complement	   : { type: String, required: true	} //complemento
  	neighborhood   : { type: String, required: true	} //bairro
  	city			     : { type: String, required: true	} // cidade
  	state          : { type: String, required: true	} //estado
  	country			   : { type: String, required: true	} //pais
  	hometown		   : { type: String, required: false	} //cidade natal
  	origin_state   : { type: String, required: false	} //estado de natal
  	origin_city	   : { type: String, required: false	} //cidade natal
  	guardian_name	 : { type: String, required: true	} //tutor, responsável
  	guardian_phone : { type: String, required: true	}
  	formation		   : { type: String, required: true	} // formação
  	find_us			   : { type: String, required: false	} //nos encontrou de onde
  	weight			   : { type: String, required: false	} //peso
  	height			   : { type: String, required: false	} //altura
  	image			     : { type: String, required: false	} //imagem

  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, strict: false });
}