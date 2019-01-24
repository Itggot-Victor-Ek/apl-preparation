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
    end
  end
end
