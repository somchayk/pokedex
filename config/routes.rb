Rails.application.routes.draw do
  namespace :api do
    resources :pokemons 
  end
end