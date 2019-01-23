class Api::V1::BreadImagesController < ApplicationController
  def index
    bread = Bread.all
    bread_images_url = []
    bread.each do |brd|
      url = url_for(brd.bread_picture)
      bread_images_url << url
    end
    render json: bread_images_url
  end

  def show
  end
end
