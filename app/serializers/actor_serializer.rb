class ActorSerializer < ActiveModel::Serializer
  attributes :id, :name, :movie_ids

  def movie_ids
    object.movies.ids
  end
end
