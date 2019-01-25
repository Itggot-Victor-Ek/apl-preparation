class AddCategoryToBread < ActiveRecord::Migration[5.2]
  def change
    add_column :breads, :category, :string
  end
end
