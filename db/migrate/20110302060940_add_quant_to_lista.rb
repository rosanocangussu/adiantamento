class AddQuantToLista < ActiveRecord::Migration
  def self.up
    add_column :listas, :quant, :integer
  end

  def self.down
    remove_column :listas, :quant
  end
end
