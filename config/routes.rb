Rails.application.routes.draw do
  get 'audition/index'
  get 'about/index'
  resources :tops
  resources :blogs
  resources :news
  root 'tops#index'
end
