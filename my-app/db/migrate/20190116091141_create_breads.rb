class CreateBreads < ActiveRecord::Migration[5.2]
  def change
    create_table :breads do |t|
      t.text :name
      t.text :description

      t.timestamps
    end
  end
end
