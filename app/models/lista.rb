class Lista < ActiveRecord::Base
  SETOR = %w(Inspecao Capacitacao Transporte Outros)
  
 scope :dois, where(:quant => true).order("nome asc")
 scope :todos, order("nome asc")

end
