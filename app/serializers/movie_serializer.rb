class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :year, :actor_ids

  def actor_ids
    object.actors.ids
  end
end
