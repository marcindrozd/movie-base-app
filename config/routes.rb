Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :actors, except: %i(new edit)
      resources :movies, except: %i(new edit)
    end
  end

  post "/login", to: "sessions#create"

  root to: "pages#index"
  get "*path", to: "pages#index"
end
