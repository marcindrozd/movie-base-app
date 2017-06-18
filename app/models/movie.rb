class Movie < ApplicationRecord
  has_many :actor_movies
  has_many :actors, through: :movies
end
