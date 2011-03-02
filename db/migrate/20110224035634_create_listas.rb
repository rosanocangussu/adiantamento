class CreateListas < ActiveRecord::Migration
  def self.up
    create_table :listas do |t|
      t.string :cpf
      t.string :nome
      t.string :setor
      t.integer :quant

      t.timestamps
    end
  end

  def self.down
    drop_table :listas
  end
end
