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
    render json: url_for(Bread.find(params[:id]).bread_picture)
  end

  def search
    bread = Bread.where("name like ?", "%#{params[:string]}%")
    bread_images_url = []
    bread.each do |brd|
      url = url_for(brd.bread_picture)
      bread_images_url << url
    end
    render json: bread_images_url
  end
end
