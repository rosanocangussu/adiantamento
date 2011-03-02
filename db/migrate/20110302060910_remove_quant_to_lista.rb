class RemoveQuantToLista < ActiveRecord::Migration
  def self.up
    remove_column :listas, :quant
  end

  def self.down
    add_column :listas, :quant, :integer
  end
end
