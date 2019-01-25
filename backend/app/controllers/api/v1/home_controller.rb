# frozen_string_literal: true

module Api
  module V1
    class HomeController < ApplicationController
      def show
        render json: Bread.find(params[:id])
      end

      def index
        render json: Bread.all
      end

      def search
        render json: Bread.where('name like ?', "%#{params[:string]}%")
      end

      def update
        bread = Bread.find(params[:id])
        bread.update(price: params[:price])
      end
    end
  end
end
