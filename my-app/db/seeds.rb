# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Dir.foreach("./db/seedImages/") do |file|
    next if file == '.' || file == '..'
    
    @bread = Bread.create(name:file, description: Faker::Lorem.paragraph_by_chars)
    @bread.bread_picture.attach(io: File.open('./db/seedImages/' + file), filename: file)

    if @bread.bread_picture.attached?
        puts "File attached"
    end
end
