module Api
  module V1
    class MoviesController < ApplicationController
      def index
        render json: Movie.all
      end

      def show
        render json: Movie.find(params[:id])
      end

      def create
        movie = Movie.new(movie_params)
        if movie.save
          render json: movie
        else
          render json: { error: movie.errors }, status: 422
        end
      end

      def update
        movie = Movie.find(params[:id])
        if movie.update(movie_params)
          render json: movie
        else
          render json: { error: movie.errors }, status: 422
        end
      end

      def destroy
        movie = Movie.find(params[:id])
        movie.destroy
        head :no_content
      end

      private

      def movie_params
        params.require(:move).permit(:title, :description, :year, actor_ids: [])
      end
    end
  end
end
