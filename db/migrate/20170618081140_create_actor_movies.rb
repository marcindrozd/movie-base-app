class CreateActorMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :actor_movies do |t|
      t.references :actor, index: true
      t.references :movie, index: true

      t.timestamps
    end
  end
end
