# frozen_string_literal: true

class Api::V1::HomeController < ApplicationController
  def show
    render json: Bread.find(params[:id])
  end

  def index
    render json: Bread.all
  end
end
