class IcaController < ApplicationController
  def index
    breads = Bread.all
    images = []
    breads.each_with_index do |bread, i|
      images << breads[i].bread_picture
    end
    @return_value = [breads, images]
    return @return_value
  end

  def show
    @bread = Bread.find(params[:bread])
  end

  def search
    breads = Bread.all
    images = []
    breads.each_with_index do |bread, i|
      images << breads[i].bread_picture
    end
    @return_value = [breads, images]
    return @return_value
  end

end
