module Api
  module V1
    class ActorsController < ApplicationController
      def index
        render json: Actor.all
      end

      def show
        render json: Actor.find(params[:id])
      end
    end
  end
end
